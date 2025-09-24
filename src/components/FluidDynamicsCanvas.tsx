import { useEffect, useRef, useState } from 'react';
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  WebGLRenderTarget,
  LinearFilter,
  RGBAFormat,
  UnsignedByteType,
  FloatType,
  HalfFloatType,
  ShaderMaterial,
  Vector2,
  PlaneGeometry,
  Mesh
} from 'three';

// Vertex shader for fluid simulation
const fluidVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader for velocity field
const velocityFragmentShader = `
  uniform sampler2D velocityTexture;
  uniform sampler2D pressureTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform vec2 mouseVelocity;
  uniform float mouseInfluence;
  uniform float mouseSpeed;
  uniform float time;
  uniform float viscosity;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    // Sample neighboring velocity values
    vec2 velocity = texture2D(velocityTexture, vUv).xy;
    
    // Mouse interaction - enhanced force injection
    vec2 mouseDir = vUv - mousePos;
    float mouseDist = length(mouseDir);
    
    if (mouseDist < mouseInfluence) {
      float influence = 1.0 - (mouseDist / mouseInfluence);
      influence = influence * influence; // Quadratic falloff for sharper boundaries
      
      // Speed-dependent force multiplier
      float speedMultiplier = 1.0 + mouseSpeed * 8.0; // Much stronger speed response
      
      // Create powerful vorticity around mouse
      vec2 tangent = vec2(-mouseDir.y, mouseDir.x);
      velocity += tangent * influence * speedMultiplier * 0.08; // 4x stronger
      
      // Add directional force based on mouse movement
      velocity += mouseVelocity * influence * speedMultiplier * 0.12;
      
      // Radial pressure waves for ripple effect
      float ripple = sin(mouseDist * 40.0 - time * 8.0) * 0.5 + 0.5;
      velocity += normalize(mouseDir) * influence * ripple * speedMultiplier * 0.06;
      
      // Surface tension simulation - repel when very close
      if (mouseDist < mouseInfluence * 0.3) {
        float repel = (mouseInfluence * 0.3 - mouseDist) / (mouseInfluence * 0.3);
        velocity += normalize(mouseDir) * repel * speedMultiplier * 0.15;
      }
    }
    
    // Enhanced self-advection with turbulence
    vec2 coord = vUv - velocity * texel * 0.8; // Stronger advection
    vec2 selfAdvected = texture2D(velocityTexture, coord).xy;
    velocity = mix(velocity, selfAdvected, 0.92);
    
    // Add subtle turbulence for organic motion
    float noise = sin(vUv.x * 15.0 + time) * cos(vUv.y * 12.0 + time * 0.7) * 0.002;
    velocity += vec2(noise, -noise);
    
    // Apply viscosity with speed-dependent damping
    float dynamicViscosity = viscosity * (1.0 + mouseSpeed * 0.5);
    velocity *= (1.0 - dynamicViscosity);
    
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

// Fragment shader for pressure solver
const pressureFragmentShader = `
  uniform sampler2D pressureTexture;
  uniform sampler2D velocityTexture;
  uniform vec2 resolution;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    // Jacobi iteration for pressure solving
    float pressure = texture2D(pressureTexture, vUv).x;
    
    float left = texture2D(pressureTexture, vUv - vec2(texel.x, 0.0)).x;
    float right = texture2D(pressureTexture, vUv + vec2(texel.x, 0.0)).x;
    float bottom = texture2D(pressureTexture, vUv - vec2(0.0, texel.y)).x;
    float top = texture2D(pressureTexture, vUv + vec2(0.0, texel.y)).x;
    
    // Divergence of velocity field
    vec2 velLeft = texture2D(velocityTexture, vUv - vec2(texel.x, 0.0)).xy;
    vec2 velRight = texture2D(velocityTexture, vUv + vec2(texel.x, 0.0)).xy;
    vec2 velBottom = texture2D(velocityTexture, vUv - vec2(0.0, texel.y)).xy;
    vec2 velTop = texture2D(velocityTexture, vUv + vec2(0.0, texel.y)).xy;
    
    float divergence = 0.5 * ((velRight.x - velLeft.x) + (velTop.y - velBottom.y));
    
    pressure = (left + right + bottom + top - divergence) * 0.25;
    
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

// Fragment shader for final fluid rendering with droplets
const fluidRenderFragmentShader = `
  uniform sampler2D velocityTexture;
  uniform sampler2D pressureTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform vec2 mouseVelocity;
  uniform float mouseSpeed;
  uniform float time;
  uniform float mouseInfluence;
  uniform float aspectRatio; // Screen aspect ratio for perfect circles
  varying vec2 vUv;

  // Enhanced noise functions
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 8; i++) { // More octaves for detail
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  // Perfect circular SDF that accounts for aspect ratio to prevent warping
  float dropletSDF(vec2 p, vec2 center, float radius) {
    // Convert to aspect ratio corrected space for perfect circles
    vec2 aspectCorrectedP = p;
    vec2 aspectCorrectedCenter = center;
    
    // Apply aspect ratio correction - make coordinates square
    if (aspectRatio > 1.0) {
      // Wide screen - compress X
      aspectCorrectedP.x *= aspectRatio;
      aspectCorrectedCenter.x *= aspectRatio;
    } else {
      // Tall screen - compress Y  
      aspectCorrectedP.y /= aspectRatio;
      aspectCorrectedCenter.y /= aspectRatio;
    }
    
    return length(aspectCorrectedP - aspectCorrectedCenter) - radius;
  }

  void main() {
    vec2 velocity = texture2D(velocityTexture, vUv).xy;
    float pressure = texture2D(pressureTexture, vUv).x;
    
    // Balanced background with dynamic elements
    vec3 color = vec3(0.04, 0.06, 0.10);
    
    // Displacement distortion based on velocity field
    vec2 distortedUV = vUv + velocity * 0.05;
    
    // Generate 2D droplets with mouse interaction
    for(int i = 0; i < 8; i++) { // Fewer droplets for cleaner look
      float fi = float(i);
      
      // Simple 2D movement pattern
      vec2 basePos = vec2(
        0.5 + 0.25 * sin(time * 0.3 + fi * 1.5),
        0.5 + 0.25 * cos(time * 0.2 + fi * 1.2)
      );
      
      // Mouse interaction - repulsion and attraction
      vec2 mouseDir = basePos - mousePos;
      float mouseDist = length(mouseDir);
      if (mouseDist < mouseInfluence * 1.2) {
        float influence = (mouseInfluence * 1.2 - mouseDist) / (mouseInfluence * 1.2);
        // Simple 2D displacement
        basePos += normalize(mouseDir) * influence * 0.2;
      }
      
      // Apply 2D velocity field influence (flattened)
      vec2 dropletPos = basePos + velocity * 0.08;
      float radius = 0.05 + 0.02 * sin(time * 0.6 + fi);
      
      float sdf = dropletSDF(distortedUV, dropletPos, radius);
      
      // Simple droplet rendering without complex lighting
      if(sdf < 0.02) {
        // Simple gradient based on distance from center
        float gradient = smoothstep(0.02, -0.01, sdf);
        
        // Clean mercury colors without velocity dependency
        vec3 baseColor = vec3(0.12, 0.14, 0.18);
        vec3 highlight = vec3(0.4, 0.45, 0.55);
        
        // Aspect-corrected radial gradient for consistent circular appearance
        vec2 aspectCorrectedUV = distortedUV;
        vec2 aspectCorrectedDropletPos = dropletPos;
        
        if (aspectRatio > 1.0) {
          aspectCorrectedUV.x *= aspectRatio;
          aspectCorrectedDropletPos.x *= aspectRatio;
        } else {
          aspectCorrectedUV.y /= aspectRatio;
          aspectCorrectedDropletPos.y /= aspectRatio;
        }
        
        float radial = 1.0 - length(aspectCorrectedUV - aspectCorrectedDropletPos) / radius;
        color = mix(baseColor, highlight, radial * gradient);
      }
    }
    
    // Balanced velocity visualization
    float velocityMagnitude = length(velocity);
    vec3 velocityColor = vec3(
      velocity.x * 0.35 + 0.12, 
      velocityMagnitude * 0.45, 
      velocity.y * 0.35 + 0.18
    ) * velocityMagnitude * 3.2;
    color += velocityColor;
    
    // Balanced pressure field visualization
    color += vec3(0.08, 0.12, 0.16) * abs(pressure) * 2.2;
    
    // Enhanced mouse interaction effects
    float mouseDist = length(vUv - mousePos);
    if(mouseDist < mouseInfluence) {
      float influence = 1.0 - (mouseDist / mouseInfluence);
      
      // Subtle reactive glow trails
      vec3 mouseGlow = vec3(0.12, 0.18, 0.25) * influence * influence;
      mouseGlow += vec3(0.15, 0.2, 0.28) * mouseSpeed * influence * 0.5; // Reduced brightness
      
      // Subtle pressure rings
      float rings = sin(mouseDist * 60.0 - time * 10.0) * 0.3 + 0.7;
      mouseGlow += vec3(0.08, 0.12, 0.16) * rings * influence * mouseSpeed * 0.5;
      
      color += mouseGlow;
      
      // Displacement distortion near cursor
      vec2 distortion = normalize(vUv - mousePos) * influence * mouseSpeed * 0.02;
      color += texture2D(velocityTexture, vUv + distortion).xyz * 0.1;
    }
    
    // Enhanced organic texture with movement
    float noiseValue = fbm(vUv * 12.0 + velocity * 2.0 + time * 0.2);
    color += vec3(noiseValue * 0.05);
    
    // Subtle dynamic vignette
    float vignette = smoothstep(0.8, 0.2, length(vUv - 0.5));
    vignette += mouseSpeed * 0.05; // Much less mouse influence
    color *= vignette * 0.75 + 0.35;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Enhanced post-processing with brightness enhancement
const postProcessFragmentShader = `
  uniform sampler2D inputTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform float mouseSpeed;
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    float distFromCenter = length(vUv - 0.5);
    float mouseDist = length(vUv - mousePos);
    
    // Sample color normally without chromatic aberration
    vec3 color = texture2D(inputTexture, vUv).rgb;
    
    // Enhanced bloom with multiple passes
    vec3 bloom = vec3(0.0);
    float bloomRadius = 2.0 + mouseSpeed * 1.5;
    
    for(int i = -3; i <= 3; i++) {
      for(int j = -3; j <= 3; j++) {
        vec2 offset = vec2(float(i), float(j)) * texel * bloomRadius;
        vec3 texSample = texture2D(inputTexture, vUv + offset).rgb;
        float weight = 1.0 / (1.0 + length(offset) * 80.0);
        bloom += texSample * weight;
      }
    }
    bloom /= 49.0;
    
    // Balanced bloom mix
    color = mix(color, bloom, 0.35 + mouseSpeed * 0.05);
    
    // Subtle film grain with movement
    float grain = (fract(sin(dot(vUv + time * 0.1, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.03;
    grain += (fract(sin(dot(vUv.yx + mouseSpeed, vec2(78.233, 12.9898))) * 43758.5453) - 0.5) * 0.02;
    color += grain;
    
    // Moderate brightness enhancement
    color *= 1.3 + mouseSpeed * 0.1;
    
    // Balanced contrast and saturation
    color = (color - 0.4) * (1.35 + mouseSpeed * 0.08) + 0.5;
    
    // Color grading for balanced look
    color.r = pow(color.r, 0.9);
    color.g = pow(color.g, 0.92);
    color.b = pow(color.b, 0.98);
    
    // Balanced vignette with mouse interaction
    float vignette = 1.0 - distFromCenter * 0.6;
    vignette += mouseSpeed * 0.05;
    color *= vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function FluidDynamicsCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene>();
  const rendererRef = useRef<WebGLRenderer>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const mouseVelocityRef = useRef({ x: 0, y: 0 });
  const mouseSpeedRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    try {
      const renderer = new WebGLRenderer({ 
        antialias: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
        alpha: false
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Check WebGL capabilities with comprehensive fallback
      const gl = renderer.getContext();
      const supportFloatTextures = gl.getExtension('OES_texture_float') || gl.getExtension('WEBGL_color_buffer_float');
      const supportHalfFloatTextures = gl.getExtension('OES_texture_half_float') || gl.getExtension('WEBGL_color_buffer_float');
      
      // Determine best available texture type
      let textureType = UnsignedByteType; // Safe fallback for all devices
      let precisionLevel = 'standard';
      
      if (supportFloatTextures) {
        textureType = FloatType;
        precisionLevel = 'high';
      } else if (supportHalfFloatTextures) {
        textureType = HalfFloatType;
        precisionLevel = 'medium';
      }
      
      console.log(`Fluid simulation initialized with ${precisionLevel} precision`);
      
      mountRef.current.appendChild(renderer.domElement);

      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Create render targets for ping-pong buffers with optimal texture type
      const renderTargetA = new WebGLRenderTarget(512, 512, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        type: textureType,
        generateMipmaps: false,
        depthBuffer: false,
        stencilBuffer: false
      });

      const renderTargetB = new WebGLRenderTarget(512, 512, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        type: textureType,
        generateMipmaps: false,
        depthBuffer: false,
        stencilBuffer: false
      });

      const pressureTargetA = new WebGLRenderTarget(512, 512, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        type: textureType,
        generateMipmaps: false,
        depthBuffer: false,
        stencilBuffer: false
      });

      const pressureTargetB = new WebGLRenderTarget(512, 512, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat,
        type: textureType,
        generateMipmaps: false,
        depthBuffer: false,
        stencilBuffer: false
      });

      const finalRenderTarget = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
        minFilter: LinearFilter,
        magFilter: LinearFilter
      });

      // Adjust simulation parameters based on precision level
      const simParams = {
        high: { mouseInfluence: 0.2, viscosity: 0.002, iterations: 5, renderInfluence: 0.25 },
        medium: { mouseInfluence: 0.15, viscosity: 0.004, iterations: 4, renderInfluence: 0.2 },
        standard: { mouseInfluence: 0.1, viscosity: 0.008, iterations: 3, renderInfluence: 0.15 }
      };
      
      const params = simParams[precisionLevel as keyof typeof simParams];

      // Create materials
      const velocityMaterial = new ShaderMaterial({
        vertexShader: fluidVertexShader,
        fragmentShader: velocityFragmentShader,
        uniforms: {
          velocityTexture: { value: null },
          pressureTexture: { value: null },
          resolution: { value: new Vector2(512, 512) },
          mousePos: { value: new Vector2(0.5, 0.5) },
          mouseVelocity: { value: new Vector2(0.0, 0.0) },
          mouseInfluence: { value: params.mouseInfluence },
          mouseSpeed: { value: 0.0 },
          time: { value: 0 },
          viscosity: { value: params.viscosity }
        }
      });

    const pressureMaterial = new ShaderMaterial({
      vertexShader: fluidVertexShader,
      fragmentShader: pressureFragmentShader,
      uniforms: {
        pressureTexture: { value: null },
        velocityTexture: { value: null },
        resolution: { value: new Vector2(512, 512) }
      }
    });

    const renderMaterial = new ShaderMaterial({
      vertexShader: fluidVertexShader,
      fragmentShader: fluidRenderFragmentShader,
      uniforms: {
        velocityTexture: { value: null },
        pressureTexture: { value: null },
        resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
        mousePos: { value: new Vector2(0.5, 0.5) },
        mouseVelocity: { value: new Vector2(0.0, 0.0) },
        mouseSpeed: { value: 0.0 },
        mouseInfluence: { value: params.renderInfluence },
        time: { value: 0 },
        aspectRatio: { value: window.innerWidth / window.innerHeight }
      }
    });

    const postProcessMaterial = new ShaderMaterial({
      vertexShader: fluidVertexShader,
      fragmentShader: postProcessFragmentShader,
      uniforms: {
        inputTexture: { value: null },
        resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
        mousePos: { value: new Vector2(0.5, 0.5) },
        mouseSpeed: { value: 0.0 },
        time: { value: 0 }
      }
    });

    // Create plane geometry
    const geometry = new PlaneGeometry(2, 2);
    const quadMesh = new Mesh(geometry, velocityMaterial);

    // Enhanced mouse interaction with velocity tracking
    const handleMouseMove = (event: MouseEvent) => {
      const newMouseX = event.clientX / window.innerWidth;
      const newMouseY = 1.0 - (event.clientY / window.innerHeight);
      
      // Calculate mouse velocity
      mouseVelocityRef.current.x = (newMouseX - mouseRef.current.x) * 60.0; // 60fps assumption
      mouseVelocityRef.current.y = (newMouseY - mouseRef.current.y) * 60.0;
      
      // Calculate mouse speed
      mouseSpeedRef.current = Math.sqrt(
        mouseVelocityRef.current.x * mouseVelocityRef.current.x + 
        mouseVelocityRef.current.y * mouseVelocityRef.current.y
      );
      
      // Smooth and cap the speed
      mouseSpeedRef.current = Math.min(mouseSpeedRef.current * 0.5, 5.0);
      
      // Update mouse position
      prevMouseRef.current.x = mouseRef.current.x;
      prevMouseRef.current.y = mouseRef.current.y;
      mouseRef.current.x = newMouseX;
      mouseRef.current.y = newMouseY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let frameCount = 0;
    let currentVelocityTarget = renderTargetA;
    let previousVelocityTarget = renderTargetB;
    let currentPressureTarget = pressureTargetA;
    let previousPressureTarget = pressureTargetB;
    let animationId: number;
    let isAnimating = true;

    // Animation loop with safety checks
    const animate = () => {
      if (!isAnimating) return;
      
      try {
        frameCount++;
        const time = frameCount * 0.016;

      // Apply velocity damping for smooth decay
      mouseVelocityRef.current.x *= 0.95;
      mouseVelocityRef.current.y *= 0.95;
      mouseSpeedRef.current *= 0.98;

      // Update uniforms with enhanced mouse data
      velocityMaterial.uniforms.time.value = time;
      velocityMaterial.uniforms.mousePos.value.set(mouseRef.current.x, mouseRef.current.y);
      velocityMaterial.uniforms.mouseVelocity.value.set(mouseVelocityRef.current.x, mouseVelocityRef.current.y);
      velocityMaterial.uniforms.mouseSpeed.value = mouseSpeedRef.current;
      
      renderMaterial.uniforms.time.value = time;
      renderMaterial.uniforms.mousePos.value.set(mouseRef.current.x, mouseRef.current.y);
      renderMaterial.uniforms.mouseVelocity.value.set(mouseVelocityRef.current.x, mouseVelocityRef.current.y);
      renderMaterial.uniforms.mouseSpeed.value = mouseSpeedRef.current;
      renderMaterial.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight;
      
      postProcessMaterial.uniforms.time.value = time;
      postProcessMaterial.uniforms.mousePos.value.set(mouseRef.current.x, mouseRef.current.y);
      postProcessMaterial.uniforms.mouseSpeed.value = mouseSpeedRef.current;

      // Velocity simulation step
      velocityMaterial.uniforms.velocityTexture.value = previousVelocityTarget.texture;
      velocityMaterial.uniforms.pressureTexture.value = previousPressureTarget.texture;
      quadMesh.material = velocityMaterial;
      renderer.setRenderTarget(currentVelocityTarget);
      renderer.render(scene, camera);

      // Adaptive pressure solve iterations based on precision level
      for (let i = 0; i < params.iterations; i++) {
        pressureMaterial.uniforms.pressureTexture.value = previousPressureTarget.texture;
        pressureMaterial.uniforms.velocityTexture.value = currentVelocityTarget.texture;
        quadMesh.material = pressureMaterial;
        renderer.setRenderTarget(currentPressureTarget);
        renderer.render(scene, camera);

        // Swap pressure targets
        [currentPressureTarget, previousPressureTarget] = [previousPressureTarget, currentPressureTarget];
      }

      // Render final fluid
      renderMaterial.uniforms.velocityTexture.value = currentVelocityTarget.texture;
      renderMaterial.uniforms.pressureTexture.value = currentPressureTarget.texture;
      quadMesh.material = renderMaterial;
      renderer.setRenderTarget(finalRenderTarget);
      renderer.render(scene, camera);

      // Post-processing
      postProcessMaterial.uniforms.inputTexture.value = finalRenderTarget.texture;
      quadMesh.material = postProcessMaterial;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      // Swap velocity targets
      [currentVelocityTarget, previousVelocityTarget] = [previousVelocityTarget, currentVelocityTarget];

      animationId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation frame error:', error);
        isAnimating = false;
      }
    };

    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      renderMaterial.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight;
      postProcessMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      
      finalRenderTarget.setSize(window.innerWidth, window.innerHeight);
      
      // Reset mouse position to prevent jumps
      mouseRef.current = { x: 0.5, y: 0.5 };
      mouseVelocityRef.current = { x: 0, y: 0 };
      mouseSpeedRef.current = 0;
    };

    window.addEventListener('resize', handleResize);

      scene.add(quadMesh);
      animate();
      setIsLoaded(true);


      return () => {
        isAnimating = false;
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        renderTargetA.dispose();
        renderTargetB.dispose();
        pressureTargetA.dispose();
        pressureTargetB.dispose();
        finalRenderTarget.dispose();
      };
    } catch (error) {
      console.error('Failed to initialize WebGL fluid simulation:', error);
      setIsLoaded(false);
      
      // Return empty cleanup function for error case
      return () => {};
    }
  }, []);

  return (
    <div className="absolute inset-0 bg-gray-900">
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'radial-gradient(circle at center, #0f0f0f 0%, #000000 100%)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-white text-lg font-mono">Loading fluid simulation...</div>
        </div>
      )}
    </div>
  );
}
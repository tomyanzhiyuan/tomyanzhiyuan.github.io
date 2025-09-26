export default function TestApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test App</h1>
        <p className="text-xl">If you can see this with a dark background, React is working correctly.</p>
        <div className="mt-8 p-8 bg-gray-800 rounded-lg">
          <p>This should be a dark gray box</p>
        </div>
      </div>
    </div>
  );
}

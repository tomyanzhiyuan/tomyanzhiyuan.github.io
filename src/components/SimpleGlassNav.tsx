import { Button } from './ui/button';
import GlassMorphism from './GlassMorphism';

interface SimpleGlassNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function SimpleGlassNav({ activeSection, onSectionChange }: SimpleGlassNavProps) {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-6">
      <div className="mx-auto max-w-4xl">
        <GlassMorphism intensity="medium" blur="lg" className="px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-semibold text-white font-thin">
              Tom Yan
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className={`px-4 py-2 text-sm font-thin transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-blue-600/80 text-white shadow-sm border border-blue-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 font-thin"
            >
              Menu
            </Button>
          </nav>
        </GlassMorphism>
      </div>
    </header>
  );
}
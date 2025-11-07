import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Αρχική', id: 'hero' },
    { label: 'Κανόνες', id: 'rules' },
    { label: 'Εγγραφή', id: 'registration' },
    { label: 'Βίντεο', id: 'videos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-primary"
          >
            NEXT GEN CUP
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" size="sm" className="gap-2">
              <LogIn size={16} />
              Σύνδεση
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="hero" size="sm" className="gap-2 w-full">
                <LogIn size={16} />
                Σύνδεση
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

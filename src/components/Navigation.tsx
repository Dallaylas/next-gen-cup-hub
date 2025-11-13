import { Button } from '@/components/ui/button';
import { Menu, X, LogIn, User as UserIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AuthModal } from './AuthModal';
import { AccountModal } from './AccountModal';
import { auth, onAuthStateChanged, User } from '@/lib/firebase';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Allow external code (toasts, other components) to open the auth modal
  // by dispatching a CustomEvent('openAuthBar') or by calling window.openAuthBar().
  useEffect(() => {
    const handler = () => setIsAuthModalOpen(true);
    window.addEventListener('openAuthBar', handler as EventListener);
    // attach a small global helper (best-effort) for other bundles
    try {
      (window as any).openAuthBar = () => setIsAuthModalOpen(true);
    } catch (e) {
      // ignore
    }
    return () => {
      window.removeEventListener('openAuthBar', handler as EventListener);
      try { delete (window as any).openAuthBar; } catch (e) {}
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleAuthClick = () => {
    if (currentUser) {
      // Open account modal instead of navigating away
      setIsAccountOpen(true);
    } else {
      // User is not signed in, open auth modal
      setIsAuthModalOpen(true);
    }
  };

  const navItems = [
    { label: 'Αρχική', id: 'hero' },
    { label: 'Κανόνες', id: 'rules' },
    { label: 'Εγγραφή', id: 'registration' },
    { label: 'Βίντεο', id: 'videos' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group"
            >
              <img
                src="/app/logo.png"
                alt="Next Gen Cup Logo"
                className="h-10 w-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-primary">
                NEXT GEN CUP
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              {/* Social icons */}
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/nextgengreece/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M7 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5 5h10c2.762 0 5-2.238 5-5V7c0-2.762-2.238-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM18.5 6a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@nextgenfootballgreece/featured" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a2.99 2.99 0 00-2.106-2.118C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.392.568A2.99 2.99 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.99 2.99 0 002.106 2.118C4.308 20.5 12 20.5 12 20.5s7.692 0 9.392-.568a2.99 2.99 0 002.106-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@nextgengreece" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-5 h-5">
                    <path d="M34.5 12.5c0 0-1.2.1-2.9-.1v11.9a8.6 8.6 0 0 1-8.6-8.6v13.7A8.6 8.6 0 1 1 12.5 31V38a16 16 0 1 0 22-25.5z" />
                  </svg>
                </a>
              </div>
              <Button variant="hero" size="sm" onClick={handleAuthClick}>
                {currentUser ? (
                  <>
                    <UserIcon size={16} />
                    Λογαριασμός
                  </>
                ) : (
                  <>
                    <LogIn size={16} />
                    Σύνδεση
                  </>
                )}
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/nextgengreece/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://www.youtube.com/@nextgenfootballgreece/featured" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="https://www.tiktok.com/@nextgengreece" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </div>
              <Button variant="hero" size="sm" className="w-full" onClick={handleAuthClick}>
                 {currentUser ? (
                  <>
                    <UserIcon size={16} />
                    Λογαριασμός
                  </>
                ) : (
                  <>
                    <LogIn size={16} />
                    Σύνδεση
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
  <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
  <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} user={currentUser} />
    </>
  );
};

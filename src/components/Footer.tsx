import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                NEXT GEN
              </span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Τουρνουά ποδοσφαίρου 7v7 για την επόμενη γενιά παικτών ηλικίας 18-22 ετών.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Κανόνες Τουρνουά
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Εγγραφή Ομάδας
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Προηγούμενα Τουρνουά
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Συνδεθείτε Μαζί Μας</h4>
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:info@nextgenfootballcup.com" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              info@nextgenfootballcup.com
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>© {currentYear} Next Gen Football Cup. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

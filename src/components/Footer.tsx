import { Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                NEXT GEN
              </span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Τουρνουά ποδοσφαίρου 7v7 — Επαγγελματική, ανταγωνιστική διοργάνωση.
            </p>
          </div>
          {/* Removed Quick Links section */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Συνδεθείτε Μαζί Μας</h4>
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              <a
                href="https://www.instagram.com/nextgengreece/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.youtube.com/@nextgenfootballgreece"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@nextgenfootballgreece"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path d="M34.5 12.5c0 0-1.2.1-2.9-.1v11.9a8.6 8.6 0 0 1-8.6-8.6v13.7A8.6 8.6 0 1 1 12.5 31V38a16 16 0 1 0 22-25.5z" />
                </svg>
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">nextgenfootballgreece@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>© {currentYear} Next Gen Football Cup. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

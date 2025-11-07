import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-football.jpg';
import { Countdown } from './Countdown';

export const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Next Gen Football Cup action" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-primary">
            NEXT GEN
          </span>
          <br />
          <span className="text-foreground">
            FOOTBALL CUP
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto px-4">
          Τουρνουά Elite 7v7
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-primary mb-8 font-semibold">
          Ηλικίες 18-22 • Δύο Μέρες Καθαρού Ανταγωνισμού
        </p>
        
        <div className="mb-12 p-4 sm:p-6 bg-gradient-primary/10 border-2 border-primary rounded-lg max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
            Έπαθλο €1,000
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Ο Νικητής Παίρνει Τα Πάντα
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Το Επόμενο Τουρνουά Ξεκινά Σε
          </h2>
          <Countdown />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToRegistration}
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
          >
            Εγγράψτε την Ομάδα Σας
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
          >
            Δείτε τους Κανόνες
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-football.jpg';
import { Countdown } from './Countdown';

export const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-primary">
            NEXT GEN
          </span>
          <br />
          <span className="text-foreground">
            FOOTBALL CUP
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Elite 7-a-Side Tournament
        </p>
        
        <p className="text-lg md:text-xl text-primary mb-8 font-semibold">
          Ages 18-22 • Two Days of Pure Competition
        </p>
        
        <div className="mb-12 p-6 bg-gradient-primary/10 border-2 border-primary rounded-lg max-w-2xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
            €1,000 Prize Pool
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Winner Takes All
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Next Tournament Starts In
          </h2>
          <Countdown />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToRegistration}
            className="text-lg px-8 py-6"
          >
            Register Your Team
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6"
          >
            View Rules
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

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const Registration = () => {
  const benefits = [
    'Two days of competitive football',
    'Professional referees and facilities',
    'Tournament insurance coverage',
    'Winners trophy and medals',
    'Individual awards (Top Scorer, Best Player, Best GK)',
    'Highlight video of your matches'
  ];

  return (
    <section id="registration" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Register Your <span className="text-transparent bg-clip-text bg-gradient-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Secure your spot in the next generation of football talent
          </p>
        </div>

        <Card className="bg-card border-primary/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Registration Fee</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                    €140
                  </p>
                  <p className="text-sm text-muted-foreground">Per Team</p>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-lg font-semibold text-primary">€40 Advance Payment Required</p>
                    <p className="text-sm text-muted-foreground mt-1">Balance due before tournament</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Register Now
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Limited spots available • First come, first served
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-center text-muted-foreground">
              Have questions? <a href="mailto:info@nextgenfootballcup.com" className="text-primary hover:underline">Contact us</a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

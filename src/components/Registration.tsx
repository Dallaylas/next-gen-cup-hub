import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const Registration = () => {
  const benefits = [
    'Δύο μέρες ανταγωνιστικού ποδοσφαίρου',
    'Επαγγελματίες διαιτητές και εγκαταστάσεις',
    'Ασφαλιστική κάλυψη τουρνουά',
    'Κύπελλο και μετάλλια νικητών',
    'Ατομικά βραβεία (Κορυφαίος Σκόρερ, Καλύτερος Παίκτης, Καλύτερος Τερματοφύλακας)',
    'Βίντεο με τα στιγμιότυπα των αγώνων σας'
  ];

  return (
    <section id="registration" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Εγγράψτε την <span className="text-transparent bg-clip-text bg-gradient-primary">Ομάδα Σας</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Εξασφαλίστε τη θέση σας στην επόμενη γενιά ποδοσφαιρικού ταλέντου
          </p>
        </div>

        <Card className="bg-card border-primary/20 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Τι Περιλαμβάνεται</h3>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-muted/50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">Τέλος Εγγραφής</p>
                  <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                    €140
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ανά Ομάδα</p>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                    <p className="text-base sm:text-lg font-semibold text-primary">Απαιτείται Προκαταβολή €40</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Υπόλοιπο πληρωτέο πριν το τουρνουά</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-base sm:text-lg py-5 sm:py-6"
                >
                  Εγγραφείτε Τώρα
                </Button>
                <p className="text-center text-xs sm:text-sm text-muted-foreground">
                  Περιορισμένες θέσεις • Με σειρά προτεραιότητας
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4 sm:pt-6">
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              Έχετε ερωτήσεις; <a href="mailto:info@nextgenfootballcup.com" className="text-primary hover:underline">Επικοινωνήστε μαζί μας</a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

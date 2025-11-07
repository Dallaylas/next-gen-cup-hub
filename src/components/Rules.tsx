import { Card } from '@/components/ui/card';
import { Trophy, Users, Calendar, Timer } from 'lucide-react';

export const Rules = () => {
  const rules = [
    {
      icon: Users,
      title: 'Μορφή 7v7',
      description: 'Κάθε ομάδα αποτελείται από 7 παίκτες στον αγωνιστικό χώρο. Οι αλλαγές είναι κυλιόμενες και απεριόριστες.'
    },
    {
      icon: Calendar,
      title: 'Διαγωνισμός Δύο Ημερών',
      description: 'Το τουρνουά εκτείνεται σε δύο μέρες γεμάτες δράση με ομίλους και νοκ-άουτ γύρους.'
    },
    {
      icon: Timer,
      title: 'Διάρκεια Αγώνα',
      description: 'Αγώνες ομίλων: 20 λεπτά (2x10 λεπτά ημίχρονα). Τελικοί: 30 λεπτά (2x15 λεπτά ημίχρονα).'
    },
    {
      icon: Trophy,
      title: 'Επιλεξιμότητα',
      description: 'Οι παίκτες πρέπει να είναι μεταξύ 18-22 ετών. Απαιτείται έγκυρη ταυτότητα για επαλήθευση κατά την εγγραφή.'
    }
  ];

  return (
    <section id="rules" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Κανόνες <span className="text-transparent bg-clip-text bg-gradient-primary">Τουρνουά</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Γρήγοροι ρυθμοί, ανταγωνιστικό και σχεδιασμένο για την επόμενη γενιά ποδοσφαιρικού ταλέντου
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {rules.map((rule, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-4 sm:p-6 md:p-8 group hover:scale-105"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <rule.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{rule.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 sm:mt-8 bg-muted/50 border-primary/20 p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Πρόσθετες Πληροφορίες</h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
            <p>• Μέγιστο μέγεθος ομάδας: 12 παίκτες ανά ομάδα</p>
            <p>• Εφαρμόζονται κανόνες fair play - κόκκινη κάρτα = 1 αγώνας αποκλεισμός, κίτρινες κάρτες μηδενίζονται μετά τους ομίλους</p>
            <p>• Η μπάλα παρέχεται από την οργάνωση</p>
            <p>• Όλες οι ομάδες πρέπει να έχουν ταιριαστές φανέλες με αριθμούς</p>
            <p>• Το τέλος εγγραφής καλύπτει και τις δύο μέρες διαγωνισμού και την ασφάλιση τουρνουά</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

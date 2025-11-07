import { Card } from '@/components/ui/card';
import { Trophy, Users, Calendar, Timer } from 'lucide-react';

export const Rules = () => {
  const rules = [
    {
      icon: Users,
      title: '7-a-Side Format',
      description: 'Each team consists of 7 players on the field. Substitutions are rolling and unlimited.'
    },
    {
      icon: Calendar,
      title: 'Two-Day Competition',
      description: 'The tournament spans across two action-packed days with group stages and knockout rounds.'
    },
    {
      icon: Timer,
      title: 'Match Duration',
      description: 'Group stage matches: 20 minutes (2x10 min halves). Finals: 30 minutes (2x15 min halves).'
    },
    {
      icon: Trophy,
      title: 'Eligibility',
      description: 'Players must be between 18-22 years old. Valid ID required for verification at registration.'
    }
  ];

  return (
    <section id="rules" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Tournament <span className="text-transparent bg-clip-text bg-gradient-primary">Rules</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Fast-paced, competitive, and designed for the next generation of football talent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 p-8 group hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <rule.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{rule.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/50 border-primary/20 p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Additional Information</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>• Maximum squad size: 12 players per team</p>
            <p>• Fair play rules enforced - red card = 1 match ban, yellow cards reset after group stage</p>
            <p>• Ball will be provided by the organization</p>
            <p>• All teams must have matching jerseys with numbers</p>
            <p>• Registration fee covers both days of competition and tournament insurance</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

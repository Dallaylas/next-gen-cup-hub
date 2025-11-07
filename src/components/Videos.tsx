import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const Videos = () => {
  // Placeholder video data - these will be replaced with actual YouTube video IDs
  const videos = [
    {
      id: 1,
      title: 'Tournament Highlights 2024',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      type: 'Full Match',
      duration: '15:30'
    },
    {
      id: 2,
      title: 'Best Goals Compilation',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      type: 'Highlights',
      duration: '5:45'
    },
    {
      id: 3,
      title: 'Final Match',
      thumbnail: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
      type: 'Full Match',
      duration: '28:15'
    },
    {
      id: 4,
      title: 'Skills & Tricks',
      thumbnail: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&q=80',
      type: 'Short',
      duration: '2:30'
    },
    {
      id: 5,
      title: 'Semi-Final Drama',
      thumbnail: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
      type: 'Highlights',
      duration: '8:20'
    },
    {
      id: 6,
      title: 'Player Interviews',
      thumbnail: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80',
      type: 'Short',
      duration: '3:15'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Previous <span className="text-transparent bg-clip-text bg-gradient-primary">Tournaments</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Watch the action, feel the intensity, witness the next generation of football
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3 bg-secondary/90 px-3 py-1 rounded-full text-xs font-bold text-secondary-foreground">
                  {video.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            View All Videos on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

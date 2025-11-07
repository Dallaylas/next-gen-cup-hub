import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Image as ImageIcon } from 'lucide-react';

export const Videos = () => {
  // Mix of videos and images from previous tournaments
  const media = [
    {
      id: 1,
      type: 'video',
      title: 'Στιγμιότυπα Τουρνουά 2024',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      duration: '15:30'
    },
    {
      id: 2,
      type: 'image',
      title: 'Νικητές 2024',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80'
    },
    {
      id: 3,
      type: 'video',
      title: 'Συλλογή Καλύτερων Γκολ',
      thumbnail: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
      duration: '5:45'
    },
    {
      id: 4,
      type: 'image',
      title: 'Δράση Στον Αγώνα',
      thumbnail: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&q=80'
    },
    {
      id: 5,
      type: 'video',
      title: 'Τελικός Αγώνας',
      thumbnail: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
      duration: '28:15'
    },
    {
      id: 6,
      type: 'image',
      title: 'Συνεντεύξεις Παικτών',
      thumbnail: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80'
    }
  ];

  return (
    <section id="videos" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Προηγούμενα <span className="text-transparent bg-clip-text bg-gradient-primary">Τουρνουά</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Παρακολουθήστε τη δράση, νιώστε την ένταση, γνωρίστε την επόμενη γενιά του ποδοσφαίρου
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {media.map((item) => (
            <Card 
              key={item.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.type === 'video' ? (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-background ml-1" fill="currentColor" />
                    ) : (
                      <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    )}
                  </div>
                </div>
                {item.type === 'video' && item.duration && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/80 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {item.duration}
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-base sm:text-lg w-full sm:w-auto"
            onClick={() => window.open('https://youtube.com', '_blank')}
          >
            Δείτε Όλα τα Βίντεο στο YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

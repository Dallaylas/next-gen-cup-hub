import { Hero } from '@/components/Hero';
import { Rules } from '@/components/Rules';
import { Registration } from '@/components/Registration';
import { Videos } from '@/components/Videos';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Rules />
      <Registration />
      <Videos />
      <Footer />
    </div>
  );
};

export default Index;

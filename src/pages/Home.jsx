import SEO from '../components/utils/SEO';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import Showcase from '../components/home/Showcase';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <SEO 
        title="Next-Gen IT Solutions & API Integration"
        description="AppsCare Technologies delivers high-performance API orchestration, managed IT operations, and strategic consulting for the digital enterprise."
        path="/"
      />
      <Hero />
      <ServicesPreview />
      <Showcase />
    </div>
  );
}
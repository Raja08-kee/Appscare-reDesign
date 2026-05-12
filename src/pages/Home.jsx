import SEO from '../components/utils/SEO';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import MiddlewareMarquee from '../components/home/MiddlewareMarquee'; // New Import

export default function Home() {
  return (
    <div className="w-full bg-[#020617]"> {/* Updated to dark theme background */}
      <SEO
        title="Next-Gen IT Solutions & API Integration"
        description="AppsCare Technologies delivers high-performance API orchestration, managed IT operations, and strategic consulting for the digital enterprise."
        path="/"
      />
      <Hero />
      <ServicesPreview />

      {/* Replaced <Showcase /> with the new Marquee */}
      <MiddlewareMarquee />
    </div>
  );
}
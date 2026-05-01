import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', alt: 'Global Network' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', alt: 'Data Center Servers' },
  { id: 3, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', alt: 'Circuit Architecture' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', alt: 'Software Engineering' },
  { id: 5, src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', alt: 'AI Integration' },
  { id: 6, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', alt: 'Cyber Solutions' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', alt: 'Cloud Infrastructure' },
  { id: 8, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', alt: 'Data Analytics' },
];

export default function Showcase() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // NEW STATE: Track the unique index of the specific hovered card
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let animationFrameId;
    const scroll = () => {
      // Pause auto-scroll if ANY part of the section is hovered
      if (!isHovered) {
        container.scrollLeft += 1.5; 
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollManually = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      
      {/* Header */}
      <div className="container mx-auto px-4 max-w-6xl mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 md:gap-8"
        >
          <div className="flex-grow h-[1px] bg-primary/40 max-w-[50px] md:max-w-[100px]"></div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight text-center shrink-0 uppercase">
            Powering the Digital Frontier
          </h2>
          <div className="flex-grow h-[1px] bg-primary/40 max-w-[50px] md:max-w-[100px]"></div>
        </motion.div>
      </div>

      <div 
        className="relative w-full flex items-center group"
        // Parent hover state pauses scrolling
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredCardIndex(null); // Reset spotlight state
        }}
      >
        {/* Navigation Buttons */}
        <button 
          onClick={() => scrollManually('left')}
          className="absolute left-2 z-30 p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-primary transition-all hidden md:flex opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button 
          onClick={() => scrollManually('right')}
          className="absolute right-2 z-30 p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-primary transition-all hidden md:flex opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrolling Track */}
        <div 
          ref={scrollRef}
          className="flex gap-2 px-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth py-4"
        >
          {[...showcaseImages, ...showcaseImages].map((image, index) => {
            
            // Logic to determine this specific card's state
            const isAnyCardHovered = hoveredCardIndex !== null;
            const isThisCardHovered = hoveredCardIndex === index;

            return (
              <div 
                key={`${image.id}-${index}`} 
                // Set specific hover state on mouse enter
                onMouseEnter={() => setHoveredCardIndex(index)}
                // Clear specific hover state on mouse leave
                onMouseLeave={() => setHoveredCardIndex(null)}
                className={`relative w-[220px] md:w-[320px] h-[140px] md:h-[180px] rounded-md overflow-hidden shrink-0 shadow-sm border border-slate-100 transition-all duration-300 ease-out cursor-pointer
                  ${isThisCardHovered ? 'scale-110 z-20 shadow-xl' : 'z-10'}
                  ${isAnyCardHovered && !isThisCardHovered ? 'blur-[2px] opacity-60 scale-95' : ''}
                `}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  // Image doesn't need its own hover scale anymore, parent handles it
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm md:text-base tracking-wide">
                    {image.alt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
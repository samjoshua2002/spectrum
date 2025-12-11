import ProjectShowcase from "@/components/ProjectShowcase";
import ourWorkHero from "@assets/lets know- hero-bck_1757147970694.png";
import scrollIcon from "@assets/ri_scroll-to-bottom-fill_1757148198411.png";

export default function OurWorkPage() {
  return (
    <div>
      {/* Our Work Header */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${ourWorkHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '40px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '32px'
              }}
              data-testid="heading-our-work"
            >
              Our Work
            </h1>
            <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center">
              <img 
                src={scrollIcon} 
                alt="Scroll Down" 
                className="w-8 h-auto opacity-80 animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Showcase */}
      <div className="bg-white">
        <ProjectShowcase />
      </div>
    </div>
  );
}

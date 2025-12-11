import { Quote } from "lucide-react";
import { useState, useEffect } from "react";
import testimonialsBackground from "@assets/testimonials-background.png";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "A smart, strategic investment, delivering on both cost savings and our corporate goals.",
      description: "As a large printing facility, our energy costs were a significant expense. Spectrum's installation of a 100kW system was professional and swift. This has been a smart, strategic investment.",
      author: "— Khandaria Prints",
      project: "Project: 100 kW Rooftop System, Harandali",
      color: "#EF4444", // Red
      bgColor: "#EF4444"
    },
    {
      id: 2,
      quote: "Our electricity bill went from ₹5,000 to nearly zero.",
      description: "The process was seamless. The Spectrum team made it incredibly simple, handled all the subsidy paperwork, and the installation was professional. The quality of the branded panels and inverter is excellent.",
      author: "— Dhavendra Kumar",
      project: "Project: 5 kW On-Grid System, Hegdenagar",
      color: "#F97316", // Orange
      bgColor: "#F97316"
    },
    {
      id: 3,
      quote: "A smart, strategic investment, delivering on both cost savings and our corporate goals.",
      description: "As a large printing facility, our energy costs were a significant expense. Spectrum's installation of a 100kW system was professional and swift. This has been a smart, strategic investment.",
      author: "— Khandaria Prints",
      project: "Project: 100 kW Rooftop System, Harandali",
      color: "#3B82F6", // Blue
      bgColor: "#3B82F6"
    },
    {
      id: 4,
      quote: "Our electricity bill went from ₹5,000 to nearly zero.",
      description: "The process was seamless. The Spectrum team made it incredibly simple, handled all the subsidy paperwork, and the installation was professional. The quality of the branded panels and inverter is excellent.",
      author: "— Dhavendra Kumar",
      project: "Project: 5 kW On-Grid System, Hegdenagar",
      color: "#F97316", // Orange
      bgColor: "#F97316"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Add small delay for fade out effect
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentData = testimonials[currentTestimonial];

  return (
    <div 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${testimonialsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 fadeInUp">
          <h2 
            style={{
              fontFamily: 'Parkinsans, sans-serif',
              fontWeight: 'semibold',
              fontSize: '32px',
              color: 'white',
              textAlign: 'center',
              marginBottom: '64px'
            }}
          >
            Testimonials
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-lg w-full mx-4" style={{ height: '320px' }}>
            {/* Card Deck Background Layers - Always Visible */}
            <div 
              className="absolute rounded-2xl shadow-xl"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#3B82F6',
                transform: 'translateY(12px) translateX(8px) rotate(2deg)',
                zIndex: 1
              }}
            />
            <div 
              className="absolute rounded-2xl shadow-xl"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F97316',
                transform: 'translateY(6px) translateX(4px) rotate(1deg)',
                zIndex: 2
              }}
            />
            <div 
              className="absolute rounded-2xl shadow-xl"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#EF4444',
                transform: 'translateY(3px) translateX(2px) rotate(0.5deg)',
                zIndex: 3
              }}
            />
            
            {/* White Content Card - Slides In/Out */}
            <div 
              key={currentData.id}
              className="bg-white rounded-2xl p-8 shadow-xl relative w-full h-full border-3 transition-all duration-700 ease-in-out"
              style={{
                borderColor: currentData.color,
                borderWidth: '3px',
                borderStyle: 'solid',
                zIndex: 4,
                transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0)',
                opacity: isTransitioning ? 0 : 1
              }}
            >
              <div className="absolute -top-4 -left-4">
                <div 
                  className="text-white rounded-full w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: currentData.bgColor }}
                >
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              <div className="pt-4">
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '20px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    lineHeight: '1.4',
                    marginBottom: '16px'
                  }}
                  data-testid="text-main-testimonial"
                >
                  {currentData.quote}
                </p>
                <p 
                  style={{
                    fontFamily: 'Corbel, sans-serif',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#4B5563',
                    lineHeight: '1.5',
                    marginBottom: '24px'
                  }}
                  data-testid="text-testimonial-description"
                >
                  {currentData.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p 
                      style={{
                        fontFamily: 'Parkinsans, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'semibold',
                        color: '#1F2937',
                        marginBottom: '4px'
                      }}
                      data-testid="text-customer-name"
                    >
                      {currentData.author}
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Corbel, sans-serif',
                        fontSize: '12px',
                        fontWeight: 'normal',
                        color: '#6B7280'
                      }}
                      data-testid="text-project-info"
                    >
                      {currentData.project}
                    </p>
                  </div>
                  <div 
                    className="text-white rounded-full w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: currentData.bgColor }}
                  >
                    <Quote className="w-5 h-5" style={{ transform: 'rotate(180deg)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

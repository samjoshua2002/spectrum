import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  project: string;
  projectDetails: string;
  quote: string;
  description: string;
  author: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    project: "Project: ",
    projectDetails: "5 KW On-Grid System, Hegdenagar",
    quote: "'Our electricity bill went from ₹5,000 to nearly zero.'",
    description: "'The process was seamless. The Spectrum team made it incredibly simple, handled all the subsidy paperwork, and the installation was professional. The quality of the branded panels and inverter is excellent.'",
    author: "— Dhanendrakumar",
    color: "#F45100"
  },
  {
    id: 1,
    project: "Project: ",
    projectDetails: "100 KW Rooftop System, Harohalli",
    quote: "'A smart, strategic investment, delivering on both cost savings and our corporate goals.'",
    description: "'As a large printing facility, our energy costs were a significant expense. Spectrum's installation for a 100KW system was professional and swift. This has been a smart, strategic investment.'",
    author: "— Khandala Prints",
    color: "#E93847"
  },
  {
    id: 2,
    project: "Project: ",
    projectDetails: "3 KW Residential System, Bangalore",
    quote: "'Best decision we made for our home. Monthly savings are incredible.'",
    description: "'The team was professional from start to finish. They explained everything clearly, completed the installation on time, and the system has been performing flawlessly for months.'",
    author: "— Rajesh Sharma",
    color: "#3B82F6"
  }
];

// Quote SVG paths
const quoteIconPath = "M21.307 52.843C17.0612 48.235 17.4887 42.3175 17.5022 42.25V24.25C17.5022 23.6533 17.7393 23.081 18.1613 22.659C18.5832 22.2371 19.1555 22 19.7522 22H33.2522C35.734 22 37.7522 24.0182 37.7522 26.5V42.25C37.7522 42.8467 37.5152 43.419 37.0932 43.841C36.6713 44.2629 36.099 44.5 35.5022 44.5H28.5767C28.6253 45.6122 28.9576 46.6935 29.542 47.641C30.685 49.4432 32.8382 50.674 35.9455 51.295L37.7522 51.655V58H35.5022C29.2405 58 24.4637 56.2653 21.307 52.843ZM46.0727 52.843C41.8247 48.235 42.2545 42.3175 42.268 42.25V24.25C42.268 23.6533 42.505 23.081 42.927 22.659C43.349 22.2371 43.9213 22 44.518 22H58.018C60.4997 22 62.518 24.0182 62.518 26.5V42.25C62.518 42.8467 62.2809 43.419 61.859 43.841C61.437 44.2629 60.8647 44.5 60.268 44.5H53.3425C53.391 45.6122 53.7233 46.6935 54.3077 47.641C55.4507 49.4432 57.604 50.674 60.7112 51.295L62.518 51.655V58H60.268C54.0062 58 49.2295 56.2653 46.0727 52.843Z";

const smallQuotePath = "M22.8779 17.135C25.2349 14.575 24.9976 11.2875 24.9901 11.25V1.25C24.9901 0.918479 24.8585 0.600537 24.6242 0.366117C24.39 0.131696 24.0723 0 23.741 0H16.2466C14.8689 0 13.7485 1.12125 13.7485 2.5V11.25C13.7485 11.5815 13.8801 11.8995 14.1143 12.1339C14.3486 12.3683 14.6663 12.5 14.9975 12.5H18.8422C18.8152 13.1179 18.6308 13.7186 18.3063 14.245C17.6718 15.2462 16.4764 15.93 14.7515 16.275L13.7485 16.475V20H14.9975C18.4737 20 21.1255 19.0363 22.8779 17.135ZM9.12943 17.135C11.4877 14.575 11.2491 11.2875 11.2416 11.25V1.25C11.2416 0.918479 11.11 0.600537 10.8758 0.366117C10.6415 0.131696 10.3238 0 9.99253 0H2.49813C1.12041 0 0 1.12125 0 2.5V11.25C0 11.5815 0.131598 11.8995 0.365843 12.1339C0.600089 12.3683 0.917794 12.5 1.24907 12.5H5.09369C5.06675 13.1179 4.88229 13.7186 4.55785 14.245C3.92332 15.2462 2.72796 15.93 1.003 16.275L0 16.475V20H1.24907C4.72522 20 7.37699 19.0363 9.12943 17.135Z";

function QuoteIcon({ color }: { color: string }) {
  return (
    <div className="absolute h-20 left-0 top-0 w-20" data-testid="icon-quote-main">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 80">
        <g>
          <ellipse cx="40.5" cy="40" fill={color} rx="40.5" ry="40" />
          <path d={quoteIconPath} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl font-semibold text-indigo-950 text-center mb-16 font-parkinsans"
          data-testid="heading-testimonials"
        >
          Testimonials
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[580px] h-[340px]">
            {/* Rotated background card with color animation */}
            <motion.div 
              className="absolute flex items-center justify-center"
              style={{
                left: '40px',
                top: '10px',
                width: '500px',
                height: '300px'
              }}
            >
              <div className="flex-none rotate-[6deg]">
                <motion.div 
                  className="w-[500px] h-[300px] rounded-[54px]"
                  animate={{ backgroundColor: current.color }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Quote icon */}
            <QuoteIcon color={current.color} />

            {/* Animated testimonial cards */}
            <div className="absolute left-[50px] top-[20px] overflow-hidden w-full max-w-[500px] h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                  data-testid={`card-testimonial-${current.id}`}
                >
                  {/* White card background */}
                  <div className="absolute bg-white h-[300px] left-0 rounded-[54px] top-0 w-full max-w-[500px] shadow-xl" />
                  
                  {/* Project info */}
                  <p 
                    className="absolute font-parkinsans font-semibold left-[70px] right-[30px] top-[240px] text-[13px] text-black text-center"
                    data-testid="text-project-info"
                  >
                    <span>{current.project}</span>
                    <span className="font-corbel font-normal">{current.projectDetails}</span>
                  </p>

                  {/* Quote */}
                  <p 
                    className="absolute font-parkinsans font-semibold text-[16px] text-black top-[60px] left-[35px] w-[430px] leading-relaxed"
                    data-testid="text-main-quote"
                  >
                    {current.quote}
                  </p>

                  {/* Description */}
                  <p 
                    className="absolute font-corbel text-[12px] text-gray-700 top-[105px] left-[35px] w-[430px] leading-relaxed"
                    data-testid="text-testimonial-description"
                  >
                    {current.description}
                  </p>

                  {/* Author */}
                  <p 
                    className="absolute font-parkinsans font-semibold text-[13px] text-black text-right top-[175px] right-[35px] w-[400px]"
                    data-testid="text-customer-name"
                  >
                    {current.author}
                  </p>

                  {/* Quote mark bottom right */}
                  <div className="absolute bottom-[45px] right-[40px] w-[30px] h-[24px]" data-testid="icon-quote-small">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
                      <path d={smallQuotePath} fill={current.color} />
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-indigo-950 w-8' : 'bg-gray-300'
                  }`}
                  data-testid={`indicator-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-ndibzbbvo2";

interface Testimonial {
  id: number;
  project: string;
  projectDetails: string;
  quote: string;
  description: string;
  author: string;
  color: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    project: "Project: ",
    projectDetails: "5 KW On-Grid System, Hegdenagar",
    quote: "'Our electricity bill went from ₹5,000 to nearly zero.'",
    description: "'The process was seamless. The Spectrum team made it incredibly simple, handled all the subsidy paperwork, and the installation was professional. The quality of the branded panels and inverter is excellent.'",
    author: "— Dhanendrakumar",
    color: "#F45100",
    bgColor: "#ffffff"
  },
  {
    id: 1,
    project: "Project: ",
    projectDetails: "100 KW Rooftop System, Harohalli",
    quote: "'A smart, strategic investment, delivering on both cost savings and our corporate goals.'",
    description: "'As a large printing facility, our energy costs were a significant expense. Spectrum's installation for a 100KW system was professional and swift. This has been a smart, strategic investment.'",
    author: "— Khandala Prints",
    color: "#E93847",
    bgColor: "#d9d9d9"
  }
];

function QuoteIcon() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[81px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 80">
        <g id="Group 30">
          <ellipse cx="40.5" cy="40" fill="var(--fill-0, #F45100)" id="Ellipse 10" rx="40.5" ry="40" />
          <g id="bxs:quote-right">
            <path d={svgPaths.p125b3600} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function AnimatedTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="relative size-full" data-name="Web">
      <div className="absolute contents left-0 top-[-1.75px]">
        {/* Rotated background */}
        <motion.div 
          className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.10752877593040466)+(var(--transform-inner-height)*0.9942019581794739)))] items-center justify-center left-[38.52px] top-[-1.75px] w-[calc(1px*((var(--transform-inner-height)*0.10752877593040466)+(var(--transform-inner-width)*0.9942019581794739)))]" 
          style={{ "--transform-inner-width": "418", "--transform-inner-height": "244" } as React.CSSProperties}
        >
          <div className="flex-none rotate-[6.173deg]">
            <motion.div 
              className="h-[244.269px] rounded-[54px] w-[417.798px]"
              animate={{ backgroundColor: current.color }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Quote icon */}
        <QuoteIcon />

        {/* Animated testimonial cards */}
        <div className="absolute left-[50px] top-[20px] overflow-hidden w-[419px] h-[244px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* White card background */}
              <div className="absolute bg-white h-[244px] left-0 rounded-[54px] top-0 w-[419px]" />
              
              {/* Project info */}
              <p className="absolute font-['Parkinsans:SemiBold',_sans-serif] left-[71px] right-[33px] top-[194px] leading-[normal] not-italic text-[11px] text-black text-center tracking-[-0.22px]">
                <span>{current.project}</span>
                <span className="font-['Parkinsans:Regular',_sans-serif]">{current.projectDetails}</span>
              </p>

              {/* Quote */}
              <p className="absolute font-['Parkinsans:SemiBold',_sans-serif] leading-[normal] left-[31px] not-italic text-[13px] text-black top-[47px] tracking-[-0.26px] w-[356px]">
                {current.quote}
              </p>

              {/* Description */}
              <p className="absolute font-['Parkinsans:Regular',_sans-serif] leading-[normal] left-[31px] not-italic text-[10px] text-black top-[81px] tracking-[-0.2px] w-[356px]">
                {current.description}
              </p>

              {/* Author */}
              <p className="absolute font-['Parkinsans:SemiBold',_sans-serif] leading-[normal] left-[387px] not-italic text-[11px] text-black text-right top-[139px] tracking-[-0.22px] translate-x-[-100%] w-[356px]">
                {current.author}
              </p>

              {/* Quote mark bottom right */}
              <div className="absolute bottom-[35px] right-[33px] w-[25px] h-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
                  <path d={svgPaths.p1f381f00} fill={current.color} />
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

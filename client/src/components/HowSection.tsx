import { Compass, Wrench, Headphones } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import howBackground from "@assets/how-background.png";
import defaultConsultIcon from "@assets/consult_default_1758730893853.png";
import hoverConsultIcon from "@assets/consult_hover_1758730893852.png";
import defaultInstallIcon from "@assets/Install_default_1758731991024.png";
import hoverInstallIcon from "@assets/install_hover_1758731991024.png";
import defaultSaveIcon from "@assets/save_default_1758732612501.png";
import hoverSaveIcon from "@assets/save_hover_1758732612497.png";
import curvedArrow from "@assets/curved-arrow.png";

export default function HowSection() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const steps = [
    {
      icon: Compass,
      title: "Consult & Design",
      description: "It all begins with a detailed consultation. Our experts conduct a thorough site survey and develop a detailed analysis to design a custom solar solution, perfectly tailored to your needs and property."
    },
    {
      icon: Wrench,
      title: "Install & Commission",
      description: "Our certified in-house team takes care of managing everything from procuring best-in-class components to full installation. We handle all construction and electrical work with precision, ensuring your system is commissioned to the highest safety and performance standards."
    },
    {
      icon: Headphones,
      title: "Save & Support",
      description: "This is where your investment starts paying you back. From the moment your system is active, you take control of your energy costs. We handle all the final subsidy and net metering paperwork so that you can sit back and enjoy the savings and the benefits of clean energy."
    }
  ];

  return (
    <div className="py-12 md:py-20 relative overflow-hidden" style={{
        backgroundImage: `url(${howBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-16 fadeInUp">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8 md:mb-16 font-parkinsans">
            How?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isFirstIconHovered = hoveredIcon === 0 && index === 0;
            const isSecondIconHovered = hoveredIcon === 1 && index === 1;
            const isThirdIconHovered = hoveredIcon === 2 && index === 2;
            
            return (
              <div key={index} className={`text-center text-white fadeInUp stagger-${index + 1} relative w-full max-w-sm mx-auto`}>
                <div 
                  className="flex items-center justify-center mx-auto mb-4 md:mb-6" 
                  style={{ 
                    cursor: (index === 0 || index === 1 || index === 2) ? 'pointer' : 'default'
                  }}
                  onMouseEnter={() => (index === 0 || index === 1 || index === 2) && setHoveredIcon(index)}
                  onMouseLeave={() => (index === 0 || index === 1 || index === 2) && setHoveredIcon(null)}
                >
                  {index === 0 ? (
                    <motion.div
                      className="rounded-full flex items-center justify-center"
                      animate={{
                        width: isFirstIconHovered ? 160 : 144,
                        height: isFirstIconHovered ? 160 : 144,
                        backgroundColor: isFirstIconHovered ? '#1e1b4b' : '#ffffff'
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "tween"
                      }}
                      style={{
                        willChange: 'width, height, background-color'
                      }}
                    >
                      <motion.img 
                        src={isFirstIconHovered ? hoverConsultIcon : defaultConsultIcon}
                        alt={isFirstIconHovered ? "Detailed Consult & Design" : "Consult & Design"}
                        animate={{
                          width: isFirstIconHovered ? 90 : 80,
                          height: isFirstIconHovered ? 90 : 80
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                          type: "tween"
                        }}
                        style={{
                          objectFit: 'contain',
                          willChange: 'width, height'
                        }}
                      />
                    </motion.div>
                  ) : index === 1 ? (
                    <motion.div
                      className="rounded-full flex items-center justify-center"
                      animate={{
                        width: isSecondIconHovered ? 160 : 144,
                        height: isSecondIconHovered ? 160 : 144,
                        backgroundColor: isSecondIconHovered ? '#1e1b4b' : '#ffffff'
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "tween"
                      }}
                      style={{
                        willChange: 'width, height, background-color'
                      }}
                    >
                      <motion.img 
                        src={isSecondIconHovered ? hoverInstallIcon : defaultInstallIcon}
                        alt={isSecondIconHovered ? "Detailed Install & Commission" : "Install & Commission"}
                        animate={{
                          width: isSecondIconHovered ? 90 : 80,
                          height: isSecondIconHovered ? 90 : 80
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                          type: "tween"
                        }}
                        style={{
                          objectFit: 'contain',
                          willChange: 'width, height'
                        }}
                      />
                    </motion.div>
                  ) : index === 2 ? (
                    <motion.div
                      className="rounded-full flex items-center justify-center"
                      animate={{
                        width: isThirdIconHovered ? 160 : 144,
                        height: isThirdIconHovered ? 160 : 144,
                        backgroundColor: isThirdIconHovered ? '#1e1b4b' : '#ffffff'
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "tween"
                      }}
                      style={{
                        willChange: 'width, height, background-color'
                      }}
                    >
                      <motion.img 
                        src={isThirdIconHovered ? hoverSaveIcon : defaultSaveIcon}
                        alt={isThirdIconHovered ? "Detailed Save & Support" : "Save & Support"}
                        animate={{
                          width: isThirdIconHovered ? 90 : 80,
                          height: isThirdIconHovered ? 90 : 80
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                          type: "tween"
                        }}
                        style={{
                          objectFit: 'contain',
                          willChange: 'width, height'
                        }}
                      />
                    </motion.div>
                  ) : (
                    <div className="bg-white rounded-full flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
                      <Icon className="w-8 h-8" style={{ color: '#2C2656' }} />
                    </div>
                  )}
                </div>
                <h3 
                  className="text-sm md:text-base font-semibold text-white text-center mb-3 md:mb-4 font-parkinsans"
                  data-testid={`text-step-title-${index}`}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm md:text-base font-normal leading-relaxed text-white text-center font-corbel"
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>
                {/* Curved Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-10 transform" style={{ transform: 'translateX(120px)' }}>
                    <img 
                      src={curvedArrow} 
                      alt="Arrow pointing to next step" 
                      style={{
                        width: '160px',
                        height: '80px',
                        objectFit: 'contain',
                        opacity: 1,
                        filter: 'brightness(1.5)',
                        transform: index === 1 ? 'scaleY(-1)' : 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

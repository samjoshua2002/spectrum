import { Wallet, Home, Shield, Settings } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import walletDefaultTop from "@assets/wallet_default_top_1758649315130.png";
import walletDefaultBottom from "@assets/wallet_default_bottom_1758649315129.png";
import walletDefaultRight from "@assets/wallet_default_right_1758649315128.png";
import walletHoverTop from "@assets/wallet_hover_top_1758649315131.png";
import walletHoverBottom from "@assets/wallet_hover_bottom_1758649315131.png";
import walletHoverRight from "@assets/wallet_hover_right_1758649315130.png";
import propertyDefaultTop from "@assets/property_default_top_1758649990757.png";
import propertyDefaultBottom from "@assets/property_default_bottom_1758649990757.png";
import propertyDefaultRight from "@assets/property_default_right_1758649990756.png";
import propertyHoverTop from "@assets/property_hover_top_1758649990756.png";
import propertyHoverBottom from "@assets/property_hover_bottom_1758649990756.png";
import propertyHoverRight from "@assets/property_hover_right_1758649990755.png";
import shieldDefault from "@assets/shield_default_1758652311237.png";
import shieldHover from "@assets/shield_hover_1758652311236.png";
import gearDefault from "@assets/gear_default_1758652499950.png";
import gearHover from "@assets/gear_hover_1758652499950.png";

export default function WhySection() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const features = [
    {
      icon: Wallet,
      title: "Immediate Cost Savings",
      description: "Take immediate command of your monthly expenses. Our solar solutions are designed to slash your electricity bill by up to 90%, freeing up your finances from day one."
    },
    {
      icon: Home,
      title: "Increased Property Value", 
      description: "This is more than an energy upgrade—it's a significant boost to your home's equity. A study by the National Renewable Energy Laboratory (NREL) confirms that solar-equipped homes sell for up to 17% more, making it a secure, high-value investment."
    },
    {
      icon: Shield,
      title: "Long-Term\nReliability",
      description: "Invest with absolute confidence. We engineer systems for decades of performance, using panels that can function for up to 28 years. This is backed by a rock-solid 10-year warranty on core components and a 2-year warranty on the entire system."
    },
    {
      icon: Settings,
      title: "Best-In-Class\nQuality",
      description: "The performance of your system depends on the quality of each part. We guarantee excellence by using only best-in-class, MNRE-approved components from trusted industry leaders like Adani, EMMVEE, and Solis."
    }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-48 py-12 md:py-16 flex flex-col justify-center">
          <div className="text-center mb-8 fadeInUp">
          <h2 
            style={{
              fontFamily: 'Parkinsans, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '-2%',
              color: '#2C2656',
              textAlign: 'center',
              margin: '0 auto',
              marginBottom: '16px'
            }}
          >
            Why
          </h2>
          <p 
            style={{
              fontFamily: 'Parkinsans, sans-serif',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '100%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#808080',
              margin: '0 auto'
            }}
          >
            The Four Pillars of a Smart Investment
          </p>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLargeIcon = true; // All icons are now large
            const isFirstIconHovered = hoveredIcon === 0 && index === 0 && window.innerWidth >= 768;
            const isSecondIconHovered = hoveredIcon === 1 && index === 1 && window.innerWidth >= 768;
            const isThirdIconHovered = hoveredIcon === 2 && index === 2 && window.innerWidth >= 768;
            const isFourthIconHovered = hoveredIcon === 3 && index === 3 && window.innerWidth >= 768;
            
            return (
              <div key={index} className={`text-center fadeInUp stagger-${index + 1} smooth-transition w-full max-w-xs md:max-w-none md:w-48`}>
                {/* Circular icon container */}
                <div 
                  className="text-white rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: 'transparent',
                    width: '138px',
                    height: '138px',
                    transition: 'all 0.3s ease-in-out',
                    cursor: window.innerWidth >= 768 ? 'pointer' : 'default'
                  }}
                  onMouseEnter={() => window.innerWidth >= 768 ? setHoveredIcon(index) : null}
                  onMouseLeave={() => window.innerWidth >= 768 ? setHoveredIcon(null) : null}
                >
                  {index === 0 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Ellipse background - changes from blue to white on hover */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full"
                        style={{ transformOrigin: 'center center' }}
                        animate={{
                          backgroundColor: isFirstIconHovered ? '#FFFFFF' : '#2C2656',
                          scale: isFirstIconHovered ? 1.05 : 1,
                          opacity: isFirstIconHovered ? 0.95 : 1
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1]
                        }}
                      />
                      
                      {/* Wallet icon */}
                      <motion.div 
                        className="relative z-10 overflow-hidden"
                        style={{ transformOrigin: 'center center' }}
                        initial={{ width: '5rem', height: '5rem' }} // w-20 h-20 (80px)
                        animate={{ 
                          width: isFirstIconHovered ? '7rem' : '5rem', // w-28 h-28 (112px) on hover
                          height: isFirstIconHovered ? '7rem' : '5rem'
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      >
                        {/* Default wallet icon - white image parts */}
                        <motion.div
                          className="absolute inset-0"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isFirstIconHovered ? 0 : 1,
                            scale: isFirstIconHovered ? 1.2 : 1
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={walletDefaultTop}
                            alt="Wallet Top"
                            className="absolute"
                            style={{
                              left: '25.76px',
                              top: '6.62px'
                            }}
                          />
                          <img 
                            src={walletDefaultBottom}
                            alt="Wallet Bottom"
                            className="absolute"
                            style={{
                              left: '6.62px',
                              top: '16.56px'
                            }}
                          />
                          <img 
                            src={walletDefaultRight}
                            alt="Wallet Right"
                            className="absolute"
                            style={{
                              left: '46.71px',
                              top: '32.65px'
                            }}
                          />
                        </motion.div>
                        
                        {/* Hover wallet icon - indigo image parts */}
                        <motion.div
                          className="absolute inset-0"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isFirstIconHovered ? 1 : 0,
                            scale: isFirstIconHovered ? 1 : 0.8
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={walletHoverTop}
                            alt="Wallet Top"
                            className="absolute"
                            style={{
                              left: '33.75px',
                              top: '-2.25px'
                            }}
                          />
                          <img 
                            src={walletHoverBottom}
                            alt="Wallet Bottom"
                            className="absolute"
                            style={{
                              left: '8.75px',
                              top: '21.88px'
                            }}
                          />
                          <img 
                            src={walletHoverRight}
                            alt="Wallet Right"
                            className="absolute"
                            style={{
                              left: '70.50px',
                              top: '43.12px'
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : index === 1 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Ellipse background - changes from blue to white on hover */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full"
                        style={{ transformOrigin: 'center center' }}
                        animate={{
                          backgroundColor: isSecondIconHovered ? '#FFFFFF' : '#2C2656',
                          scale: isSecondIconHovered ? 1.05 : 1,
                          opacity: isSecondIconHovered ? 0.95 : 1
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      />
                      
                      {/* Property icon */}
                      <motion.div 
                        className="relative z-10 overflow-hidden"
                        style={{ transformOrigin: 'center center' }}
                        initial={{ width: '5rem', height: '5rem' }} // w-20 h-20 (80px)
                        animate={{ 
                          width: isSecondIconHovered ? '7rem' : '5rem', // w-28 h-28 (112px) on hover - increased from 6rem
                          height: isSecondIconHovered ? '7rem' : '5rem'
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      >
                        {/* Default property icon - white image parts */}
                        <motion.div
                          className="absolute inset-0"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isSecondIconHovered ? 0 : 1,
                            scale: isSecondIconHovered ? 1.2 : 1
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={propertyDefaultTop}
                            alt="Property Top"
                            className="absolute"
                            style={{
                              left: '0.58px',
                              top: '3px'
                            }}
                          />
                          <img 
                            src={propertyDefaultBottom}
                            alt="Property Bottom"
                            className="absolute"
                            style={{
                              left: '8.15px',
                              top: '13.52px'
                            }}
                          />
                          <img 
                            src={propertyDefaultRight}
                            alt="Property Right"
                            className="absolute"
                            style={{
                              left: '43.45px',
                              top: '42.30px'
                            }}
                          />
                        </motion.div>
                        
                        {/* Hover property icon - indigo image parts */}
                        <motion.div
                          className="absolute inset-0"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isSecondIconHovered ? 1 : 0,
                            scale: isSecondIconHovered ? 1 : 0.8
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={propertyHoverTop}
                            alt="Property Top"
                            className="absolute"
                            style={{
                              left: '0.59px',
                              top: '0.16px'
                            }}
                          />
                          <img 
                            src={propertyHoverBottom}
                            alt="Property Bottom"
                            className="absolute"
                            style={{
                              left: '10.61px',
                              top: '16.07px'
                            }}
                          />
                          <img 
                            src={propertyHoverRight}
                            alt="Property Right"
                            className="absolute"
                            style={{
                              left: '57.30px',
                              top: '57.15px'
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : index === 2 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Ellipse background - changes from blue to white on hover */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full"
                        style={{ transformOrigin: 'center center' }}
                        animate={{
                          backgroundColor: isThirdIconHovered ? '#FFFFFF' : '#2C2656',
                          scale: isThirdIconHovered ? 1.05 : 1,
                          opacity: isThirdIconHovered ? 0.95 : 1
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      />
                      
                      {/* Shield icon */}
                      <motion.div 
                        className="relative z-10 overflow-hidden"
                        style={{ transformOrigin: 'center center' }}
                        initial={{ width: '5rem', height: '5rem' }} // w-20 h-20 (80px)
                        animate={{ 
                          width: isThirdIconHovered ? '7rem' : '5rem', // w-28 h-28 (112px) on hover
                          height: isThirdIconHovered ? '7rem' : '5rem'
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      >
                        {/* Default shield icon - white */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isThirdIconHovered ? 0 : 1,
                            scale: isThirdIconHovered ? 1.2 : 1
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={shieldDefault}
                            alt="Shield Default"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        
                        {/* Hover shield icon - indigo */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isThirdIconHovered ? 1 : 0,
                            scale: isThirdIconHovered ? 1 : 0.8
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={shieldHover}
                            alt="Shield Hover"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : index === 3 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Ellipse background - changes from blue to white on hover */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full"
                        style={{ transformOrigin: 'center center' }}
                        animate={{
                          backgroundColor: isFourthIconHovered ? '#FFFFFF' : '#2C2656',
                          scale: isFourthIconHovered ? 1.05 : 1,
                          opacity: isFourthIconHovered ? 0.95 : 1
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      />
                      
                      {/* Gear icon */}
                      <motion.div 
                        className="relative z-10 overflow-hidden"
                        style={{ transformOrigin: 'center center' }}
                        initial={{ width: '5rem', height: '5rem' }} // w-20 h-20 (80px)
                        animate={{ 
                          width: isFourthIconHovered ? '7rem' : '5rem', // w-28 h-28 (112px) on hover
                          height: isFourthIconHovered ? '7rem' : '5rem'
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.4, 0.0, 0.2, 1] 
                        }}
                      >
                        {/* Default gear icon - white */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isFourthIconHovered ? 0 : 1,
                            scale: isFourthIconHovered ? 1.2 : 1
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={gearDefault}
                            alt="Gear Default"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        
                        {/* Hover gear icon - indigo */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            opacity: isFourthIconHovered ? 1 : 0,
                            scale: isFourthIconHovered ? 1.25 : 0.8, // Bigger on hover
                            rotate: isFourthIconHovered ? -25 : 0 // Anti-clockwise rotation
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          <img 
                            src={gearHover}
                            alt="Gear Hover"
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : (
                    <Icon className="w-16 h-16" />
                  )}
                </div>
                
                <div className="text-center w-full">
                  <h3 
                    className="mx-auto leading-tight mb-2 text-sm md:text-base font-semibold text-indigo-950 font-parkinsans whitespace-pre-line"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  
                  <div 
                    style={{
                      maxHeight: isExpanded ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.5s ease-in-out',
                      opacity: isExpanded ? 1 : 0
                    }}
                  >
                    <p 
                      className="mx-auto text-sm leading-relaxed"
                      style={{
                        fontFamily: 'Parkinsans, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.4',
                        color: '#2C2656',
                        textAlign: 'center',
                        marginTop: '16px',
                        transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.5s ease-in-out 0.1s'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-6 fadeInUp stagger-5">
          <button 
            className="flex items-center justify-center mx-auto"
            style={{
              fontFamily: 'Parkinsans, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              color: '#2C2656'
            }}
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid="button-view-more"
          >
            {isExpanded ? "Show Less" : "Show More"}
            <span 
              className="ml-4 border border-gray-400 rounded"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease-in-out'
                }}
              >
                <polyline points="18,15 12,9 6,15"></polyline>
              </svg>
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

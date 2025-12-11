import { useState } from "react";
import { ChevronDown, ChevronUp, Check, Users, Award, Headphones, BarChart, Battery, Lightbulb, Zap, Shield, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import letsKnowBackground from "@assets/testimonials-background.png";
import pexelsBackground from "@assets/pexels-olly-3758105 2_1757142697678.png";
import sectionBackground from "@assets/Section_bck_1757142923503.png";
import letsKnowHero from "@assets/lets know- hero_1757143420777.png";
import homeIcon from "@assets/ic_round-home_1757143750267.png";
import rwaIcon from "@assets/Group_1757143770709.png";
import businessIcon from "@assets/Vector_1757143802807.png";
import checkIcon from "@assets/ri_checkbox-circle-fill_1757144006135.png";
import accordionCheckIcon from "@assets/ri_checkbox-circle-fill_1757149079981.png";
import cardFlipBackground from "@assets/Body card flip back_1757144241015.png";
import panelImage from "@assets/picture_1757144666404.png";
import keyTechBackground from "@assets/Section_bck_1757145509507.png";
import inverterBackground from "@assets/bck_1757145787895.png";
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
import defaultConsultIcon from "@assets/consult_default_1758730893853.png";
import hoverConsultIcon from "@assets/consult_hover_1758730893852.png";
import defaultInstallIcon from "@assets/Install_default_1758731991024.png";
import hoverInstallIcon from "@assets/install_hover_1758731991024.png";
import defaultSaveIcon from "@assets/save_default_1758732612501.png";
import hoverSaveIcon from "@assets/save_hover_1758732612497.png";
import scrollIcon from "@assets/ri_scroll-to-bottom-fill_1757148198411.png";

export default function LetsKnowPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedTech, setExpandedTech] = useState<number | null>(null);
  const [expandedGeneral, setExpandedGeneral] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'rwas'>('residential');
  const [hoveredWhyIcon, setHoveredWhyIcon] = useState<number | null>(null);
  const [isWhyExpanded, setIsWhyExpanded] = useState(false);
  const [hoveredIncentiveIcon, setHoveredIncentiveIcon] = useState<number | null>(null);

  const residentialFaqData = [
    {
      question: "How much will the government subsidy reduce my cost?",
      answer: "Under the PM-Surya Ghar scheme, homeowners can receive ₹30,000 per kW for the first 2kW and ₹18,000 per kW for the 3rd kW, significantly reducing your upfront investment."
    },
    {
      question: "Will installing solar panels increase my property's value?",
      answer: "Yes, solar installations typically increase property value by 3-4% on average. The exact increase depends on your location, system size, and local market conditions."
    },
    {
      question: "How long does a residential installation take?",
      answer: "Most residential installations are completed within 1-3 days once all permits are approved. The entire process from consultation to commissioning typically takes 4-6 weeks."
    }
  ];

  const commercialFaqData = [
    {
      question: "What tax benefits are available for commercial solar installations?",
      answer: "Commercial installations can benefit from Accelerated Depreciation (up to 40% in the first year), input tax credit under GST, and various state-specific incentives."
    },
    {
      question: "How does net metering work for commercial properties?",
      answer: "Commercial net metering allows you to export excess solar power to the grid and receive credits. The billing is typically done on a monthly basis with carry-forward provisions."
    },
    {
      question: "What is the typical ROI for commercial solar projects?",
      answer: "Commercial solar projects typically offer 15-20% IRR with payback periods of 4-6 years, making them an excellent investment for businesses."
    }
  ];

  const rwasFaqData = [
    {
      question: "How can RWAs implement solar for common areas?",
      answer: "RWAs can install solar systems for common area lighting, lifts, and water pumps. Group net metering allows sharing of solar benefits among all residents."
    },
    {
      question: "What subsidies are available for RWA solar projects?",
      answer: "RWAs can access subsidies of ₹18,000 per kW for systems above 3kW, along with special financing options for residential welfare associations."
    },
    {
      question: "How is the solar power distributed among residents?",
      answer: "Solar power can be allocated based on apartment size, equal distribution, or consumption patterns. Smart metering ensures transparent billing and distribution."
    }
  ];

  const generalFaqData = [
    {
      question: "How long does a solar system last?",
      answer: "Solar panels typically last 25-30 years with minimal degradation. Inverters may need replacement after 10-15 years, but the overall system provides decades of reliable power generation."
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 20-40% of peak output). Modern panels are designed to work in various weather conditions."
    },
    {
      question: "What happens during a power cut?",
      answer: "Grid-tied systems automatically shut down during power cuts for safety. With battery backup systems, you can continue to power essential appliances during outages."
    }
  ];

  const techData = [
    {
      title: "PERC Technology",
      description: "Passivated Emitter and Rear Contact technology improves cell efficiency by reducing electron recombination.",
      details: "PERC cells feature an additional layer on the back of the cell that reflects light back through the silicon, giving photons a second chance to generate electricity."
    },
    {
      title: "Bifacial Panels",
      description: "Capture sunlight from both front and back sides of the panel for increased energy generation.",
      details: "Bifacial panels can increase energy yield by 10-20% compared to traditional monofacial panels by utilizing reflected light from the ground or surrounding surfaces."
    },
    {
      title: "Half-Cut Cell Technology",
      description: "Reduces resistive losses and improves performance in partial shading conditions.",
      details: "By cutting standard cells in half, this technology reduces current flow and resistive losses, improving overall panel efficiency and reliability."
    }
  ];

  const whyFeatures = [
    {
      title: "Slash Your Bills",
      description: "Take immediate command of your monthly expenses. Our solar solutions are designed to slash your electricity bill by up to 90%, freeing up your finances from day one."
    },
    {
      title: "Boost Your Property's Value", 
      description: "This is more than an energy upgrade—it's a significant boost to your home's equity. A study by the National Renewable Energy Laboratory (NREL) confirms that solar-equipped homes sell for up to 17% more, making it a secure, high-value investment."
    },
    {
      title: "Decades of Performance",
      description: "Invest with absolute confidence. We engineer systems for decades of performance, using panels that can function for up to 28 years. This is backed by a rock-solid 10-year warranty on core components and a 2-year warranty on the entire system."
    },
    {
      title: "Uncompromising Quality",
      description: "The performance of your system depends on the quality of each part. We guarantee excellence by using only best-in-class, MNRE-approved components from trusted industry leaders like Adani, EMMVEE, and Solis."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${letsKnowHero})`,
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
              data-testid="heading-lets-know"
            >
              Let's Know
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

      {/* Financial Incentives for Every Need */}
      <div 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${sectionBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-financial-incentives"
            >
              Financial Incentives for Every Need
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: 'white',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '48px'
              }}
            >
              We help you unlock the full financial potential of your solar investment by leveraging the specific benefits available to you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individual Homeowners Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div 
                  className="mx-auto flex items-center justify-center mb-4"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIncentiveIcon(0)}
                  onMouseLeave={() => setHoveredIncentiveIcon(null)}
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center"
                    animate={{
                      width: hoveredIncentiveIcon === 0 ? 160 : 144,
                      height: hoveredIncentiveIcon === 0 ? 160 : 144,
                      backgroundColor: hoveredIncentiveIcon === 0 ? '#1e1b4b' : '#ffffff'
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
                      src={hoveredIncentiveIcon === 0 ? defaultConsultIcon : hoverConsultIcon}
                      alt={hoveredIncentiveIcon === 0 ? "Home Icon" : "Detailed Home Icon"}
                      animate={{
                        width: hoveredIncentiveIcon === 0 ? 90 : 80,
                        height: hoveredIncentiveIcon === 0 ? 90 : 80
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
                </div>
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '16px'
                  }}
                >
                  For Individual Homeowners
                </h3>
                <p 
                  style={{
                    fontFamily: 'Corbel, sans-serif',
                    fontSize: '14px',
                    color: '#6B7280',
                    marginBottom: '16px',
                    textAlign: 'left'
                  }}
                >
                  Benefit directly from the PM-Surya Ghar Subsidy scheme.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    Receive ₹30,000 per kW for the first 2 kW of your system
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    Get an additional ₹18,000 for the third kW
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    This means a maximum subsidy of ₹78,000 for systems 3 kW and larger
                  </span>
                </li>
              </ul>
            </div>

            {/* RWAs Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div 
                  className="mx-auto flex items-center justify-center mb-4"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIncentiveIcon(1)}
                  onMouseLeave={() => setHoveredIncentiveIcon(null)}
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center"
                    animate={{
                      width: hoveredIncentiveIcon === 1 ? 160 : 144,
                      height: hoveredIncentiveIcon === 1 ? 160 : 144,
                      backgroundColor: hoveredIncentiveIcon === 1 ? '#1e1b4b' : '#ffffff'
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
                      src={hoveredIncentiveIcon === 1 ? defaultInstallIcon : hoverInstallIcon}
                      alt={hoveredIncentiveIcon === 1 ? "RWA Icon" : "Detailed RWA Icon"}
                      animate={{
                        width: hoveredIncentiveIcon === 1 ? 90 : 80,
                        height: hoveredIncentiveIcon === 1 ? 90 : 80
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
                </div>
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '16px'
                  }}
                >
                  For Resident Welfare Associations (RWAs)
                </h3>
                <p 
                  style={{
                    fontFamily: 'Corbel, sans-serif',
                    fontSize: '14px',
                    color: '#6B7280',
                    marginBottom: '16px',
                    textAlign: 'left'
                  }}
                >
                  Power your common facilities and reduce costs for the entire society.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    Receive a subsidy of ₹18,000 per kW for common area systems (e.g., for lighting, water pumps) up to total capacity of 500 kW
                  </span>
                </li>
                <li>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 'semibold',
                      color: '#1F2937',
                      marginBottom: '8px'
                    }}
                  >
                    Key Benefits:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Slash common area maintenance costs.</span>
                    </li>
                    <li className="flex items-start">
                      <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Enhance your property's value and green credentials.</span>
                    </li>
                    <li className="flex items-start">
                      <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Provide a sustainable living environment for all residents.</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Businesses & Industries Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div 
                  className="mx-auto flex items-center justify-center mb-4"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIncentiveIcon(2)}
                  onMouseLeave={() => setHoveredIncentiveIcon(null)}
                >
                  <motion.div
                    className="rounded-full flex items-center justify-center"
                    animate={{
                      width: hoveredIncentiveIcon === 2 ? 160 : 144,
                      height: hoveredIncentiveIcon === 2 ? 160 : 144,
                      backgroundColor: hoveredIncentiveIcon === 2 ? '#1e1b4b' : '#ffffff'
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
                      src={hoveredIncentiveIcon === 2 ? defaultSaveIcon : hoverSaveIcon}
                      alt={hoveredIncentiveIcon === 2 ? "Business Icon" : "Detailed Business Icon"}
                      animate={{
                        width: hoveredIncentiveIcon === 2 ? 90 : 80,
                        height: hoveredIncentiveIcon === 2 ? 90 : 80
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
                </div>
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '16px'
                  }}
                >
                  For Businesses & Industries
                </h3>
                <p 
                  style={{
                    fontFamily: 'Corbel, sans-serif',
                    fontSize: '14px',
                    color: '#6B7280',
                    marginBottom: '16px',
                    textAlign: 'left'
                  }}
                >
                  Gain a significant competitive edge with a powerful tax advantage
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    Claim Accelerated Depreciation on your solar assets
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Corbel, sans-serif',
                      fontSize: '14px',
                      color: '#4B5563'
                    }}
                  >
                    This allows you to substantially reduce your corporate tax burden and dramatically improve the project's overall ROI.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Panel System Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-perfect-solar-solution"
            >
              Find Your Perfect Solar Solution
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              The ideal system for you depends on your connection to the local power grid and your need for battery backup
            </p>
          </div>
        </div>
      </div>

      {/* Solar System Types Section */}
      <div 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${cardFlipBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* On-Grid System Card */}
            <div className="h-64 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div style={{backgroundColor: '#374499'}} className="absolute inset-0 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    On-Grid System
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    The Smart Saver
                  </p>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-500 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden rotate-y-180">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    On-Grid Details
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    Details coming soon...
                  </p>
                </div>
              </div>
            </div>

            {/* Off-Grid System Card */}
            <div className="h-64 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div style={{backgroundColor: '#374499'}} className="absolute inset-0 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    Off-Grid System
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    The Independence Champion
                  </p>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-500 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden rotate-y-180">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    Off-Grid Details
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    Details coming soon...
                  </p>
                </div>
              </div>
            </div>

            {/* Hybrid System Card */}
            <div className="h-64 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div style={{backgroundColor: '#374499'}} className="absolute inset-0 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    Hybrid System
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    The Best of Both Worlds
                  </p>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-500 rounded-xl p-8 text-white text-center flex flex-col justify-center backface-hidden rotate-y-180">
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: 'white',
                      marginBottom: '8px'
                    }}
                  >
                    Hybrid Details
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: 'white'
                    }}
                  >
                    Details coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A Guide to Modern Solar Panel Technology */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-solar-panel-guide"
            >
              A Guide to Modern Solar Panel Technology
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '48px'
              }}
            >
              The right panel technology maximizes your energy generation. We help you choose the best fit for your property, budget, and performance goals
            </p>
            
            <h3 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'semibold',
                fontSize: '18px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '32px'
              }}
            >
              The Two Main Panel Types
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Monocrystalline Panel */}
            <div className="text-center">
              <div className="h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={panelImage} 
                  alt="Monocrystalline Solar Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: '#1F2937',
                  marginBottom: '16px'
                }}
              >
                Monocrystalline
              </h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    <strong>The high-performer</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    Offers the highest efficiency and a sleek, uniform black look
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    <strong>Best For:</strong> Maximizing power generation on limited roof space
                  </span>
                </li>
              </ul>
            </div>

            {/* Polycrystalline Panel */}
            <div className="text-center">
              <div className="h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={panelImage} 
                  alt="Polycrystalline Solar Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: '#1F2937',
                  marginBottom: '16px'
                }}
              >
                Polycrystalline
              </h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    <strong>The value champion</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    Provides an excellent balance of cost and performance
                  </span>
                </li>
                <li className="flex items-start">
                  <img src={checkIcon} alt="Check" className="mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    <strong>Best For:</strong> Cost-effective projects with ample roof space.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Technologies That Boost Performance */}
      <div 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${keyTechBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-key-technologies"
            >
              Key Technologies That Boost Performance
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: 'white',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '48px'
              }}
            >
              We utilize panels with advanced features to ensure you get the most out of your system
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* PERC & TOPCon Accordion */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedTech(expandedTech === 0 ? null : 0)}
                data-testid="button-perc-topcon"
              >
                <div className="flex items-center">
                  <div style={{backgroundColor: '#E6E9FF'}} className="w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <img src={accordionCheckIcon} alt="Checkbox" className="w-4 h-4" />
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: '#1F2937'
                    }}
                  >
                    PERC & TOPCon
                  </h3>
                </div>
                {expandedTech === 0 ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedTech === 0 && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563',
                      lineHeight: '1.5',
                      paddingTop: '16px'
                    }}
                  >
                    Advanced cell technologies that significantly improve energy conversion efficiency and reduce power losses.
                  </p>
                </div>
              )}
            </div>

            {/* Bifacial Panels Accordion */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedTech(expandedTech === 1 ? null : 1)}
                data-testid="button-bifacial-panels"
              >
                <div className="flex items-center">
                  <div style={{backgroundColor: '#E6E9FF'}} className="w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <img src={accordionCheckIcon} alt="Checkbox" className="w-4 h-4" />
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: '#1F2937'
                    }}
                  >
                    Bifacial Panels
                  </h3>
                </div>
                {expandedTech === 1 ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedTech === 1 && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563',
                      lineHeight: '1.5',
                      paddingTop: '16px'
                    }}
                  >
                    Double-sided panels that capture sunlight from both front and back surfaces, increasing energy generation by up to 30%.
                  </p>
                </div>
              )}
            </div>

            {/* Half-Cut Cells Accordion */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedTech(expandedTech === 2 ? null : 2)}
                data-testid="button-half-cut-cells"
              >
                <div className="flex items-center">
                  <div style={{backgroundColor: '#E6E9FF'}} className="w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <img src={accordionCheckIcon} alt="Checkbox" className="w-4 h-4" />
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '18px',
                      fontWeight: 'semibold',
                      color: '#1F2937'
                    }}
                  >
                    Half-Cut Cells
                  </h3>
                </div>
                {expandedTech === 2 ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedTech === 2 && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563',
                      lineHeight: '1.5',
                      paddingTop: '16px'
                    }}
                  >
                    Innovative cell design that reduces power losses and improves performance in partial shading conditions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* A Critical Choice for Your Subsidy: DCR vs. Non-DCR */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-dcr-comparison"
            >
              A Critical Choice for Your Subsidy: DCR vs. Non-DCR
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '48px'
              }}
            >
              This is a key requirement for anyone seeking government financial assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div style={{backgroundColor: '#374499'}} className="text-white px-6 py-3 rounded-full shadow-lg">
                <span 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  VS
                </span>
              </div>
            </div>

            {/* DCR Panels */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="h-48 rounded-lg mb-6 overflow-hidden bg-gray-200 p-4 flex items-center justify-center">
                  <img 
                    src={panelImage} 
                    alt="DCR Solar Panel" 
                    className="w-3/4 h-3/4 object-cover rounded-lg"
                  />
                </div>
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '8px'
                  }}
                >
                  DCR Panels
                </h3>
                <p 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    color: '#6B7280',
                    marginBottom: '16px'
                  }}
                >
                  Domestic Content Requirement
                </p>
              </div>
              <ul className="space-y-3 text-left">
                <li>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'semibold',
                      color: '#4B5563'
                    }}
                  >
                    What they are:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    {' '}Panels manufactured in India and approved by the MNRE
                  </span>
                </li>
                <li>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'semibold',
                      color: '#4B5563'
                    }}
                  >
                    Why it matters:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    {' '}Using DCR panels is mandatory to qualify for government subsidies on residential rooftop projects.
                  </span>
                </li>
              </ul>
            </div>

            {/* Non-DCR Panels */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="h-48 rounded-lg mb-6 overflow-hidden bg-gray-200 p-4 flex items-center justify-center">
                  <img 
                    src={panelImage} 
                    alt="Non-DCR Solar Panel" 
                    className="w-3/4 h-3/4 object-cover rounded-lg"
                  />
                </div>
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '24px'
                  }}
                >
                  Non-DCR Panels
                </h3>
              </div>
              <ul className="space-y-3 text-left">
                <li>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'semibold',
                      color: '#4B5563'
                    }}
                  >
                    What they are:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    {' '}High-quality imported panels.
                  </span>
                </li>
                <li>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'semibold',
                      color: '#4B5563'
                    }}
                  >
                    Why it matters:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      color: '#4B5563'
                    }}
                  >
                    {' '}These panels cannot be used for projects where you intend to claim a government subsidy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Find Your Perfect Inverter */}
      <div 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${inverterBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-find-inverter"
            >
              Find Your Perfect Inverter
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: 'white',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '48px'
              }}
            >
              The inverter is the brain of your system. Find the right technology based on your property's unique conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Partial Shading Card */}
            <div style={{backgroundColor: '#374499'}} className="rounded-xl p-8 text-white">
              <h3 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}
              >
                If your roof has partial shading
              </h3>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  color: 'white',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}
              >
                Your best choice is a system with Panel-Level Optimization. This means using either Microinverters or a String Inverter with Power Optimizers.
              </p>
              <div className="flex items-start">
                <span 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 'semibold',
                    color: 'white'
                  }}
                >
                  Why?
                </span>
                <span 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '12px',
                    color: 'white',
                    marginLeft: '8px'
                  }}
                >
                  It ensures a shadow on one panel doesn't reduce the power of the entire system, maximizing your energy production.
                </span>
              </div>
            </div>

            {/* Clear Sun Card */}
            <div style={{backgroundColor: '#374499'}} className="rounded-xl p-8 text-white">
              <h3 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}
              >
                If your roof has clear, all-day sun
              </h3>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  color: 'white',
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}
              >
                Your best choice is a High-Efficiency String Inverter. This proven technology is the reliable and cost-effective standard.
              </p>
              <div className="flex items-start">
                <span 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 'semibold',
                    color: 'white'
                  }}
                >
                  Why?
                </span>
                <span 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '12px',
                    color: 'white',
                    marginLeft: '8px'
                  }}
                >
                  It delivers excellent performance and value for properties with unobstructed sunlight.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '48px'
              }}
              data-testid="heading-faq"
            >
              FAQs
            </h2>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'residential'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('residential')}
                style={{
                  ...(activeTab === 'residential' ? {backgroundColor: '#374499'} : {}),
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'semibold'
                }}
                data-testid="tab-residential"
              >
                Residential
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'commercial'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('commercial')}
                style={{
                  ...(activeTab === 'commercial' ? {backgroundColor: '#374499'} : {}),
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'semibold'
                }}
                data-testid="tab-commercial"
              >
                Commercial
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'rwas'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('rwas')}
                style={{
                  ...(activeTab === 'rwas' ? {backgroundColor: '#374499'} : {}),
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'semibold'
                }}
                data-testid="tab-rwas"
              >
                RWAs
              </button>
            </div>
          </div>
          
          {/* FAQ Content */}
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {(activeTab === 'residential' ? residentialFaqData : 
              activeTab === 'commercial' ? commercialFaqData : rwasFaqData)
              .map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  data-testid={`button-faq-${index}`}
                >
                  <h3 
                    style={{
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 'normal',
                      color: '#1F2937'
                    }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 border-t border-gray-200">
                    <p 
                      style={{
                        fontFamily: 'Parkinsans, sans-serif',
                        fontSize: '12px',
                        color: '#4B5563',
                        lineHeight: '1.5',
                        paddingTop: '16px'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* General and Technical Section */}
          <div className="max-w-3xl mx-auto">
            <h3 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '18px',
                fontWeight: 'semibold',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '24px'
              }}
            >
              General and Technical
            </h3>
            <div className="space-y-4">
              {generalFaqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                    onClick={() => setExpandedGeneral(expandedGeneral === index ? null : index)}
                    data-testid={`button-general-${index}`}
                  >
                    <h3 
                      style={{
                        fontFamily: 'Parkinsans, sans-serif',
                        fontSize: '12px',
                        fontWeight: 'normal',
                        color: '#1F2937'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </button>
                  {expandedGeneral === index && (
                    <div className="px-6 pb-4 border-t border-gray-200">
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          color: '#4B5563',
                          lineHeight: '1.5',
                          paddingTop: '16px'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Go Solar? */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-why-go-solar"
            >
              Why Go Solar?
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '48px'
              }}
            >
              The Four Pillars of a Smart Investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 justify-items-center">
            {whyFeatures.map((feature, index) => {
              const isHovered = hoveredWhyIcon === index;
              
              return (
                <div key={index} className="text-center w-full max-w-xs md:max-w-none md:w-48">
                  {/* Circular icon container */}
                  <div 
                    className="text-white rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: 'transparent',
                      width: '138px',
                      height: '138px',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredWhyIcon(index)}
                    onMouseLeave={() => setHoveredWhyIcon(null)}
                  >
                    {index === 0 ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Ellipse background - changes from blue to white on hover */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full rounded-full"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            backgroundColor: isHovered ? '#FFFFFF' : '#2C2656',
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 0.95 : 1
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
                          initial={{ width: '5rem', height: '5rem' }}
                          animate={{ 
                            width: isHovered ? '7rem' : '5rem',
                            height: isHovered ? '7rem' : '5rem'
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          {/* Default wallet icon */}
                          <motion.div
                            className="absolute inset-0"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 0 : 1,
                              scale: isHovered ? 1.2 : 1
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
                              style={{ left: '25.76px', top: '6.62px' }}
                            />
                            <img 
                              src={walletDefaultBottom}
                              alt="Wallet Bottom"
                              className="absolute"
                              style={{ left: '6.62px', top: '16.56px' }}
                            />
                            <img 
                              src={walletDefaultRight}
                              alt="Wallet Right"
                              className="absolute"
                              style={{ left: '46.71px', top: '32.65px' }}
                            />
                          </motion.div>
                          
                          {/* Hover wallet icon */}
                          <motion.div
                            className="absolute inset-0"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8
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
                              style={{ left: '33.75px', top: '-2.25px' }}
                            />
                            <img 
                              src={walletHoverBottom}
                              alt="Wallet Bottom"
                              className="absolute"
                              style={{ left: '8.75px', top: '21.88px' }}
                            />
                            <img 
                              src={walletHoverRight}
                              alt="Wallet Right"
                              className="absolute"
                              style={{ left: '70.50px', top: '43.12px' }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                    ) : index === 1 ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Ellipse background */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full rounded-full"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            backgroundColor: isHovered ? '#FFFFFF' : '#2C2656',
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 0.95 : 1
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
                          initial={{ width: '5rem', height: '5rem' }}
                          animate={{ 
                            width: isHovered ? '7rem' : '5rem',
                            height: isHovered ? '7rem' : '5rem'
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          {/* Default property icon */}
                          <motion.div
                            className="absolute inset-0"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 0 : 1,
                              scale: isHovered ? 1.2 : 1
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
                              style={{ left: '0.58px', top: '3px' }}
                            />
                            <img 
                              src={propertyDefaultBottom}
                              alt="Property Bottom"
                              className="absolute"
                              style={{ left: '8.15px', top: '13.52px' }}
                            />
                            <img 
                              src={propertyDefaultRight}
                              alt="Property Right"
                              className="absolute"
                              style={{ left: '43.45px', top: '42.30px' }}
                            />
                          </motion.div>
                          
                          {/* Hover property icon */}
                          <motion.div
                            className="absolute inset-0"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8
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
                              style={{ left: '0.59px', top: '0.16px' }}
                            />
                            <img 
                              src={propertyHoverBottom}
                              alt="Property Bottom"
                              className="absolute"
                              style={{ left: '10.61px', top: '16.07px' }}
                            />
                            <img 
                              src={propertyHoverRight}
                              alt="Property Right"
                              className="absolute"
                              style={{ left: '57.30px', top: '57.15px' }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                    ) : index === 2 ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Ellipse background */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full rounded-full"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            backgroundColor: isHovered ? '#FFFFFF' : '#2C2656',
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 0.95 : 1
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
                          initial={{ width: '5rem', height: '5rem' }}
                          animate={{ 
                            width: isHovered ? '7rem' : '5rem',
                            height: isHovered ? '7rem' : '5rem'
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          {/* Default shield icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 0 : 1,
                              scale: isHovered ? 1.2 : 1
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
                          
                          {/* Hover shield icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8
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
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Ellipse background */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full rounded-full"
                          style={{ transformOrigin: 'center center' }}
                          animate={{
                            backgroundColor: isHovered ? '#FFFFFF' : '#2C2656',
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 0.95 : 1
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
                          initial={{ width: '5rem', height: '5rem' }}
                          animate={{ 
                            width: isHovered ? '7rem' : '5rem',
                            height: isHovered ? '7rem' : '5rem'
                          }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.4, 0.0, 0.2, 1] 
                          }}
                        >
                          {/* Default gear icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 0 : 1,
                              scale: isHovered ? 1.2 : 1
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
                          
                          {/* Hover gear icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transformOrigin: 'center center' }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1.25 : 0.8,
                              rotate: isHovered ? -25 : 0
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
                    )}
                  </div>
                  
                  <div className="text-center w-full">
                    <h3 
                      className="mx-auto leading-tight mb-2" 
                      style={{
                        fontFamily: 'Parkinsans, sans-serif',
                        fontSize: '18px',
                        fontWeight: 'semibold',
                        color: '#1F2937',
                        textAlign: 'center'
                      }}
                      data-testid={`text-why-feature-title-${index}`}
                    >
                      {feature.title}
                    </h3>
                    
                    <div 
                      style={{
                        maxHeight: isWhyExpanded ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'all 0.5s ease-in-out',
                        opacity: isWhyExpanded ? 1 : 0
                      }}
                    >
                      <p 
                        className="mx-auto text-sm leading-relaxed"
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          lineHeight: '1.4',
                          color: '#4B5563',
                          textAlign: 'center',
                          marginTop: '16px',
                          transform: isWhyExpanded ? 'translateY(0)' : 'translateY(-10px)',
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
          
          <div className="text-center mt-12">
            <button 
              className="flex items-center justify-center mx-auto"
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'semibold',
                fontSize: '12px',
                color: '#1F2937'
              }}
              onClick={() => setIsWhyExpanded(!isWhyExpanded)}
              data-testid="button-show-more-why"
            >
              {isWhyExpanded ? "Show Less" : "Show More"}
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
                <ChevronDown 
                  className="w-4 h-4"
                  style={{
                    transform: isWhyExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Get Your Personalized Solar Report */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-personalized-solar-report"
            >
              Get Your Personalized Solar Report
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: '48px'
              }}
            >
              Stop guessing. Start calculating. Get a data-driven report tailored to your property in under 60 seconds. Choose the path that's right for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Estimate Card */}
            <div style={{backgroundColor: '#374499'}} className="rounded-xl p-8 text-white">
              <h3 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Quick Estimate
              </h3>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  color: 'white',
                  lineHeight: '1.5',
                  marginBottom: '24px'
                }}
              >
                Get a reliable estimate in seconds based on your monthly bill.
              </p>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'semibold'
                }}
                data-testid="button-start-quick-estimate"
              >
                Start Quick Estimate
              </Button>
            </div>

            {/* Accurate Calculation Card */}
            <div style={{backgroundColor: '#374499'}} className="rounded-xl p-8 text-white">
              <h3 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'semibold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Accurate Calculation
              </h3>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  color: 'white',
                  lineHeight: '1.5',
                  marginBottom: '24px'
                }}
              >
                Use your bill's Sanctioned Load for the most precise report. We'll show you exactly where to find it.
              </p>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'semibold'
                }}
                data-testid="button-start-accurate-report"
              >
                Start Accurate Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Compass, Wrench, Headphones } from "lucide-react";
import { useState } from "react";
import servicesHero from "@assets/Service- hero sec_1757148138065.png";
import scrollIcon from "@assets/ri_scroll-to-bottom-fill_1757148198411.png";
import solutionsIllustration from "@assets/image_1757148453867.png";
import checkboxIcon from "@assets/ri_checkbox-circle-fill_1757148983468.png";
import whiteCheckboxIcon from "@assets/ri_checkbox-circle-fill (1)_1757149011157.png";
import defaultConsultIcon from "@assets/consult-default-final.png";
import hoverConsultIcon from "@assets/consult-hover-final.png";
import defaultInstallIcon from "@assets/install-default.png";
import hoverInstallIcon from "@assets/install-hover.png";
import defaultSaveIcon from "@assets/save-default.png";
import hoverSaveIcon from "@assets/save-hover.png";

export default function ServicesPage() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  return (
    <div>
      {/* Services Header */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${servicesHero})`,
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
              data-testid="heading-services"
            >
              Services
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
      
      {/* Our Solutions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontWeight: 'bold',
                fontSize: '28px',
                color: '#1F2937',
                textAlign: 'center',
                marginBottom: '16px'
              }}
              data-testid="heading-our-solutions"
            >
              Our Solutions
            </h2>
            <p 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#6B7280',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              We offer a complete range of solar solutions, tailored to the unique needs of homeowners, businesses, and agricultural clients
            </p>
          </div>

          {/* Main Content with Illustration and Cards */}
          <div className="relative">
            {/* Central Illustration */}
            <div className="flex justify-center mb-8">
              <img 
                src={solutionsIllustration} 
                alt="Solar solutions illustration showing domestic and commercial applications" 
                className="w-full max-w-4xl h-auto"
              />
            </div>

            {/* Solution Cards Positioned Over the Illustration */}
            <div className="absolute inset-0 flex items-start justify-between px-8" style={{paddingTop: '281px'}}>
              {/* Domestic Solutions Card - Left */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 max-w-md w-full">
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: '#1F2937',
                    marginBottom: '16px'
                  }}
                >
                  Domestic Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img 
                      src={checkboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: '#1F2937',
                          marginBottom: '4px'
                        }}
                      >
                        On-Grid Rooftop System:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280',
                          lineHeight: '1.4'
                        }}
                      >
                        Surplus power generated reduces electricity bill expenses
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src={checkboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: '#1F2937',
                          marginBottom: '4px'
                        }}
                      >
                        Off-Grid Rooftop System:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280',
                          lineHeight: '1.4'
                        }}
                      >
                        Surplus energy is stored on-site in a reliable battery for complete independence from the power grid
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src={checkboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: '#1F2937',
                          marginBottom: '4px'
                        }}
                      >
                        Hybrid Rooftop System:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: '#6B7280',
                          lineHeight: '1.4'
                        }}
                      >
                        Consume and store energy for backup, while excess power is exported to the grid for additional returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commercial & Industrial Solutions Card - Right */}
              <div style={{backgroundColor: '#374499'}} className="text-white rounded-xl p-6 shadow-lg max-w-md w-full">
                <h3 
                  style={{
                    fontFamily: 'Parkinsans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 'semibold',
                    color: 'white',
                    marginBottom: '16px'
                  }}
                >
                  Commercial & Industrial Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img 
                      src={whiteCheckboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: 'white',
                          marginBottom: '4px'
                        }}
                      >
                        Solar Rooftop Systems:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.4'
                        }}
                      >
                        Massive returns on our solar rooftop systems for offices and industries
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src={whiteCheckboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: 'white',
                          marginBottom: '4px'
                        }}
                      >
                        Solar Parks:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.4'
                        }}
                      >
                        Large-scale installation of solar panels on private land to supply electricity to the grid
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src={whiteCheckboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: 'white',
                          marginBottom: '4px'
                        }}
                      >
                        Solar Water Pumps:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.4'
                        }}
                      >
                        A reliable solution for irrigation, drinking water, livestock, and every other water-based application
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src={whiteCheckboxIcon} 
                      alt="Checkbox" 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '12px',
                          fontWeight: 'semibold',
                          color: 'white',
                          marginBottom: '4px'
                        }}
                      >
                        Solar Street Lights:
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'Parkinsans, sans-serif',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.4'
                        }}
                      >
                        Our solar lighting solutions last for decades with very low maintenance costs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 mb-12 mx-auto max-w-4xl">
              <h2 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  marginBottom: '16px'
                }}
              >
                How It Works: Our Seamless 3-Step Process
              </h2>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.6'
                }}
              >
                We are an EPC (Engineering, Procurement, and Construction) firm, which means we act as your single point of contact to manage the entire project. We transform a complex process into a simple, hassle-free experience.
              </p>
            </div>
            
            <h3 
              style={{
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '48px'
              }}
            >
              Our Seamless 3-Step Process
            </h3>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Consult & Design */}
            <div className="text-center relative">
              <div 
                className="flex items-center justify-center mx-auto mb-6" 
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => setHoveredIcon(0)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {hoveredIcon === 0 ? (
                  <img 
                    src={hoverConsultIcon} 
                    alt="Detailed Consult & Design" 
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'contain',
                      transform: 'scale(1.2)',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                ) : (
                  <img 
                    src={defaultConsultIcon} 
                    alt="Consult & Design" 
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                )}
              </div>
              <h4 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Consult & Design
              </h4>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}
              >
                It all begins with a detailed consultation. Our experts conduct a thorough site survey and develop a detailed analysis to design a custom solar solution, perfectly tailored to your needs and property.
              </p>
              {/* Connecting Arrow */}
              <div className="hidden md:block absolute top-10 -right-4 text-white/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Step 2: Install & Commission */}
            <div className="text-center relative">
              <div 
                className="flex items-center justify-center mx-auto mb-6" 
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => setHoveredIcon(1)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {hoveredIcon === 1 ? (
                  <img 
                    src={hoverInstallIcon} 
                    alt="Detailed Install & Commission" 
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'contain',
                      transform: 'scale(1.2)',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                ) : (
                  <img 
                    src={defaultInstallIcon} 
                    alt="Install & Commission" 
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                )}
              </div>
              <h4 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Install & Commission
              </h4>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}
              >
                Our certified in-house team takes care of managing everything from procuring best-in-class components to full installation. We handle all construction and electrical work with precision, ensuring your system is commissioned to the highest safety and performance standards.
              </p>
              {/* Connecting Arrow */}
              <div className="hidden md:block absolute top-10 -right-4 text-white/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            {/* Step 3: Save & Support */}
            <div className="text-center">
              <div 
                className="flex items-center justify-center mx-auto mb-6" 
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => setHoveredIcon(2)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {hoveredIcon === 2 ? (
                  <img 
                    src={hoverSaveIcon} 
                    alt="Detailed Save & Support" 
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'contain',
                      transform: 'scale(1.2)',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                ) : (
                  <img 
                    src={defaultSaveIcon} 
                    alt="Save & Support" 
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain',
                      transition: 'all 0.4s ease-in-out'
                    }}
                  />
                )}
              </div>
              <h4 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '16px'
                }}
              >
                Save & Support
              </h4>
              <p 
                style={{
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}
              >
                This is where your investment starts paying you back. From the moment your system is active, you take control of your energy costs. We handle all the final subsidy and net metering paperwork so that you can sit back and enjoy the savings and the benefits of clean energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

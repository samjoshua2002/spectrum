import { useState } from "react";
import { motion } from "framer-motion";
import heroBackground from "@assets/HeroImage_bck_1758726376373.png";
import solarHoverOverlay from "@assets/rooftop_solar_hover_1758711531205.png";
import streetLightHoverOverlay from "@assets/solar_street_light_hover_1758717451874.png";
import waterPumpHoverOverlay from "@assets/water_pump_1758718727952.png";
import groundSolarHoverOverlay from "@assets/solar_panels_hover_1758723794867.png";

export default function HeroSection() {
  const [showSolarOverlay, setShowSolarOverlay] = useState(false);
  const [showStreetLightOverlay, setShowStreetLightOverlay] = useState(false);
  const [showWaterPumpOverlay, setShowWaterPumpOverlay] = useState(false);
  const [showGroundSolarOverlay, setShowGroundSolarOverlay] = useState(false);

  return (
    <div className="hero-container h-64 md:min-h-screen relative overflow-hidden">
      {/* Hero container with background image */}
      <div className="relative w-full h-64 md:h-auto md:min-h-screen">
        {/* Hero background image */}
        <img 
          src={heroBackground}
          alt="Solar Energy Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" style={{ zIndex: 1 }}></div>
        
        {/* Solar Hover Overlay - Hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute pointer-events-none inset-0"
          style={{
            zIndex: 50
          }}
          animate={{
            opacity: showSolarOverlay ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <img 
            src={solarHoverOverlay}
            alt="Solar Panel Hover Overlay"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Street Light Hover Overlay - Hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute pointer-events-none inset-0"
          style={{
            zIndex: 50
          }}
          animate={{
            opacity: showStreetLightOverlay ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <img 
            src={streetLightHoverOverlay}
            alt="Street Light Hover Overlay"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Water Pump Hover Overlay - Hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute pointer-events-none inset-0"
          style={{
            zIndex: 50
          }}
          animate={{
            opacity: showWaterPumpOverlay ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <img 
            src={waterPumpHoverOverlay}
            alt="Water Pump Hover Overlay"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Ground Solar Panels Hover Overlay - Hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute pointer-events-none inset-0"
          style={{
            zIndex: 50
          }}
          animate={{
            opacity: showGroundSolarOverlay ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <img 
            src={groundSolarHoverOverlay}
            alt="Ground Solar Panels Hover Overlay"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Streetlamp Hover Area - Hidden on mobile */}
        <div 
          className="hidden md:block absolute cursor-pointer"
          style={{
            left: '56%',      
            top: '46%',       
            width: '6%',      
            height: '40%',    
            zIndex: 100
          }}
          onMouseEnter={() => {
            console.log('🔴 STREETLAMP HOVER ENTERED');
            setShowStreetLightOverlay(true);
          }}
          onMouseLeave={() => {
            console.log('🔴 STREETLAMP HOVER LEFT');
            setShowStreetLightOverlay(false);
          }}
        >
        </div>

        {/* Water Pump Hover Area - Hidden on mobile */}
        <div 
          className="hidden md:block absolute cursor-pointer"
          style={{
            left: '48%',      
            top: '70%',       
            width: '4%',      
            height: '10%',    
            zIndex: 100
          }}
          onMouseEnter={() => {
            console.log('🟡 WATER PUMP HOVER ENTERED');
            setShowWaterPumpOverlay(true);
          }}
          onMouseLeave={() => {
            console.log('🟡 WATER PUMP HOVER LEFT');
            setShowWaterPumpOverlay(false);
          }}
        >
        </div>
        
        {/* Rooftop Solar Panels Hover Area - Hidden on mobile */}
        <div 
          className="hidden md:block absolute cursor-pointer"
          style={{
            left: '12%',      
            top: '46%',       
            width: '25%',     
            height: '8%',     
            zIndex: 100
          }}
          onMouseEnter={() => {
            console.log('🔵 CORRECTED SOLAR PANELS HOVER ENTERED');
            setShowSolarOverlay(true);
          }}
          onMouseLeave={() => {
            console.log('🔵 CORRECTED SOLAR PANELS HOVER LEFT');
            setShowSolarOverlay(false);
          }}
        >
        </div>

        {/* Ground Solar Panels Hover Area - Hidden on mobile */}
        <div 
          className="hidden md:block absolute cursor-pointer"
          style={{
            left: '65%',      
            top: '76%',       
            width: '24%',     
            height: '6%',     
            zIndex: 100
          }}
          onMouseEnter={() => {
            console.log('🟦 GROUND SOLAR PANELS HOVER ENTERED');
            setShowGroundSolarOverlay(true);
          }}
          onMouseLeave={() => {
            console.log('🟦 GROUND SOLAR PANELS HOVER LEFT');
            setShowGroundSolarOverlay(false);
          }}
        >
        </div>
        
        
        {/* Hero content - Mobile optimized */}
        <div className="absolute inset-0 flex flex-col justify-center md:justify-start pointer-events-none" style={{ zIndex: 10 }}>
          {/* Hero text component */}
          <div className="px-4 md:px-16 pt-4 md:pt-16 pb-4 flex flex-col gap-2 md:gap-5 max-w-full text-center md:text-left pointer-events-auto">
            <h1 
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-indigo-950 font-parkinsans max-w-full"
              data-testid="hero-title"
            >
              Your Energy Future, Your Choice
            </h1>
            
            <p 
              className="text-sm md:text-base leading-relaxed text-indigo-950 font-corbel max-w-full md:max-w-2xl"
              data-testid="hero-description"
            >
              Select your application to discover how you can benefit
            </p>
          </div>
        </div>

        {/* For Your Home & Business Buttons - Positioned on Hero Image */}
        <div className="absolute bottom-8 md:bottom-16 left-0 right-0 pointer-events-none" style={{ zIndex: 20 }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-auto">
            {/* For Your Home Section - Left Side */}
            <div className="w-full max-w-xs md:w-56 flex flex-col justify-start items-center gap-3 md:gap-4">
              <div 
                className="w-full px-5 py-2.5 bg-white rounded-[10px] flex flex-col justify-start items-center gap-2.5 shadow-md"
                data-testid="label-home"
              >
                <div className="w-full justify-center text-center">
                  <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                    For Your Home
                  </span>
                </div>
              </div>
              <button 
                className="w-full px-4 py-2.5 bg-red-500 rounded-[10px] shadow-md flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity"
                data-testid="button-home-savings"
                onClick={() => {
                  document.getElementById('personalised-savings-report')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="text-center justify-center text-white text-xs md:text-sm font-normal leading-tight font-corbel">
                  Get Your Personalised Savings Report
                </div>
              </button>
            </div>

            {/* For Your Business Section - Right Side */}
            <div className="w-full max-w-xs md:w-56 flex flex-col justify-start items-center gap-3 md:gap-4">
              <div 
                className="w-full px-5 py-2.5 bg-white rounded-[10px] flex flex-col justify-start items-center gap-2.5 shadow-md"
                data-testid="label-business"
              >
                <div className="w-full justify-center text-center">
                  <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                    For Your Business
                  </span>
                </div>
              </div>
              <button 
                className="w-full px-4 py-2.5 bg-red-500 rounded-[10px] shadow-md flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity"
                data-testid="button-business-savings"
                onClick={() => {
                  document.getElementById('personalised-savings-report')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="text-center justify-center text-white text-xs md:text-sm font-normal leading-tight font-corbel">
                  Get Your Personalised Savings Report
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
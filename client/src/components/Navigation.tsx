import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import logoDefault from "@assets/Logo_default_1756868008964.png";
import logoVariant from "@assets/Logo_variant_1756868008963.png";
import userIcon from "@assets/useicon_1756869354022.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/our-work", label: "Our Work" },
    { href: "/lets-know", label: "Let's Know" },
    { href: "/services", label: "Services" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50 smooth-transition" style={{height: '134px'}}>
      <div className="max-w-[1440px] mx-auto" style={{padding: '45px 110px'}}>
        <div className="flex items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={scrollToTop} data-testid="link-home">
            <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:rotate-180 shadow-lg" style={{width: '54.78px', height: '54px'}}>
              <img 
                src={logoVariant} 
                alt="Logo" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img 
                src={logoDefault} 
                alt="Logo Variant" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation - Fill Middle Space */}
          <div className="hidden md:flex items-center flex-1" style={{marginLeft: '30px', marginRight: '30px'}}>
            <div className="flex items-center justify-between w-full bg-white border border-gray-200 px-8 py-3" style={{borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}}>
              <div className="flex items-center gap-[10px]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`smooth-transition px-4 py-2 hover:font-bold ${
                      isActive(item.href)
                        ? "font-semibold"
                        : ""
                    }`}
                    style={{
                      color: '#2C2656',
                      fontFamily: 'Parkinsans, sans-serif',
                      fontSize: '12px',
                      fontWeight: isActive(item.href) ? 600 : 400,
                      lineHeight: '150%',
                      letterSpacing: '0%'
                    }}
                    onClick={scrollToTop}
                    data-testid={`link-${item.label.toLowerCase().replace("'", "").replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="rounded-full w-8 h-8 flex items-center justify-center">
                <img src={userIcon} alt="User" className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 smooth-transition flex items-center gap-2"
              style={{
                borderRadius: '16px',
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '150%'
              }}
              onClick={scrollToTop}
              data-testid="button-contact"
            >
              <Phone className="w-4 h-4" />
              Contact us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-black smooth-transition"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="py-6 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block smooth-transition hover:font-bold ${
                  isActive(item.href)
                    ? "font-semibold"
                    : ""
                }`}
                style={{
                  color: '#2C2656',
                  fontFamily: 'Parkinsans, sans-serif',
                  fontSize: '12px',
                  fontWeight: isActive(item.href) ? 600 : 400,
                  lineHeight: '150%'
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
                data-testid={`mobile-link-${item.label.toLowerCase().replace("'", "").replace(" ", "-")}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-accent text-white px-4 py-2 text-center smooth-transition flex items-center justify-center gap-2"
              style={{
                borderRadius: '16px',
                fontFamily: 'Parkinsans, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '150%'
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
              data-testid="mobile-button-contact"
            >
              <Phone className="w-4 h-4" />
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

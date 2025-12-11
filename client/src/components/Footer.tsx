import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logoVariant from "@assets/Logo_variant_1756868008963.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer style={{backgroundColor: '#374499'}} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative overflow-hidden rounded-full mr-3" style={{width: '54.78px', height: '54px'}}>
                <img 
                  src={logoVariant} 
                  alt="Spectrum Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Spectrum</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Leading provider of sustainable solar energy solutions for homes, businesses, and industries. Transform your energy future with our innovative solar technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white smooth-transition" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white smooth-transition" data-testid="link-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white smooth-transition" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white smooth-transition" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white smooth-transition" onClick={scrollToTop} data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white smooth-transition" onClick={scrollToTop} data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/our-work" className="text-white/80 hover:text-white smooth-transition" onClick={scrollToTop} data-testid="footer-link-our-work">Our Work</Link></li>
              <li><Link href="/lets-know" className="text-white/80 hover:text-white smooth-transition" onClick={scrollToTop} data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white smooth-transition" onClick={scrollToTop} data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-white/80 flex-shrink-0" />
                <p className="text-white/80 text-sm">No. 56,10th Main, 14th Cross,<br />Behind MES College, Malleshwaram,<br />Bangalore - 560003</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 text-white/80 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>+91 9741289148</p>
                  <p>+91 9901960760</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-white/80" />
                <p className="text-white/80 text-sm">info@spectrumsolar.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">© 2024 Spectrum Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

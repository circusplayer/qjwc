import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

// TikTok icon component (not available in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/10 rounded-lg p-2">
                <span className="font-display font-bold text-lg">QJWC</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg">QJWC Construction</p>
                <p className="text-sm text-primary-foreground/70">Steel Trading</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for quality construction supplies and steel products. 
              Serving the construction industry with premium materials since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </Link>
              <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:09150998094" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>0915 099 8094</span>
              </a>
              <a href="mailto:tradingqjwc@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>tradingqjwc@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>QJWC Steel Trading, Philippines</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Saturday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/60">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col items-center gap-6">
          {/* Social Media Icons - Centered */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61572746810193" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61572746810193" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61572746810193" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} QJWC Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

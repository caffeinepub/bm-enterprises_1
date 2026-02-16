import { Link } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'bm-enterprises'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/BMLOGO.jpg"
                alt="BM ENTERPRISES"
                className="h-8 w-auto object-contain"
                width="32"
                height="32"
              />
              <span className="text-lg font-bold">BM ENTERPRISES</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for professional electrical contracting services. Quality, safety, and reliability in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Services
              </Link>
              <Link to="/quality-safety" className="text-muted-foreground hover:text-foreground transition-colors">
                Quality & Safety
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Major Projects
              </Link>
              <Link to="/enquiry" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Information</h3>
            <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>9561549685 / 7875400932</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>bmenterprises1212@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>A-60, Opp, Siverl Oak, Libherr Chowk, Shendra MIDC, Chh.Sambhajingar, 431154</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} BM ENTERPRISES. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

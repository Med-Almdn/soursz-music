import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-soursz-dark-800 border-t border-white/5 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold">Soursz</span>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Soursz is an AI-targeted music promotion platform helping artists grow their Spotify presence and playlist curators monetize their influence.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://spotify.com" className="text-white/80">Spotify</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/pricing" className="hover:text-soursz-neon transition-colors">Pricing</Link></li>
              <li><Link to="/reviews" className="hover:text-soursz-neon transition-colors">Reviews</Link></li>
              <li><Link to="/curator" className="hover:text-soursz-neon transition-colors">Become a Curator</Link></li>
              <li><Link to="/how-it-works" className="hover:text-soursz-neon transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-soursz-neon transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/privacy-policy" className="hover:text-soursz-neon transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-soursz-neon transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-soursz-neon transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-soursz-neon transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">Stay updated with the latest promotions and music industry insights.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm">© 2025 Soursz. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <button className="text-white/70 text-sm hover:text-white transition-colors flex items-center">
              <Mail size={16} className="mr-2" />
              support@soursz.com
            </button>
            <select className="bg-soursz-dark-600 text-white/70 text-sm py-1 px-2 rounded border border-white/10">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
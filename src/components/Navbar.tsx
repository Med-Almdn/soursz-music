import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useAudio } from '../context/AudioContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { isPlaying, toggle } = useAudio();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Curator', path: '/curator' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-soursz-dark-800/80 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-white">Soursz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-soursz-neon'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Music Toggle (modern + bigger) */}
          <button
            type="button"
            onClick={toggle}
            aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            className={[
              'relative w-12 h-12 rounded-full flex items-center justify-center',
              'transition-all duration-300 hover:scale-105 active:scale-95',
              isPlaying
                ? 'bg-soursz-neon/20 shadow-[0_0_25px_rgba(57,255,20,0.6)]'
                : 'bg-white/5 hover:bg-white/10',
            ].join(' ')}
          >
            {/* Glow ring when playing */}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full animate-ping bg-soursz-neon/30" />
            )}

            <Music
              size={26}
              className={isPlaying ? 'text-soursz-neon' : 'text-white/80'}
            />

            {/* Slash when stopped */}
            {!isPlaying && (
              <span className="absolute w-6 h-[2px] bg-white/80 rotate-[-45deg]" />
            )}
          </button>

          <Link to="/login" className="text-sm font-medium text-white/80 hover:text-white">
            Log In
          </Link>
          <Link to="/signup" className="btn-primary">
            Start Campaign
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-soursz-dark-800/95 backdrop-blur-md md:hidden"
          >
            <div className="container py-8 flex flex-col space-y-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-medium transition-colors py-2 px-4 rounded-lg ${
                      location.pathname === link.path
                        ? 'text-soursz-neon bg-soursz-dark-600'
                        : 'text-white/80 hover:text-white hover:bg-soursz-dark-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                {/* Music Toggle (mobile) */}
                <button
                  type="button"
                  onClick={toggle}
                  className="py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-3"
                >
                  <Music
                    size={22}
                    className={isPlaying ? 'text-soursz-neon' : 'text-white/80'}
                  />
                  <span className="text-base">
                    {isPlaying ? 'Music On' : 'Music Off'}
                  </span>
                </button>

                <Link
                  to="/login"
                  className="py-2.5 px-4 text-center text-white/80 hover:text-white"
                >
                  Log In
                </Link>

                <Link to="/signup" className="btn-primary">
                  Start Campaign
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

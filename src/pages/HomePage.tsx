import HeroSection from '../components/HeroSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturedBrands from '../components/FeaturedBrands';
import { ArrowRight, Music, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <FeaturedBrands />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">
                Grow Your <span className="text-soursz-neon">Spotify Presence</span> With AI-Powered Targeting
              </h2>

              <p className="text-white/70 mb-6">
                Our AI analyzes your music and matches it with the right listeners and playlists — so you grow
                faster with better targeting.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-soursz-neon mt-1">
                    <Music size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Algorithmic Playlist Placement</h4>
                    <p className="text-white/70 text-sm">
                      Target playlists where your music fits naturally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-soursz-neon mt-1">
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Precision Audience Targeting</h4>
                    <p className="text-white/70 text-sm">
                      Reach listeners who are most likely to save your tracks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-soursz-neon mt-1">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Spotify Algorithm Boost</h4>
                    <p className="text-white/70 text-sm">
                      Improve chances of Discover Weekly & Release Radar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/how-it-works" className="link-neon inline-flex items-center">
                  Learn more about our targeting
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-soursz-neon/15 to-purple-500/15 mix-blend-overlay" />
              <img
                src="https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Artist in studio"
                className="w-full h-[320px] md:h-[460px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (FULL SCREEN) */}
      <section className="min-h-screen flex items-center">
        <div className="container w-full">
          <ProcessSection />
        </div>
      </section>

      {/* CURATOR (FULL SCREEN) */}
      <section className="min-h-screen flex items-center bg-soursz-dark-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-soursz-neon/6 via-transparent to-transparent opacity-60" />

        <div className="container relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Playlist curator"
                className="w-full h-[320px] md:h-[480px] object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="mb-4">
                Monetize Your <span className="text-soursz-neon">Playlist Influence</span>
              </h2>

              <p className="text-white/70 mb-6">
                Join our curator network and earn money for each quality song you add to your playlists.
              </p>

              <ul className="space-y-3 mb-7 text-sm">
                {[
                  'Get paid for each song placement',
                  'Discover exciting new music that fits your playlist',
                  'Quick and secure payouts via PayPal or direct deposit',
                  'Maintain full creative control over your playlists',
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-soursz-neon/20 text-soursz-neon flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-white/80">{text}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                Become a Curator
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (FULL SCREEN) */}
      <section className="min-h-screen flex items-center">
        <div className="container w-full">
          <TestimonialsSection />
        </div>
      </section>

      {/* CTA (IMPROVED LOOK) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soursz-neon/10 blur-[120px]" />
          <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.45)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 mb-4">
                  Boost streams • Grow followers • Get discovered
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Ready to grow your <span className="text-soursz-neon">Spotify presence</span>?
                </h2>

                <p className="text-white/70 mt-3 max-w-xl">
                  Launch a campaign in minutes. We match your music to the right playlists and listeners — and you
                  track results in one dashboard.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Start Campaign
                  </Button>

                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/85"
                  >
                    View Pricing
                    <ArrowRight size={16} className="ml-2 opacity-80" />
                  </Link>
                </div>

                <p className="text-white/40 text-xs mt-4">
                  No long contracts • Cancel anytime
                </p>
              </div>

              {/* Right trust cards */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white text-lg font-semibold">AI Match</div>
                    <div className="text-white/60 text-xs mt-1">Targeted playlists & listeners</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white text-lg font-semibold">Safe</div>
                    <div className="text-white/60 text-xs mt-1">Quality-first placements</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white text-lg font-semibold">Fast</div>
                    <div className="text-white/60 text-xs mt-1">Setup in minutes</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white text-lg font-semibold">Track</div>
                    <div className="text-white/60 text-xs mt-1">Dashboard analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

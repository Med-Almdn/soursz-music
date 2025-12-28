import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Brand = { name: string; src: string; href?: string };

const brands: Brand[] = [
  { name: 'Universal Music Group', 
    src: 'Logos/Universal.png' },
  {
    name: 'Sony Music',
    src: 'Logos/Sony.png'  },
  {
    name: 'Warner Music Group',
    src: 'Logos/Warner.png'  },
  {
    name: 'Atlantic',
    src: 'Logos/Atlantic.png'  },
];

const FeaturedBrands = () => {
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Duplicate ONCE for a seamless loop: animate from 0% to -50%
  const loopBrands = useMemo(() => [...brands, ...brands], []);

  const duration = 22;

  return (
    <section className="py-14 bg-soursz-dark-700 overflow-hidden">
      {/* Title */}
      <div className="px-4 sm:px-8 md:px-12 text-center mb-10">
        <p className="text-white/50 text-sm uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Marquee */}
      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-soursz-dark-700 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-soursz-dark-700 to-transparent z-10" />

        <motion.div
          className="flex w-max items-center gap-10 sm:gap-14 md:gap-20 px-6"
          // Key trick: use animationPlayState so it PAUSES without resetting the x position
          style={{
            willChange: 'transform',
            animationPlayState: paused ? 'paused' : 'running',
          }}
          animate={reduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
          transition={{
            duration,
            ease: 'linear',
            repeat: reduceMotion ? 0 : Infinity,
          }}
          aria-label="Featured brands"
        >
          {loopBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="shrink-0">
              <div
                tabIndex={0}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className="
                  group rounded-2xl border border-white/10 bg-white/[0.03]
                  px-6 py-4 backdrop-blur-sm
                  transition-transform duration-300
                  hover:-translate-y-0.5 hover:border-white/20
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                "
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  draggable={false}
                  loading="lazy"
                  className="
                    h-12 sm:h-14 md:h-16 w-auto object-contain
                    opacity-60 grayscale
                    transition-all duration-300
                    group-hover:opacity-95 group-hover:grayscale-0
                  "
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBrands;

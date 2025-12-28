import React, { useRef } from 'react';
import {
  ArrowRight,
  Music,
  Users,
  Play,
  BarChart3,
} from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import Button from './Button';
import StatsCard from './StatsCard';

const stats = [
  { value: '10K+', label: 'Artists Served', icon: <Music size={24} /> },
  { value: '45K+', label: 'Songs Promoted', icon: <Play size={24} /> },
  { value: '500+', label: 'Playlists', icon: <Users size={24} /> },
  { value: '15M+', label: 'Monthly Listeners', icon: <BarChart3 size={24} /> },
];

const HeroSection: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);

  const sMouseX = useSpring(mouseX, { stiffness: 140, damping: 22, mass: 0.25 });
  const sMouseY = useSpring(mouseY, { stiffness: 140, damping: 22, mass: 0.25 });
  const sNx = useSpring(nx, { stiffness: 140, damping: 22, mass: 0.25 });
  const sNy = useSpring(ny, { stiffness: 140, damping: 22, mass: 0.25 });

  const spotlight = useMotionTemplate`
    radial-gradient(700px circle at ${sMouseX}px ${sMouseY}px,
      rgba(140, 255, 140, 0.14),
      transparent 55%
    )
  `;

  const tiltX = useTransform(sNy, [-1, 1], reduceMotion ? [0, 0] : [2.5, -2.5]);
  const tiltY = useTransform(sNx, [-1, 1], reduceMotion ? [0, 0] : [-3.5, 3.5]);

  const onMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
    nx.set((x / rect.width) * 2 - 1);
    ny.set((y / rect.height) * 2 - 1);
  };

  const onLeave = () => {
    nx.set(0);
    ny.set(0);
  };

  return (
    <section
      ref={(node) => (sectionRef.current = node)}
      className="relative h-[100svh] w-full overflow-hidden"
      onMouseMove={reduceMotion ? undefined : onMove}
      onMouseLeave={reduceMotion ? undefined : onLeave}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundImage: spotlight }}
          />
        )}

        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          animate={reduceMotion ? {} : { backgroundPosition: ['0px 0px', '64px 64px'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/55" />
      </div>

      {/* Content */}
      <div className="container h-full">
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center px-4"
              style={
                reduceMotion
                  ? undefined
                  : {
                      transformStyle: 'preserve-3d',
                      rotateX: tiltX,
                      rotateY: tiltY,
                    }
              }
            >
              <h1 className="mb-6 text-white font-semibold">
                <span className="text-soursz-neon">AI-TARGETING</span> AND{' '}
                <span className="relative inline-block text-white">
                  ALGORITHMIC
                  <motion.span
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-2 left-0 h-2 bg-soursz-neon/30 -z-10"
                  />
                </span>
                <br />
                MUSIC PROMOTION
              </h1>

              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Reach your target audience with precision using our AI-powered
                music promotion platform. Get your music on the right playlists
                with algorithmic targeting.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Start Campaign</Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Try For $25
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pb-10 px-4"
          >
            <StatsCard stats={stats} className="max-w-5xl mx-auto w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

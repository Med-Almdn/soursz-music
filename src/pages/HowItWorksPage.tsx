import { Target, Zap, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ProcessStep from '../components/ProcessStep';

function HowItWorksPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white overflow-hidden">
      
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
        <div className="absolute bottom-0 right-1/4 h-80 w-[40rem] rounded-full bg-white/60 blur-3xl dark:bg-white/5" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Simple, guided process
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              How It Works
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              From submission to real playlist placement — powered by AI and
              transparent performance tracking.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <ProcessStep
              number={1}
              title="Select Your Package"
              description="Choose the promotion package that fits your goals and budget. Start from just $25."
              icon={<Zap size={26} />}
              delay={0.1}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            />

            <ProcessStep
              number={2}
              title="Target Your Audience"
              description="Our AI analyzes your music and identifies the best audience based on genre, location, and behavior."
              icon={<Target size={26} />}
              delay={0.2}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            />

            <ProcessStep
              number={3}
              title="Launch & Track Results"
              description="Track streams, playlist adds, and audience growth in real time from your dashboard."
              icon={<BarChart2 size={26} />}
              delay={0.3}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
            >
              Start Your First Campaign — $25
            </a>
          </motion.div>

        </div>
      </main>
    </div>
  );
}

export default HowItWorksPage;

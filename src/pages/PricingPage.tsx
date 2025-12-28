import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Music,
  Zap,
  Target,
  BarChart3,
  Check,
  RadioTower,
  Users,
  Globe,
} from 'lucide-react';

import { motion } from 'framer-motion';

import PricingCard from '../components/PricingCard';
import Button from '../components/Button';

type FeatureItem = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string; 
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: FeatureItem[];
};

type KeyFeature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const toNumberPrice = (price: string) => {
  const n = Number(price.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

const formatMoney = (n: number) => {
  return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
};

const PricingPage = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const commonFeatures: FeatureItem[] = [
    { text: 'Playlist Submission', included: true },
    { text: 'Detailed Analytics', included: true },
    { text: 'Campaign Dashboard', included: true },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Start',
      price: '$49',
      description: 'Perfect for new artists looking to grow their audience',
      icon: <Music size={24} />,
      features: [
        ...commonFeatures,
        { text: 'Basic Targeting', included: true },
        { text: 'Up to 25 Playlist Placements', included: true },
        { text: 'Email Support', included: true },
        { text: 'Advanced AI Targeting', included: false },
        { text: 'Spotify Algorithm Boost', included: false },
      ],
    },
    {
      name: 'Boost',
      price: '$99',
      description: 'For established artists ready to expand their reach',
      icon: <Zap size={24} />,
      popular: true,
      features: [
        ...commonFeatures,
        { text: 'Advanced AI Targeting', included: true },
        { text: 'Up to 50 Playlist Placements', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Spotify Algorithm Boost', included: true },
        { text: 'Global Targeting', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$199',
      description: 'Comprehensive promotion for serious artists',
      icon: <Target size={24} />,
      features: [
        ...commonFeatures,
        { text: 'Premium AI Targeting', included: true },
        { text: 'Unlimited Playlist Placements', included: true },
        { text: 'VIP Support', included: true },
        { text: 'Spotify Algorithm Boost', included: true },
        { text: 'Global Targeting', included: true },
      ],
    },
  ];

  const features: KeyFeature[] = [
    {
      icon: <RadioTower size={24} />,
      title: 'Algorithmic Playlist Placement',
      description:
        'Our AI identifies and targets playlists where your music will resonate with listeners.',
    },
    {
      icon: <Target size={24} />,
      title: 'Precision Audience Targeting',
      description:
        'Reach listeners who are most likely to enjoy your music based on genre and listening habits.',
    },
    {
      icon: <Users size={24} />,
      title: 'Organic Follower Growth',
      description:
        'Gain real followers who will continue to listen to your music long after the campaign ends.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Detailed Analytics',
      description:
        'Track your campaign performance with comprehensive analytics and insights.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description:
        'Target listeners worldwide or focus on specific regions to build your fan base.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Spotify Algorithm Boost',
      description:
        'Increase your chances of getting into Discover Weekly and other algorithmic playlists.',
    },
  ];

  const displayPlans = useMemo(() => {
    const multiplier = isMonthly ? 3 : 1;

    return pricingPlans.map((plan) => {
      const base = toNumberPrice(plan.price);
      const computed = base * multiplier;

      return {
        ...plan,
        price: formatMoney(computed),
      };
    });
  }, [isMonthly, pricingPlans]);

  return (
    <div className="pt-8 pb-20">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title max-w-3xl mx-auto"
          >
            <h1 className="mb-4">Pricing Plans</h1>
            <p className="text-white/70 text-lg">
              Choose the perfect promotion package for your music. Our AI-targeting platform ensures your music reaches the right listeners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mt-6 mb-12"
          >
            <div className="glass-card p-2 flex rounded-full">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-2 rounded-full transition-all ${
                  !isMonthly
                    ? 'bg-soursz-neon text-soursz-dark font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Per Campaign
              </button>

              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-2 rounded-full transition-all ${
                  isMonthly
                    ? 'bg-soursz-neon text-soursz-dark font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Monthly
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {displayPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 inline-block"
            >
              <p className="text-white/70 text-sm mb-3">Not sure which plan is right for you?</p>
              <Button variant="outline">Try For $25</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-soursz-dark-800/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2 className="mb-3">Key Features</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              All plans include these powerful features to maximize your music promotion efforts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="text-soursz-neon mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-soursz-dark-700 to-soursz-dark-800 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <Check size={20} className="text-soursz-neon mr-2" />
                      How soon will I see results?
                    </h3>
                    <p className="text-white/70 pl-7">
                      Most artists see initial results within 3-5 days, with the full impact becoming clear by the end of the two-week campaign.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <Check size={20} className="text-soursz-neon mr-2" />
                      Are the streams and followers real?
                    </h3>
                    <p className="text-white/70 pl-7">
                      Absolutely. We only work with real playlists and genuine listeners. We never use bots or fake accounts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center">
                      <Check size={20} className="text-soursz-neon mr-2" />
                      Can I target specific countries?
                    </h3>
                    <p className="text-white/70 pl-7">
                      Yes, our Pro plan allows for location-specific targeting to help you grow in your key markets.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                    View All FAQs
                  </Button>
                </div>
              </div>

              <div className="lg:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-soursz-dark-800 to-transparent lg:from-transparent z-10" />
                <img
                  src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Music artist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

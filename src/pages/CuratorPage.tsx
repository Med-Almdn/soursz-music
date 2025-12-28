import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  DollarSign,
  Music,
  BarChart2,
  Users,
  PieChart,
  Clock,
  HelpCircle,
} from 'lucide-react';

import Button from '../components/Button';
import FAQItem from '../components/FAQItem';
import TestimonialCard from '../components/TestimonialCard';

type FAQ = {
  question: string;
  answer: string;
  tab: 'start' | 'payments';
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
};

type CuratorBenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

type CuratorProcessStepProps = {
  number: number;
  title: string;
  description: string;
  delay?: number;
};

const CuratorPage = () => {
  const [monthlyListeners, setMonthlyListeners] = useState<number>(5000);
  const [playlistCount, setPlaylistCount] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<number>(0);

  // Calculate estimated earnings
  const averageEarningPerTrack = 3.5;
  const trackPlacementsPerMonth = Math.min(
    Math.floor(monthlyListeners / 1000) * playlistCount,
    150
  );
  const estimatedMonthlyEarnings = trackPlacementsPerMonth * averageEarningPerTrack;

  const formattedEarnings = useMemo(() => {
    return estimatedMonthlyEarnings.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }, [estimatedMonthlyEarnings]);

  // FAQ items (now with tab)
  const faqItems: FAQ[] = [
    {
      tab: 'payments',
      question: 'How do I get paid as a curator?',
      answer:
        "Curators are paid for each approved track placement. Payments are processed twice a month through PayPal, direct deposit, or cryptocurrency. You'll receive detailed reports on your earnings and placements.",
    },
    {
      tab: 'start',
      question: 'What are the requirements to become a curator?',
      answer:
        "To qualify as a curator, you need at least one playlist with 1,000+ real followers. Your playlist should have consistent engagement, and you should be actively updating it. We also look for curators with a good taste in music and a passion for discovery.",
    },
    {
      tab: 'start',
      question: 'How many songs will I need to review?',
      answer:
        "The number of songs you'll review depends on your preference. You can set limits on how many submissions you want to receive daily or weekly. You're never obligated to accept songs you don't like.",
    },
    {
      tab: 'start',
      question: 'Will I maintain full control of my playlists?',
      answer:
        "Absolutely. You maintain 100% creative control over your playlists. You decide which tracks to add and how long to keep them. We never force you to add music you don't believe in.",
    },
    {
      tab: 'start',
      question: 'How does Soursz match songs to my playlists?',
      answer:
        "Our AI analyzes your playlist's characteristics, including genre, mood, tempo, and listener demographics. We then match you with tracks that are likely to fit your playlist's style and resonate with your audience.",
    },
  ];

  const filteredFaq = useMemo(() => {
    const tabKey: FAQ['tab'] = activeTab === 0 ? 'start' : 'payments';
    return faqItems.filter((x) => x.tab === tabKey);
  }, [activeTab, faqItems]);

  // Curator testimonials
  const testimonials: Testimonial[] = [
    {
      quote:
        'Becoming a curator on Soursz has been incredible. I discover amazing new music and earn a steady passive income from my playlists.',
      author: 'Alex Johnson',
      role: 'Indie Playlist Curator',
      rating: 5,
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote:
        "I've been curating playlists for years, but never monetized my influence until Soursz. Now I earn over $1,200 monthly doing what I love.",
      author: 'Sarah Williams',
      role: 'EDM Playlist Curator',
      rating: 5,
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote:
        'The AI matching is spot-on. I get submissions that actually fit my playlists, which saves me tons of time sorting through irrelevant tracks.',
      author: 'Marcus Taylor',
      role: 'Hip-Hop Curator',
      rating: 4,
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-soursz-neon/10 via-transparent to-transparent opacity-50" />

        <div className="container relative py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="text-soursz-neon text-sm font-semibold uppercase tracking-wider">
                For Playlist Curators
              </span>
              <h1 className="mt-3 mb-6">
                Monetize Your{' '}
                <span className="text-soursz-neon neon-text">Playlist Influence</span>
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Join our network of curators and earn money for each song you approve for your
                playlists. Get paid to discover new music while maintaining full creative control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Apply Now</Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  How It Works
                </Button>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-soursz-neon/20 flex items-center justify-center text-soursz-neon mr-3">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Get Paid</p>
                    <p className="text-white/70 text-sm">For Each Addition</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-soursz-neon/20 flex items-center justify-center text-soursz-neon mr-3">
                    <Music size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Full Control</p>
                    <p className="text-white/70 text-sm">Over Your Playlists</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-soursz-neon/20 flex items-center justify-center text-soursz-neon mr-3">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">500+ Curators</p>
                    <p className="text-white/70 text-sm">Already Earning</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-semibold mb-5">Calculate Your Earnings</h3>

                <div className="space-y-6 mb-6">
                  <div>
                    <label className="block text-white/70 mb-2">Your Playlist Followers</label>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={100}
                      value={monthlyListeners}
                      onChange={(e) => setMonthlyListeners(Number(e.target.value))}
                      className="w-full h-2 bg-soursz-dark-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-white/50 text-sm">1,000</span>
                      <span className="text-soursz-neon font-medium">
                        {monthlyListeners.toLocaleString()}
                      </span>
                      <span className="text-white/50 text-sm">50,000+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 mb-2">Number of Playlists</label>
                    <input
                      type="range"
                      min={1}
                      max={20}
                      value={playlistCount}
                      onChange={(e) => setPlaylistCount(Number(e.target.value))}
                      className="w-full h-2 bg-soursz-dark-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-white/50 text-sm">1</span>
                      <span className="text-soursz-neon font-medium">{playlistCount}</span>
                      <span className="text-white/50 text-sm">20+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-soursz-dark-700 p-5 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-white/70 text-sm">Estimated Placements</p>
                      <p className="text-2xl font-bold">{trackPlacementsPerMonth}</p>
                      <p className="text-white/50 text-xs">tracks / month</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Potential Earnings</p>
                      <p className="text-2xl font-bold text-soursz-neon">${formattedEarnings}</p>
                      <p className="text-white/50 text-xs">monthly</p>
                    </div>
                  </div>

                  {/* If your Button component does NOT support variant="primary", change to just: <Button fullWidth>... */}
                  <Button variant="primary" fullWidth>
                    Apply to Become a Curator
                  </Button>
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-soursz-neon/20 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-soursz-dark-800/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4">Why Become a Soursz Curator?</h2>
            <p className="text-white/70">
              Our platform is designed to support playlist curators with the tools, technology and
              compensation you deserve. Join our network and transform your passion for music
              discovery into a reliable income stream.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CuratorBenefitCard
              icon={<DollarSign size={24} />}
              title="Earn Real Money"
              description="Get paid for each quality track you add to your playlists. Earn between $2-5 per placement, with top curators making $2,000+ monthly."
              delay={0.1}
            />

            <CuratorBenefitCard
              icon={<Music size={24} />}
              title="Creative Control"
              description="You maintain 100% control over your playlists. Only add music you genuinely like and believe fits your playlist's aesthetic."
              delay={0.2}
            />

            <CuratorBenefitCard
              icon={<BarChart2 size={24} />}
              title="Grow Your Influence"
              description="Gain access to exclusive tracks and increase your playlist's value and following. Our platform helps you grow your curator brand."
              delay={0.3}
            />

            <CuratorBenefitCard
              icon={<PieChart size={24} />}
              title="AI-Powered Matching"
              description="Our AI technology matches you with tracks that fit your playlist style, saving you hours of sorting through irrelevant submissions."
              delay={0.4}
            />

            <CuratorBenefitCard
              icon={<Clock size={24} />}
              title="Flexible Commitment"
              description="Set your own schedule and review tracks when it's convenient. No minimum time requirements or quotas to meet."
              delay={0.5}
            />

            <CuratorBenefitCard
              icon={<Users size={24} />}
              title="Exclusive Community"
              description="Join a network of passionate music curators. Share insights, collaborate on playlists, and connect with industry professionals."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-white/70">
              Our streamlined process makes it easy to start earning from your playlist curation
              skills. Follow these simple steps to become a Soursz curator.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CuratorProcessStep
              number={1}
              title="Apply"
              description="Submit your playlist information for review. We'll verify your follower count and engagement metrics."
              delay={0.1}
            />
            <CuratorProcessStep
              number={2}
              title="Get Approved"
              description="Once verified, you'll get access to our curator dashboard and start receiving track suggestions."
              delay={0.2}
            />
            <CuratorProcessStep
              number={3}
              title="Review Tracks"
              description="Listen to AI-matched tracks and approve those that fit your playlist's style and quality standards."
              delay={0.3}
            />
            <CuratorProcessStep
              number={4}
              title="Get Paid"
              description="Earn money for each approved track. Payments are processed twice monthly via your preferred method."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-soursz-dark-800/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="mb-4">What Our Curators Say</h2>
            <p className="text-white/70">
              Join hundreds of curators who are already monetizing their playlist influence with
              Soursz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70">
              Got questions about becoming a curator? Find answers to common questions below.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="flex mb-6 overflow-hidden">
              <button
                onClick={() => setActiveTab(0)}
                className={`flex-1 py-3 text-center transition-colors ${
                  activeTab === 0
                    ? 'text-soursz-neon border-b-2 border-soursz-neon'
                    : 'text-white/60 hover:text-white/90 border-b border-white/10'
                }`}
              >
                Getting Started
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`flex-1 py-3 text-center transition-colors ${
                  activeTab === 1
                    ? 'text-soursz-neon border-b-2 border-soursz-neon'
                    : 'text-white/60 hover:text-white/90 border-b border-white/10'
                }`}
              >
                Earnings & Payments
              </button>
            </div>

            <div className="space-y-1">
              {filteredFaq.map((faq, index) => (
                <FAQItem key={`${faq.question}-${index}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/70 mb-4">Have more questions? We're here to help.</p>
              <Button variant="outline" icon={<HelpCircle size={18} />} iconPosition="left">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6">
              Ready to Monetize Your <span className="text-soursz-neon">Playlist Influence?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of curators today and start earning money for doing what you love —
              discovering and sharing great music.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button size="lg">Apply Now</Button>
              <Link to="/contact" className="link-neon inline-flex items-center">
                Contact Us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


const CuratorBenefitCard = ({ icon, title, description, delay = 0 }: CuratorBenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card p-6 card-hover"
    >
      <div className="text-soursz-neon mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const CuratorProcessStep = ({ number, title, description, delay = 0 }: CuratorProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card p-6 relative"
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-soursz-neon text-soursz-dark font-bold rounded-full mr-4 text-xl">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-white/70 pl-16">{description}</p>
    </motion.div>
  );
};

export default CuratorPage;

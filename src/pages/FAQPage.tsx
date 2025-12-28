import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQItem from '../components/FAQItem';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Soursz's AI targeting work?",
      answer: "Our AI analyzes your music's characteristics, including genre, tempo, mood, and instrumentation, then matches it with playlists and listeners who have shown interest in similar music. This ensures your music reaches the most receptive audience."
    },
    {
      question: "How soon will I see results from my campaign?",
      answer: "Most artists begin seeing results within 3-5 days of campaign launch. You'll receive detailed analytics showing playlist adds, stream counts, and listener engagement. The full impact typically becomes clear by the end of the two-week campaign period."
    },
    {
      question: "Are the streams and playlist placements real?",
      answer: "Absolutely. We only work with genuine playlist curators and real listeners. We never use bots, fake accounts, or artificial methods to boost numbers. All engagement comes from authentic music fans."
    },
    {
      question: "Can I target specific countries or regions?",
      answer: "Yes, our Pro plan includes geographic targeting options. You can focus your campaign on specific countries or regions to build your presence in key markets or align with tour dates and local promotions."
    },
    {
      question: "What happens after my campaign ends?",
      answer: "The relationships you build with playlist curators and listeners during your campaign continue afterward. Many artists maintain their playlist positions and see continued organic growth in their streaming numbers."
    },
    {
      question: "How do you ensure my music reaches the right playlists?",
      answer: "Our AI analyzes both your music and potential playlists for compatibility. We look at factors like genre match, curator preferences, playlist engagement rates, and listener retention to ensure the best fit."
    },
    {
      question: "What makes Soursz different from other promotion services?",
      answer: "Soursz combines AI-powered targeting with a curated network of legitimate playlist curators. We focus on sustainable growth and real engagement, rather than temporary spikes from artificial sources."
    },
    {
      question: "Do you guarantee a specific number of streams?",
      answer: "We don't guarantee specific stream counts because we focus on organic, sustainable growth. However, our campaigns consistently deliver strong results, with most artists seeing significant increases in their monthly listeners."
    },
    {
      question: "Can I promote any genre of music?",
      answer: "Yes, our platform works with all music genres. Our AI adapts its targeting strategy based on your specific genre and style to find the most appropriate playlists and listeners."
    },
    {
      question: "What analytics and reporting do you provide?",
      answer: "You'll receive detailed analytics including playlist adds, stream counts, listener demographics, geographic data, and engagement metrics. Our dashboard updates in real-time so you can track your campaign's progress."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-10 pb-10">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="mb-4">Frequently Asked Questions</h1>
              <p className="text-white/70 text-lg">
                Find answers to common questions about our AI-powered music promotion platform.
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => handleToggle(index)}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-white/70 mb-6">
                  Our support team is here to help you with any questions about our platform.
                </p>
                <a href="/contact" className="btn-primary">
                  Contact Support
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
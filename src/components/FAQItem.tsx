import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;         // controlled (optional)
  toggleOpen?: () => void;  // controlled handler (optional)
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  const isControlled = typeof isOpen === 'boolean' && typeof toggleOpen === 'function';

  const [internalOpen, setInternalOpen] = useState<boolean>(isOpen ?? false);

  // keep internal state in sync if parent passes isOpen but not toggleOpen
  useEffect(() => {
    if (typeof isOpen === 'boolean' && !isControlled) {
      setInternalOpen(isOpen);
    }
  }, [isOpen, isControlled]);

  const open = isControlled ? (isOpen as boolean) : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      toggleOpen!();
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <div className="border-b border-white/10 py-4">
      <button
        type="button"
        className="flex justify-between items-center w-full text-left py-2"
        onClick={handleToggle}
        aria-expanded={open}
      >
        <span className="font-medium text-lg">{question}</span>
        <span className="text-soursz-neon ml-4">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-3 text-white/70">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;

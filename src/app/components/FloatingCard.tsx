import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 2,
      }}
      className={`bg-white/90 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl shadow-black/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const PopupContainer = ({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down';
}) => {
  return (
    <motion.div
      initial={{ y: direction === 'up' ? 200 : -200 }}
      animate={{ y: 0 }}
      className={`border-plum-500 overflow-hidden border-[2px] bg-white p-[12px] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PopupContainer;

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageSection = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const { pathname } = useLocation();
  const hasHeader = pathname !== '/';
  return (
    <motion.section
      initial={{ x: hasHeader ? 200 : -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`${hasHeader ? 'min-h-[calc(100vh-70px)]' : 'min-h-screen'} ${className} px-[16px] w-full lg:mx-auto lg:max-w-[1280px]`}
    >
      {children}
    </motion.section>
  );
};

export default PageSection;

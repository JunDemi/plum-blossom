import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const { pathname } = useLocation();
  const isRoot = pathname === '/';
  return (
    <AnimatePresence mode='wait'>
      <main className='from-plum-100 to-plum-300 min-h-screen bg-linear-to-b'>
        {!isRoot && <Header />}
        <Outlet key={pathname} />
      </main>
    </AnimatePresence>
  );
};

export default App;

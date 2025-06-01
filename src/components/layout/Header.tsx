import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className='fixed top-0 left-0 flex h-[70px] w-full items-center justify-between px-[16px] lg:left-1/2 lg:max-w-[1280px] lg:-translate-x-1/2'>
        <h1 className='text-plum-500 cursor-pointer text-[36px] font-[800]' onClick={() => navigate('/')}>
          매화
        </h1>
        <Button buttonType='color' size='md' onClick={() => navigate('/')}>
          홈으로
        </Button>
      </header>
      <div className='h-[70px]' />
    </>
  );
};

export default Header;

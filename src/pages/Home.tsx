import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import PageSection from '../components/layout/PageSection';

const Home = () => {
  const router = useNavigate();
  return (
    <PageSection className='flex h-screen flex-col items-center justify-center gap-[40px]'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-plum-500 text-[16px]'>MapleStory</p>
        <p className='text-[40px] text-white'>스카니아 매화길드</p>
      </div>

      <div className='relative grid w-full grid-cols-1 gap-[16px] lg:grid-cols-3'>
        {mainMenu.map((menu) => (
          <div
            key={menu.no}
            className='hover:bg-plum-100 shadow-thick flex h-[200px] cursor-pointer flex-col items-end justify-between rounded-[6px] bg-white p-[20px] transition-[.2s] hover:translate-y-[-3px]'
            onClick={() => router(menu.link)}
          >
            <p className='text-plum-500 w-full text-[15px]'>{menu.title}</p>
            <Button buttonType='color' size='lg'>
              {menu.label}
            </Button>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Home;

const mainMenu = [
  {
    no: 1,
    title: '길드에 가입하시고 싶으신가요?',
    label: '길드 가입 신청',
    link: '/register',
  },
  {
    no: 2,
    title: '저희 멤버들을 소개합니다',
    label: '길드원 목록 조회',
    link: '/members',
  },
  {
    no: 3,
    title: 'Comming Soon~!',
    label: '커뮤니티 페이지',
    link: '/',
  },
];

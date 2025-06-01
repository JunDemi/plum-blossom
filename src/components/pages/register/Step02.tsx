import type { Dispatch, SetStateAction } from 'react';
import Button from '../../common/Button';

const Step02 = ({
  setStep,
  setBack,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  setBack: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-[30px] px-[16px] lg:w-fit lg:gap-[50px] lg:px-0'>
      <div className='grid w-full grid-cols-1 gap-[15px] lg:grid-cols-2 lg:gap-[20px]'>
        {[...Array(4)].map((_, i) => (
          <div key={i} className='shadow-thick h-[100px] w-full rounded-[6px] bg-white lg:h-[180px] lg:w-[280px]'>
            소개문구 {i + 1}
          </div>
        ))}
      </div>
      <div className='flex items-center gap-[10px]'>
        <Button
          buttonType='color'
          size='md'
          onClick={() => {
            setBack(true);
            setStep(1);
          }}
        >
          이전
        </Button>
        <Button
          buttonType='outline'
          size='md'
          onClick={() => {
            setBack(false);
            setStep(3);
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Step02;

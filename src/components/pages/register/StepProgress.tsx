interface StepProgressProps {
  step: number;
}

const StepProgress = ({ step }: StepProgressProps) => {
  return (
    <div className='mx-auto grid w-full max-w-[600px] grid-cols-4'>
      {registerSteps.map((steps) => {
        const currentStep = step === steps.no;
        const firstAndLast = [1, 4].includes(steps.no);
        const firstStep = steps.no === 1;
        return (
          <div key={steps.no} className='relative z-1 flex flex-col items-center justify-center gap-[3px]'>
            <div
              className={`${currentStep ? 'text-plum-300 bg-white' : 'bg-plum-300 text-white'} border-plum-300 z-1 grid aspect-square h-[30px] w-[30px] place-items-center rounded-full border-[2px] text-[14px] transition-[.2s]`}
            >
              {steps.no}
            </div>
            <p className='text-[14px] text-gray-600'>{steps.title}</p>
            <div
              className={`bg-plum-300 absolute top-[15px] h-[2px] ${firstAndLast ? 'w-1/2' : 'w-full'} ${firstStep ? 'right-0' : 'left-0'}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;

const registerSteps = [
  {
    no: 1,
    title: '닉네임 입력',
  },
  {
    no: 2,
    title: '길드 소개',
  },
  {
    no: 3,
    title: '설문조사',
  },
  {
    no: 4,
    title: '가입 완료',
  },
];

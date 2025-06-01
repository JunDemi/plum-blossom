import { useState } from 'react';
import PageSection from '../components/layout/PageSection';
import StepProgress from '../components/pages/register/StepProgress';
import Button from '../components/common/Button';
import { modalStore } from '../store/modalStore';
import ModalContainer from '../components/common/Modal';
import FAQPopup from '../components/pages/register/FAQPopup';
import Step01 from '../components/pages/register/Step01';
import { AnimatePresence, motion } from 'framer-motion';
import NicknameCheckPopup from '../components/pages/register/NicknameCheckPopup';
import Step02 from '../components/pages/register/Step02';

const boxVar = {
  entry: (isBack: boolean) => ({
    x: isBack ? -200 : 200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hide: (isBack: boolean) => ({
    x: isBack ? 200 : -200,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const Register = () => {
  //modal
  const { openModal } = modalStore();

  //step
  const [step, setStep] = useState<number>(1);
  const [back, setBack] = useState<boolean>(false);

  const stepLayout = {
    1: <Step01 />,
    2: <Step02 setStep={setStep} setBack={setBack} />,
  }[step];

  return (
    <>
      <PageSection className='relative flex flex-col items-start'>
        <StepProgress step={step} />
        <AnimatePresence mode='sync' custom={back}>
          {[1, 2, 3, 4].map(
            (num) =>
              num === step && (
                <motion.div
                  key={num}
                  variants={boxVar}
                  custom={back}
                  initial='entry'
                  animate='center'
                  exit='hide'
                  className='absolute top-1/2 left-1/2 flex w-full flex-1 -translate-x-1/2 -translate-y-[calc(50%+70px)] items-center justify-center'
                >
                  {stepLayout}
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </PageSection>
      {step !== 1 && (
        <Button
          buttonType='outline'
          size='sm'
          className='fixed right-[16px] bottom-[16px]'
          onClick={() => openModal('faq')}
        >
          궁금한 점이 있으신가요?
        </Button>
      )}
      <ModalContainer
        modalConf={{
          faq: <FAQPopup />,
          'nickname-check': (
            <NicknameCheckPopup
              nextStep={() => {
                setBack(false);
                setStep(2);
              }}
            />
          ),
        }}
      />
    </>
  );
};

export default Register;

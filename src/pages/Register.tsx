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

const boxVar = {
  entry: {
    x: 200,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hide: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Register = () => {
  //modal
  const { openModal } = modalStore();

  //step
  const [step, setStep] = useState<number>(1);

  const stepLayout = {
    1: <Step01 />,
  }[step];

  return (
    <>
      <PageSection className='flex flex-col items-start'>
        <StepProgress step={step} />
        <AnimatePresence mode='sync'>
          {[1, 2, 3, 4].map(
            (num) =>
              num === step && (
                <motion.div
                  key={num}
                  variants={boxVar}
                  initial='entry'
                  animate='center'
                  exit='hide'
                  className='flex w-full flex-1 -translate-y-[70px] items-center justify-center'
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
          궁금하신 점이 있으신가요?
        </Button>
      )}
      <ModalContainer
        modalConf={{
          faq: <FAQPopup />,
          'nickname-check': <NicknameCheckPopup nextStep={() => setStep(2)}/>,
        }}
      />
    </>
  );
};

export default Register;

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { modalStore } from '../../store/modalStore';

interface ISwitchModalContProps {
  [key: string]: React.ReactNode;
}

interface IModalProps {
  className?: string;
  modalConf?: ISwitchModalContProps;
}

//모달 컨테이너
const ModalContainer = ({ modalConf }: IModalProps) => {
  //zustand 모달 상태
  const getModal = modalStore((state) => state.modalType);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //포탈 연결
  const portalElement = document.querySelector('#portal-modal');

  //모달 on/off
  useEffect(() => {
    setIsOpen(!!getModal);
  }, [getModal]);

  //포탈 생성
  // AnimatePresence를 사용하여 모달이 열리고 닫힐 때 애니메이션 효과를 적용
  return createPortal(
    <AnimatePresence mode='sync'>
      {isOpen ? <ModalLayer>{modalConf && modalConf[getModal as string]}</ModalLayer> : null}
    </AnimatePresence>,
    portalElement as Element,
    'portal-modal',
  );
};

const ModalLayer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed top-0 left-0 z-99 flex h-screen w-full items-center justify-center bg-[#000000B2]`}
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;

import { useEffect } from 'react';
import { modalStore } from '../../../store/modalStore';
import PopupContainer from './PopupContainer';

const CopyPopup = ({ copyText }: { copyText: string }) => {
  const { closeModal } = modalStore();

  // 클립보드 복사
  const getCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch (error) {
      console.log(error);
    }
  };

  // 마운트 후 1초 후에 팝업 닫기
  useEffect(() => {
    getCopy();
    setTimeout(() => {
      closeModal();
    }, 1000);
  }, []);

  return (
    <PopupContainer className='flex h-[50px] w-[240px] flex-col items-center justify-center gap-[10px] rounded-[50px]'>
      <p className='text-plum-600 text-18-b'>클립보드에 복사되었습니다.</p>
    </PopupContainer>
  );
};

export default CopyPopup;

import { useQuery } from '@tanstack/react-query';
import { registerStore } from '../../../store/registerStore';
import PopupContainer from '../../common/popup/PopupContainer';
import type { IRegisterOne } from '../../../types/register.interface';
import { ApiCaller } from '../../../lib/api';
import LoadingSpiner from '../../common/LoadingSpiner';
import Button from '../../common/Button';
import { modalStore } from '../../../store/modalStore';

const NicknameCheckPopup = ({ nextStep }: { nextStep: () => void }) => {
  // Modal
  const { closeModal } = modalStore();
  // registerStore
  const { registerInfo } = registerStore();

  //useQuery
  const { data: regiterData, status } = useQuery({
    queryKey: ['get', 'register-one', registerInfo.nickname],
    queryFn: async (param: any) =>
      ApiCaller<IRegisterOne>('/register/one', {
        method: 'GET',
        params: {
          name: param.queryKey[2],
        },
      }),
    refetchOnWindowFocus: false,
    enabled: !!registerInfo.nickname,
  });

  // 월드가 다른 캐릭터
  const isDifferentWorld = regiterData?.world_name !== '스카니아';

  return (
    <PopupContainer className='w-[320px] rounded-[10px] border-[2px] !p-[0]'>
      {status === 'success' ? (
        <div className='flex min-h-[200px] flex-col'>
          <div className='flex h-[100px] items-center gap-[10px]'>
            <img src={regiterData.character_image} alt='' className='h-[100px] w-[100px] object-cover' />
            <div>
              <p className='text-[18px] leading-none text-black'>{regiterData.character_name}</p>
              <p className='text-[12px] text-gray-400'>{regiterData.character_class}</p>
              <p className='bg-plum-800 w-[65px] text-center rounded-[10px] px-[8px] text-[12px] text-white'>
                Lv. {regiterData.character_level}
              </p>
              <div className='h-[5px] w-[65px] bg-gray-300 mt-[5px]'>
                <div className='bg-linear-to-r from-green-500 to-green-400  h-full' style={{ width: `${+regiterData.character_exp_rate}%` }}></div>
              </div>
            </div>
          </div>
          <div className='bg-plum-500 flex flex-1 flex-col items-center justify-center gap-[8px] px-[20px] py-[10px] text-center'>
            <p className='text-[16px] text-white'>본인의 캐릭터가 맞나요?</p>
            <div className='flex items-center justify-center gap-[10px]'>
              <Button buttonType='color' size='lg' onClick={closeModal} className='w-[70px]'>
                아니오
              </Button>
              <Button
                buttonType='outline'
                size='lg'
                onClick={() => {
                  closeModal();
                  nextStep();
                }}
                className='w-[70px]'
                disabled={isDifferentWorld}
              >
                예
              </Button>
            </div>
            {isDifferentWorld && (
              <p className='text-plum-100 px-[20px] text-center text-[12px]'>스카니아 월드 캐릭터가 아닙니다.</p>
            )}
          </div>
        </div>
      ) : (
        <LoadingSpiner />
      )}
    </PopupContainer>
  );
};

export default NicknameCheckPopup;

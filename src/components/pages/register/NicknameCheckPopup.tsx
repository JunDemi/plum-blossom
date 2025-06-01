import { useQuery } from '@tanstack/react-query';
import { registerStore } from '../../../store/registerStore';
import PopupContainer from '../../common/popup/PopupContainer';
import type { IRegisterOne } from '../../../types/register.interface';
import { ApiCaller } from '../../../lib/api';
import LoadingSpiner from '../../common/LoadingSpiner';
import Button from '../../common/Button';

const NicknameCheckPopup = ({ nextStep }: { nextStep: () => void }) => {
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

  return (
    <PopupContainer className='w-[640px] rounded-[10px] border-[2px]'>
      {status === 'success' ? (
        <div className='min-h-[250px]'>
          <div className='flex items-end gap-[10px]'>
            <img src={regiterData.character_image} alt='' className='w-[100px]' />
            <div>
              <p>Lv. {regiterData.character_level}</p>
              <p>{regiterData.character_class}</p>
              <p>{regiterData.character_name}</p>
            </div>
          </div>

          <Button buttonType='color' size='md' onClick={nextStep}>
            예
          </Button>
        </div>
      ) : (
        <LoadingSpiner />
      )}
    </PopupContainer>
  );
};

export default NicknameCheckPopup;

import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { modalStore } from '../../../store/modalStore';
import { registerStore } from '../../../store/registerStore';

const Step01 = () => {
  // Modal
  const { openModal } = modalStore();

  // registerStore
  const { setRegister } = registerStore();

  // useForm
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  // 닉네임 검색 핸들러
  const onSubmit = () => {
    //전역 상태 저장
    setRegister({ nickname: watch('nickname') });
    openModal('nickname-check');
  };

  return (
    <form className='w-full max-w-[500px] space-y-[10px]' onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        placeHolder='닉네임을 입력해주세요.'
        name='nickname'
        className='!h-[80px]'
        inputClassName='!h-[80px] !text-[24px]'
      />
      <Button buttonType='color' size='md' className='w-full' type='submit' disabled={watch('nickname')?.length < 2}>
        검색
      </Button>
    </form>
  );
};

export default Step01;

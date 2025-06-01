import { useForm } from 'react-hook-form';
import { modalStore } from '../store/modalStore';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ModalContainer from '../components/common/Modal';
import CopyPopup from '../components/common/popup/CopyPopup';

const Test = () => {
  const { control } = useForm();

  const { openModal } = modalStore();
  return (
    <div className='space-y-[3px]'>
      <Button size='lg' buttonType='color' onClick={() => openModal('test')} isResponsive>
        Color
      </Button>
      <Button size='md' buttonType='color'>
        Color
      </Button>
      <Button size='sm' buttonType='color'>
        Color
      </Button>
      <Button size='lg' buttonType='outline'>
        Outline
      </Button>
      <Button size='md' buttonType='outline'>
        Outline
      </Button>
      <Button size='sm' buttonType='outline'>
        Outline
      </Button>

      <Button size='lg' buttonType='outline' disabled>
        Disabled
      </Button>
      <Button size='md' buttonType='outline' disabled>
        Disabled
      </Button>
      <Button size='sm' buttonType='outline' disabled>
        Disabled
      </Button>

      <Input control={control} name='xx' className='max-w-[400px]' />
      <Input control={control} name='yy' placeHolder='hello' />
      <Input control={control} name='zz' isTextArea />

      <ModalContainer
        modalConf={{
          test: <CopyPopup copyText='Hello World' />,
        }}
      />
    </div>
  );
};

export default Test;

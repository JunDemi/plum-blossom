import { useController, type Control } from 'react-hook-form';

interface InputProps {
  isTextArea?: boolean;
  name?: string;
  control?: Control<any>;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  placeHolder?: string;
}

const Input = ({
  isTextArea = false,
  name = '',
  control,
  disabled = false,
  className = '',
  inputClassName = '',
  placeHolder = '',
  ...props
}: InputProps) => {
  const { field } = useController({ name, control });

  const commonClass = `text-[20px] focus:border-plum-500 h-[40px] w-full border-[2px] border-gray-300 bg-white px-[20px] transition-[.2s] !outline-none ${inputClassName}`;
  return (
    <div className={`w-full ${className}`}>
      {isTextArea ? (
        <textarea
          {...props}
          {...field}
          autoComplete='off'
          disabled={disabled}
          className={`${commonClass} min-h-[200px] resize-none rounded-[10px]`}
          value={field.value ?? ''}
          placeholder={placeHolder}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          name={name}
        />
      ) : (
        <input
          {...props}
          {...field}
          autoComplete='off'
          disabled={disabled}
          className={`${commonClass} rounded-[40px] placeholder:text-gray-300`}
          value={field.value ?? ''}
          placeholder={placeHolder}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;

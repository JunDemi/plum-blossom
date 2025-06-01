import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonType = 'color' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  buttonType?: ButtonType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isResponsive?: boolean;
}

const Button = ({
  disabled,
  buttonType,
  children,
  size = 'lg',
  className,
  isResponsive = false,
  ...props
}: ButtonProps) => {
  const common = (() => {
    const cla = `flex justify-center items-center whitespace-nowrap transition-[.2s] ${className}`;

    if (size === 'lg') {
      return `${cla} rounded-[40px] ${isResponsive ? 'h-[24px] px-[16px] lg:h-[40px] lg:px-[20px]' : 'h-[40px] px-[20px]'} `;
    }

    if (size === 'md') {
      return `${cla} h-[32px] rounded-[40px] px-[20px]`;
    }

    if (size === 'sm') {
      return `${cla} h-[24px] rounded-[40px] px-[16px]`;
    }
  })();

  const textCommon = {
    sm: 'text-[16px]',
    md: isResponsive ? 'text-[16px] md:text-[18px]' : 'text-[18px]',
    lg: isResponsive ? 'text-[16px] lg:text-[20px]' : 'text-[20px]',
  }[size];

  if (disabled) {
    return (
      <button
        {...props}
        className={`${common} !cursor-not-allowed border-[2px] border-gray-200 bg-gray-100`}
        disabled={true}
      >
        <div className={`${textCommon} text-gray-400`}>{children}</div>
      </button>
    );
  }

  if (buttonType === 'color') {
    return (
      <button {...props} className={`${common} bg-plum-400 hover:bg-plum-500`}>
        <div className={`${textCommon} text-blossom-100`}>{children}</div>
      </button>
    );
  }

  if (buttonType === 'outline') {
    return (
      <button {...props} className={`${common} border-blossom-400 hover:bg-blossom-100 border-[2px] bg-white`}>
        <div className={`${textCommon} text-blossom-800`}>{children}</div>
      </button>
    );
  }
};

export default Button;

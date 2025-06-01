import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IRegisterStore {
  registerInfo: IRegisterInfo;
  setRegister: (info: Partial<IRegisterInfo>) => void;
}

interface IRegisterInfo {
  nickname: string;
}

export const registerStore = create<IRegisterStore>()(
  devtools((set) => ({
    memberInfo: {
      nickname: '',
    },
    setRegister: (info: Partial<IRegisterInfo>) => {
      return set((state) => ({
        registerInfo: {
          ...state.registerInfo,
          ...info,
        },
      }));
    },
  })),
);

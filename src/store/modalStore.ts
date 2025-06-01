import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IModalStore {
  modalType: string | null;
  openModal: (type: string) => void;
  closeModal: () => void;
}

export const modalStore = create<IModalStore>()(
  devtools((set) => ({
    modalType: null,
    openModal: (type: string) => {
      return set({ modalType: type });
    },
    closeModal: () => {
      return set({ modalType: null });
    },
  })),
);
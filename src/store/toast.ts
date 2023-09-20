import { ValueOf } from '@/types/common';
import { create } from 'zustand';

export const ToastType = {
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

interface ToastState {
  visible: boolean;
  content: string;
  type: ValueOf<typeof ToastType>;
  setVisible: (visible: boolean) => void;
  setContent: (input: string) => void;
  setType: (type: ValueOf<typeof ToastType>) => void;
}

const useToastStore = create<ToastState>()((set) => ({
  visible: false,
  content: '',
  type: ToastType.SUCCESS,
  setVisible: (visible) => set({ visible }),
  setContent: (input) => set({ content: input }),
  setType: (type) => set({ type }),
}));

export default useToastStore;

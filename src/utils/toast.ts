// packages/edifitech-graphql/src/utils/toast.ts

type ToastType = 'success' | 'error' | 'info' | 'warning';

let toastFn: (message: string, type?: ToastType) => void = () => {
  console.warn('Toast no inicializado aún');
};

export function setToastFunction(fn: typeof toastFn) {
  toastFn = fn;
}

export function toast(message: string, type: ToastType = 'info') {
  toastFn(message, type);
}

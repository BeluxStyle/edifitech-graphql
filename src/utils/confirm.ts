// packages/edifitech-graphql/src/utils/confirm.ts

let confirmFunction: (message: string) => Promise<boolean> = async () => false;

export const setConfirmFunction = (fn: (message: string) => Promise<boolean>) => {
  confirmFunction = fn;
};

export const confirm = (message: string): Promise<boolean> => {
  return confirmFunction(message);
};

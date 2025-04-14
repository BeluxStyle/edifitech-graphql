// utils/confirmDelete.ts
import { confirm } from './confirm'; // ahora lo armamos abajo

export const confirmDelete = async (message: string): Promise<boolean> => {
  return await confirm(message);
};
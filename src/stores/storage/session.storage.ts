import { StateStorage, createJSONStorage } from "zustand/middleware";

export
  const storageApi: StateStorage = {
    getItem: function (name: string): string | Promise<string | null> | null {
      const value = sessionStorage.getItem(name);

      return value;
    },
    setItem: function (name: string, value: string): void | Promise<void> {
      sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): void | Promise<void> {
      sessionStorage.removeItem(name);
    }
  }

export const createSessionStorage = createJSONStorage(() => storageApi)
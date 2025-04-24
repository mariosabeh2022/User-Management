import { create } from "zustand";
import { persist } from "zustand/middleware";

import { edit_deleteStore } from "./edit-deteleStore.type";

const useedit_deleteStore = create<edit_deleteStore>()(
  persist(
    (set) => ({
      isChanging: false,
      setIsChanging: (value) => set(() => ({ isChanging: value })),
    }),
    {
      name: "user-edit_delete",
    }
  )
);
export { useedit_deleteStore };

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { authType } from "types/";

const useAuthStore = create<authType>()(
    persist((set) => ({
        user: null,
        token: null,
        
        setCredentials: (user, token) => set({user, token}) ,
        
        logout: () => set({user: null, token: null}) ,
    }),
    {
      name: "auth-storage",
    }
)
)

export default useAuthStore;
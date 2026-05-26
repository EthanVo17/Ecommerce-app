import { create } from "zustand";
import { persist } from "zustand/middleware";

import authRole from "../roles/authRole";

const useAuthStore = create<authRole>()(
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

export { useAuthStore };
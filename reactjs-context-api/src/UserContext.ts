import { createContext, useContext } from "react";

export interface User {
  name: string;
}

// create the context
export const UserContext = createContext<User | undefined>(undefined)

// custom hook to access the user context
export function useUser() {
  const user = useContext(UserContext)

  if (!user) {
    throw new Error('useUser must be used within a UserContext')
  }

  return user
}

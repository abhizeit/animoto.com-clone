import { createContext, useReducer } from "react";

import reducer from "./reducer";

export const AuthContext = createContext();

const intitState = {
  isAuth: false,
  user: "",
  isPremiumUser: false,
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intitState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

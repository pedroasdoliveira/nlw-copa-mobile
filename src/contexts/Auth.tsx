import { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

interface AuthProviderProp {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProp) => {
  const signIn = async () => {};

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Pedro",
          avatarUrl: "https://github.com/pedroasdoliveira.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

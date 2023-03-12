import React, { createContext, useEffect, useState } from "react";

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signOut: () => void;
}

interface User {
  name?: string;
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter((user: User) => {
        return user.email === JSON.parse(userToken).email;
      });

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signIn = (email: string, password: string) => {
    localStorage.setItem("user_token", JSON.stringify({ email, password }));
    setUser({ email, password });
    return;
  };

  const signUp = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "");

    const hasUser = usersStorage?.filter((user: User) => user.email === email);

    if (hasUser?.length) {
      return "Already exist a account with this E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

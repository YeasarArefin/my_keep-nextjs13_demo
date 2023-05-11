'use client';

import useFirebase from '@/hooks/useFirebase';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const firebase = useFirebase();
   return <AuthContext.Provider value={firebase}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

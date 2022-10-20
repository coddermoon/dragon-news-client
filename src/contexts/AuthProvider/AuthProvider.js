import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup } from 'firebase/auth'


const auth = getAuth(app)

const createUser = (provider)=>{
  return  signInWithPopup(auth,provider)
}

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
   const user = {DisplayName:'moon'}

   const authInfo = {user,createUser}
    return (
        <AuthContext.Provider value= {authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
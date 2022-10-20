import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'


const auth = getAuth(app)

const createUser = (provider)=>{
  return  signInWithPopup(auth,provider)
}
// logout

const logout = ()=>{
    return signOut(auth)
}


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
    })
    return () => {
        unsubscribe();
    }
},[])
   

   const authInfo = {user,createUser,logout}
    return (
        <AuthContext.Provider value= {authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
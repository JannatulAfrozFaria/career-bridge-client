import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn= (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGitHub =() =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            
            //
            // const userEmail = currentUser?.email || user.email;
            // const loggedUser =  {email: userEmail};
            //

            setUser(currentUser);
            // console.log(currentUser);
            setLoading(false);

            //
            // if user exists, then issue a token
            // if(currentUser){
            //     axios.post('${import.meta.env.VITE_API_URL}/jwt', loggedUser, {withCredentials: true})
            //     .then(res=>{
            //         console.log( 'token response' , res.data);
            //     })
            // }
            // else{
            //     axios.post('${import.meta.env.VITE_API_URL}/logout', loggedUser, {withCredentials: true} )
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            // }
            //
        });
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo = {user,createUser, logIn,logOut,loading, signInWithGoogle,signInWithGitHub}
    return (
        <div>
            <AuthContext.Provider  value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
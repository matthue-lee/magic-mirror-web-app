'use client'
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import '../app/styles/globals.css'


const AuthContext = React.createContext()

export function useAuth() {
    return React.useContext(AuthContext)
}

export function AuthProvider( { children } ) {

    const[currentUser, setCurrentUser] = React.useState()
    const[loading, setLoading] = React.useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)

    }
    
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
        
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })    
        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (

        <AuthContext.Provider value={value}>
                    { !loading ? children : null }
        </AuthContext.Provider>


    )
}

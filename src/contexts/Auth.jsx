import { createContext, useEffect, useState } from "react";
import { authService } from "../service/AuthService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext()

export function AuthProvider(props) {
    
    const [authData, setAuthData] = useState(undefined)

    useEffect(() => {
        loadStorage()
    }, [])

    async function loadStorage() {
        const auth = await AsyncStorage.getItem('authData-storage')
        if (auth) {
            setAuthData(JSON.parse(auth))
        }
    }

    async function signIn(email, password) {
        try {
            const auth = await authService.signIn(email, password)
    
            setAuthData(auth)
            AsyncStorage.setItem('authData-storage', JSON.stringify(auth))
        } catch (error) {
            Alert.alert(error.message, 'Tente novamente')
        }
    }

    function signOut() {
        setAuthData(undefined)
        AsyncStorage.removeItem('authData-storage')
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}
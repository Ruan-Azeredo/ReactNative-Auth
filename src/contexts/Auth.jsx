import { createContext, useState } from "react";
import { authService } from "../service/AuthService";
import { Alert } from "react-native";

export const AuthContext = createContext()

export function AuthProvider(props) {
    
    const [authData, setAuthData] = useState({ token: undefined, email: undefined, name: undefined })

    async function signIn(email, password) {
        try {
            const auth = await authService.signIn(email, password)
    
            setAuthData(auth)
        } catch (error) {
            Alert.alert(error.message, 'Tente novamente')
        }
    }

    function signOut() {
        setAuthData(undefined)
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}
import { NavigationContainer } from '@react-navigation/native'
import { UserStack } from './UserStack';
import { AuthStack } from './AuthStack';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export function Router() {
    const { authData } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {authData != undefined ? <UserStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}
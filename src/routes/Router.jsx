import { NavigationContainer } from '@react-navigation/native'
import { UserStack } from './UserStack';
import { AuthStack } from './AuthStack';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';
import { AdminStack } from './AdminStack';

export function Router() {
    const { authData } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {authData == undefined ?
                <AuthStack />
                :
                authData.email == 'admin@gmail.com' ?
                    <AdminStack />
                    :
                    <UserStack />
            }
        </NavigationContainer>
    )
}
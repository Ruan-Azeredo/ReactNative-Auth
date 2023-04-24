import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "../../screens/SignIn"

const Stack = createNativeStackNavigator()

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Autenticação" component={SignIn}/>
        </Stack.Navigator>
    )
}
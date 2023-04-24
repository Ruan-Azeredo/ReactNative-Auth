import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/HomeScreen"
import { PerfilScreen } from "../../screens/PerfilScreen"

const Stack = createNativeStackNavigator()

export function UserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Perfil" component={PerfilScreen}/>
        </Stack.Navigator>
    )
}
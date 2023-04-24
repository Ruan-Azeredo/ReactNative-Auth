import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/HomeScreen"
import { PerfilScreen } from "../../screens/PerfilScreen"
import { AdminScreen } from "../../screens/AdminScreen"

const Stack = createNativeStackNavigator()

export function AdminStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Perfil" component={PerfilScreen}/>
            <Stack.Screen name="Administer" component={AdminScreen}/>
        </Stack.Navigator>
    )
}
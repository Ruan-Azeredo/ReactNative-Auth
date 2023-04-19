# ReactNative-Auth

Para iniciar o app:
```bash
npx expo start
```
## Dependencias

- React Navigation
```bash
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

## React Navigation
Um exemplo de como funciona o React Navigation, é o que está na documentação, que consiste em :
```JavaScript
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator()

export function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
```

O *createNativeStackNavigator()* contem 2 propriedades, **Screen** e **Navigator**, ambos são componentes usados para configurar o navegador. Os "Navigators" devem possuir as "Screen", que exibirão o nome da página e o componente referente a view, neste caso da seguinte forma:

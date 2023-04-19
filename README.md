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
<br/>
<br/>
![basic_stack_nav-7388d409c412d0c728a0903301338433](https://user-images.githubusercontent.com/90003046/233174819-459c6943-0cce-47e7-9f60-0565736695d3.png)

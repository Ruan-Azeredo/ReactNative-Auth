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

- Native Base
```bash
npm install native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2
```
### Setup
Adiconar o *NativeBaseProvider* em *App.js*
```JavaScript
export default function App() {
  return (
    <NativeBaseProvider>
      <Router/>
    </NativeBaseProvider>
  );
}
```
- Native Wind
```bash
npm add nativewind
npm add --dev tailwindcss
```
### Setup
Rodar *npx tailwindcss init* para criar o arquivo *tailwind.config.js*.
Adicionar diretorios que dererão receber acesso ao tailwind em *content: []* do tailwind.config:
```JavaScript
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
``` 

Adicionar dependencia no arquivo *babel.config.js*
```JavaScript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

- React Native Heroicons
```bash
npm i react-native-heroicons react-native-svg
```
*Ocorreu um erro com a versão do react-native-svg, o proprio terminal indicou utilzar esssa intalação para resolver tais pendencias: npx expo install react-native-safe-area-context@4.5.0 react-native-svg@13.4.0

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

Para fazer a navegação atravez de botões que levam a links de outras views, utilizar este esquema de estrutura:
- o 'Perfil' que é utilizado para indicar para qual view deve direcionar se refere ao *name* que está em **<Stack.Screen/>**
```JavaScript
import { useNavigation } from "@react-navigation/native"

const navigation = useNavigation()

<Button onPress={() => navigation.navigate('Perfil')}>Ir para Perfil<Button>
```

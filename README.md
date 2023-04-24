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
## Fluxo de Autenticação
### Context
Para a validação e global da aplicação, utiliza-se a senguinte logica. Existe um *Context* que envolve a aplicação, o qual fará a chamada da API para validar o usuario quando este faz o login. Sendo feito este login, a variavel **authData** será alterada para os dados do usuario. Desta forma, é possivel criar uma logica no *Router.jsx* que fará com que caso, o authData seja diferente de undefined, apenas "existirá" a rota da view de Login, caso contrario, será possivel acessar outra **Stack** de rotas.
A estrutura do context de Auth fica desta forma:
```JavaScript
import { createContext, useState } from "react";

export const AuthContext = createContext(props)

export function AuthProvider() {
    
    const [authData, setAuthData] = useState()

    async function signIn(email, password) {
        // chama API
        const auth = {infosDoUsuario: 'Infos'}

        setAuthData(auth)
    }

    function signOut() {
        // logout

        setAuthData(undefined)
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}
```
* É bem importante lembrar de envolve o APP dentro do **<AuthProvider/>**, para que o context funcione de forma global.
### Tela de login
Na tela de login, pegaremos os valores digitados nos Inputs
```JavaScript
const {signIn} = useContext(AuthContext)

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

return (
    <View>
        <Input placeholder="E-mail" onChangeText={setEmail}/>
        <Input placeholder="Senha" onChangeText={setPassword}/>

        <Button onPress={() => signIn(email, password)}>Login</Button>
    </View>
)
```
### Router
Dentro de *Router.jsx* deve existir a lógica que basicamente vai dizer quais rotas a aplicação tem acesso, dado sua autenticação. Caso a autenticação não esteja feita, ele tem acesso apenas a Stack de rotas de usuario não autenticado, que é apenas a rota de SignIn. Caso, ele esteja autenticados, ele possui acesso a Stack de rotas de usuario atenticados, que neste caso são as rotas de Home e Perfil.
```JavaScript
const { authData } = useContext(AuthContext)
return (
    <NavigationContainer>
        {authData != undefined ? <UserStack/> : <AuthStack/>}
    </NavigationContainer>
)
```
Caso venha a ser feito niveis de acesso mais complexos, cada nivel de acesso deve possuir sua propria Stack de rotas, e de acordo com o *type* que será recebido de authData, será definida em qual Stack de rotas o usuario estará depois de logado.

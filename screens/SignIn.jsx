import { Button, Input, KeyboardAvoidingView } from "native-base";
import { useContext, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, ScrollView, Platform } from "react-native";
import { AuthContext } from "../src/contexts/Auth";

export function SignIn() {

    const {signIn} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView className="flex-1 items-center justify-center bg-white"  behavior={Platform.OS == 'ios' ? 'padding' : 'height' } enabled>
                <Text>SignIn</Text>
                <View className="w-full mt-8 px-6">
                    <Input placeholder="E-mail" className="my-2" onChangeText={setEmail}/>
                </View>
                <View className="w-full mt-8 px-6">
                    <Input placeholder="Senha" className="my-2" onChangeText={setPassword}/>
                </View>
                <View className="flex-row w-full mb-20">
                    <Button className="mt-8 ml-6" onPress={() => signIn(email, password)}>Login</Button>
                    <Button className="mt-8 ml-6 mr-auto bg-yellow-500">Sign Up</Button>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
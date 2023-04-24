import { View } from "native-base";
import { Text } from "react-native";

export function AdminScreen() {
    return (
        <View className="h-full p-auto">
            <Text className="">Olá Admin</Text>
            <Text>Veja os usuarios abaixo</Text>
            <Text>Essa página só pode ser acessada pelo usario Admin</Text>
        </View>
    )
}
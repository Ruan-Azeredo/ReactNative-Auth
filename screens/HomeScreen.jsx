import { Button } from "native-base";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { ArrowRightOnRectangleIcon, Bars3Icon, BuildingStorefrontIcon, ChartBarSquareIcon, ClipboardDocumentListIcon, NewspaperIcon, UserIcon, WrenchScrewdriverIcon, XMarkIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from "../src/contexts/Auth";

export function HomeScreen() {

    const {signOut} = useContext(AuthContext)

    const navigation = useNavigation()

    const items = [
        { name: 'Dashboard', icon: <ChartBarSquareIcon color='white'/> },
        { name: 'Lojas', icon: <BuildingStorefrontIcon color='white'/> },
        { name: 'Anúncios', icon: <NewspaperIcon color='white'/> },
        { name: 'Meus Anúncios', icon: <ClipboardDocumentListIcon color='white'/> },
        {  name: 'Manutenções', icon: <WrenchScrewdriverIcon color='white'/> },
        { name: 'Seja Premium', icon: <StarIcon color='#E7EA58'/> }
        
    ]

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    let transition, yellow, selectedBg, selectedText
    nav ? transition = 'left-0' : transition = 'left-[-100%]'

    return (
        <View className='bg-white'>
            <View className='font-dmsans'>
                <View className={`bg-blue-400 fixed top-0 bg-azul w-[60%] h-full border-r border-white text-white font-semibold text-2xl ease-in-out duration-500 ${transition} z-40 flex flex-col`}>
                    <Text className='font-bold text-white text-3xl my-7 mb-10 flex justify-center'>Bike Mobi</Text>
                    <View>
                        {items.map(item => {

                            if ('Perfil' == item.name) {
                                selectedBg = "bg-white"
                                selectedText = "text-blue-400"
                            } else {
                                selectedBg = null
                                selectedText = "text-white"
                            }
                        
                            return(
                                <View key={item} className={`w-52 flex-row ${selectedBg} gap-2 items-center mx-4 p-2 rounded-md my-2`}>
                                    <View className={`w-7`}>{item.icon}</View>
                                    <Text className={`text-base font-medium ${selectedText}`}>{item.name}</Text>
                                </View>
                            )
                        })}
                        <Button className="bg-transparent" onPress={() => navigation.navigate('Perfil')}>
                            <View className={` w-52 flex flex-row text-white gap-2 items-center mx-4 p-2 rounded-md my-2`}>
                                <View className={`w-7`}><UserIcon color='white'/></View>
                                <Text className='text-base font-medium text-white'>Perfil</Text>
                            </View>
                        </Button>
                        <Button onPress={() => navigation.navigate('Administer')}><Text>Admin</Text></Button>
                        <Button className="bg-transparent" onPress={() => signOut()}>
                            <View className={`w-52 flex-row text-white gap-2 items-center mx-4 p-2 rounded-md my-2`}>
                                <View className={`w-7`}><ArrowRightOnRectangleIcon color='white'/></View>
                                <Text className='text-base font-medium text-white'>Logout</Text>
                            </View>
                        </Button>
                    </View>
                </View>
            </View>
            <Button className='block bg-transparent absolute right-4 top-4' onPress={handleNav}>
                {nav ?
                    <XMarkIcon className='my-auto h-8' color='blue' />
                    :
                    <Bars3Icon className='my-auto h-8' color='blue' />
                }
            </Button>
        </View>
    )
}
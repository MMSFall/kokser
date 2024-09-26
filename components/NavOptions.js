import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "12",
        title: "Réserver trajet",
        image: require('./resources/call_taxi.jpg'),
        screen: "MapScreen",
    },
    {
        id: "34",
        title: "Consulter X",
        image: require('./resources/taxi-passenger.jpg'),
        screen: "ConsultScreen",
    },
];

const NavOptions = () => {
        const navigation = useNavigation ();

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={item.image}  // Utilisation correcte du require
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text> {/* Ajout d'un titre sous l'image */}
                        <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;

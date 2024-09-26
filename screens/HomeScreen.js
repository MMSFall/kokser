import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
            style={{
                width:200,
                height:200,
                resizeMode:"contain",
            }}
            source={
               // uri: "https://image.shutterstock.com/image-vector/taxi-driver-african-american-man-260nw-1696839055.jpg",
               require('./resources/kokser.jpg')   
            }
        />


        <GooglePlacesAutocomplete
            placeholder="Vous partez dou?"
            styles={{
              container:{
                flex:0,
              },
              textInput:{
                fontSize:18,
              },
            }}

            query={{
              key: GOOGLE_MAP_APIKEY, 
              language: 'fr'
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
        />

        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    }
})
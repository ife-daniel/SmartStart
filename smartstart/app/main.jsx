import { View, Text, Dimensions, TextInput } from 'react-native';

import {SafeAreaView} from "react-native-safe-area-context";


import Button from "../components/button";
import InputField from "../components/textinput";

import Feather from '@expo/vector-icons/Feather';

import {router} from "expo-router";

export default function Main() {

  const {width, height} = Dimensions.get('screen')

  return (
    <SafeAreaView style={{
        flex: 1,
        paddingHorizontal: width*.06,
        backgroundColor:'white',
    }}>

    <View style={{marginTop:28}}>
        <Text>Login Screen</Text>
    </View>


    <InputField renderIcon icon={<Feather name="eye" size={24} color="black" />}/>

    <TextInput style={{
      backgroundColor:'lightgrey', height:58, borderRadius:24,
    }}/>

        <View>
          <Button text="Back" onPress={()=>{
             router.navigate("/auth/signup")
          }}/> 
    </View>



    </SafeAreaView>
  );
}
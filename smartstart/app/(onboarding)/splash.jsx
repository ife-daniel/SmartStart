import { Image } from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

import {router} from "expo-router";


export default function Signup() {

  const {width, height} = Dimensions.get('screen')


  return (
    <SafeAreaView
      style={{
        backgroundColor:"white",
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: width*.06,
        paddingVertical: height*.04,
      }}>   
      
      
      <Image source={require('../../assets/images/Logo + Name.png')} 
        // style={{width:240, height:240, alignSelf:'center', 
        // marginTop:18, borderRadius: 1000}} 
        />
      

      
      </SafeAreaView>
  );
}
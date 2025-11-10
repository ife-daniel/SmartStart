import { Text, View, TextInput, Image, Dimensions, 
  TouchableOpacity,ScrollView,StyleSheet } from "react-native";

import { useState } from "react";

import {SafeAreaView} from "react-native-safe-area-context";

import {useRouter} from "expo-router";

import Button from "../../components/button";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function ResetPassword() {

  const {height, width} = Dimensions.get('screen');
  
  const [password , setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const styles = StyleSheet.create({
    container:{
      width:'100%',
      marginVertical:height*.01,
    },
    label:{
      fontSize:12,
      marginBottom:4,
      color:'black',
      fontWeight:'semi-bold',
    },
    input:{
      padding:8,
      borderWidth:1.5,
      borderColor:'lightgrey',
      height:38,
      borderRadius:8,
      paddingRight:8,
      backgroundColor:'white',
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
    },
    eyeIcon:{
    position: 'absolute',
    right: 2,
    top: '36%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'transparent',
    borderRadius:8,
    padding: 8,
    },
    backButton: {
    position: 'absolute',
    left:'0%',
    top:'1%',
    transform: [{ translateX: -6 }],
    }
  })

    return(
        <SafeAreaView style={{ 
                backgroundColor:"white",
                flex: 1,
                justifyContent:'center',
                alignItems:'center',
                paddingHorizontal:width*.0015,
                paddingVertical: height*.04,
                }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        
            <TouchableOpacity 
                onPress={() => router.back()}
                style={styles.backButton}>
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
            </TouchableOpacity>
        
              <View style={{ width: "100%", height: "10%", alignItems: "center",
                 }}>
                <Image
                  source={require("../../assets/images/Logo + Name.png")}
                  style={{
                    width: Math.min(360, width * 0.6),
                    height: height * 0.04,
                    resizeMode: "contain",
                  }} />
              </View>
        
        <View style={{marginVertical:'40%'}}>

              <View style={styles.container}>
              <Text style={{fontWeight:'bold', fontSize:34, 
                textAlign:'center', marginVertical:12
                      }}>Reset Your Password</Text>
              </View>


              <View style={{...styles.container, marginTop:18}}>
                    <Text style={styles.label}>Old Password</Text>
                    <View style={styles.inputContainer}>
                    <TextInput secureTextEntry={!passwordVisible} 
                          style={{...styles.input, paddingRight:30}} 
                          onChangeText={(password)=>{setPassword(password)
                           }}/>
                  
                    <TouchableOpacity onPress={()=>{setPasswordVisible(!passwordVisible)}} 
                           style={styles.eyeIcon}>
                    <Feather 
                      name={passwordVisible ? "eye" : "eye-off"} 
                      size={18} 
                      color="black"/>
                    </TouchableOpacity>
                    </View>
              </View>
                  
                    <View style={styles.container}>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput secureTextEntry={!passwordVisible} 
                          style={styles.input} onChangeText={(password)=>{setPassword(password)
                           }}/>
                    </View>

                    <View style={styles.container}>
                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput secureTextEntry={!passwordVisible} 
                          style={styles.input} onChangeText={(password)=>{setPassword(password)
                           }}/>
                    </View>


                <Button buttonStyle={{width:'100%'}}text="Reset Password" onPress={()=>{
                router.replace('./resetsuccess')}}
                />
        </View>  
        </ScrollView>
        </SafeAreaView>
    );
}
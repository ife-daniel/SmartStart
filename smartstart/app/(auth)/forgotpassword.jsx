import { Text, View, TextInput, Image, Dimensions, Pressable, 
  Touchable, TouchableOpacity, 
TouchableWithoutFeedback, ScrollView, Alert, StyleSheet } from "react-native";

import { useState, useEffect } from "react";

import {SafeAreaView} from "react-native-safe-area-context";

import {useRouter} from "expo-router";

import Button from "../../components/button";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ForgotPassword() {

  const {height, width} = Dimensions.get('screen');
  
  const [email , setMail] = useState('');

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
    mailIcon:{
    position: 'absolute',
    left:0,
    bottom: '25%',
    transform: [{ translateY: 12 }],
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
                onPress={() => router.back('./login')}
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
        
        <View style={{marginVertical:'50%'}}>

              <View style={styles.container}>
              <Text style={{fontWeight:'bold', fontSize:34, 
                textAlign:'center', marginVertical:12
                      }}>Forgot Your Password</Text>
              <Text style={{fontWeight:'regular', fontSize:12, textAlign:'center'
                      }}>Enter your email address and we'll send you {"\n"}
                        instructions to reset your password.</Text>
              </View>


              <View style={{...styles.container, marginTop:38}}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput placeholderTextColor="lightgrey" placeholder="name@gmail.com" 
                              keyboardType="email-address" 
                              style={{...styles.input, paddingLeft:30}}
                              onChangeText={(mail)=>{setMail(mail)
                                }}/> 
                    <TouchableOpacity style={styles.mailIcon}>
                      <Ionicons name="mail" size={18} color="black" />
                    </TouchableOpacity>
                </View>


                <Button buttonStyle={{width:'100%'}}text="Submit" onPress={()=>{
                router.push('./resetpassword')}}
                />
        </View>  
        </ScrollView>
        </SafeAreaView>
    );
}
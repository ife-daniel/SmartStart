import { Text, View, TextInput, Image, Dimensions, Pressable, 
  Touchable, TouchableOpacity, 
TouchableWithoutFeedback, ScrollView, Alert, Platform, StyleSheet } from "react-native";

import { useState, useEffect } from "react";

import {SafeAreaView} from "react-native-safe-area-context";

import {router} from "expo-router";

import Button from "../../components/button";
import InputField from "../../components/textinput";

import Feather from '@expo/vector-icons/Feather';

export default function Signup() {

  const {width, height} = Dimensions.get('screen')

  const [Name , setName] = useState('');
  const [Role , setRole] = useState('');
  const [email , setMail] = useState('');
  const [password , setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

//   const validatePassword = (pass) => {
//   const minLength = 8;
//   const hasUpperCase = /[A-Z]/.test(pass);
//   const hasLowerCase = /[a-z]/.test(pass);
//   const hasNumber = /\d/.test(pass);
//   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

//   return (
//     pass.length >= minLength &&
//     hasUpperCase &&
//     hasLowerCase &&
//     hasNumber &&
//     hasSpecialChar
//   );
// };

  const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginTop:18,
  },
  label:{
    fontSize:12,
    marginBottom:4,
    color:'black',
    fontWeight:'semi-bold',
  },
  input:{
    borderWidth:1.5,
    borderColor:'black',
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
    right: 8,
    top: '40%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'transparent',
    padding: 4,
  }
})

  function greetBasedOnDevice() {
    Alert.alert(`${Platform.OS}`, `This is an ${Platform.OS} device`)
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor:"white",
        flex: 1,
        alignItems:'center',
        paddingHorizontal: width*.06,
        paddingVertical: height*.04,
      }}
    >
    <ScrollView>

      <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:32, textAlign:'center', marginVertical:12}}>Create an Account</Text>
      <Text style={{fontWeight:'medium', fontSize:12, textAlign:'center'}}>Already have an account? Log In</Text>

      <View style={{...styles.container, flexDirection:'row', justifyContent:'space-evenly', marginTop:38}} >     
      <Text style={{...styles.label, fontSize: 14}} >Admin</Text>
      <Text style={{...styles.label, fontSize: 14}} >Employee</Text>
      </View> 

      <View style={{...styles.container, marginTop:38}}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput keyboardType="email-address" style={styles.input}
                  onChangeText={(mail)=>{setMail(mail)
                   }}/>
      </View>

      <View style={styles.container}>
      <Text style={styles.label}>Company Name</Text>
      <TextInput keyboardType="default" style={styles.input} 
                  onChangeText={(text)=>{setName(text)
                  }}/>
      </View>

      <View style={styles.container}>
      <Text style={styles.label}>Role</Text>
      <TextInput keyboardType="default" style={styles.input} 
                  onChangeText={(text)=>{setRole(text)
                  }}/>
      </View>

// Password Field

      <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
      <TextInput secureTextEntry={!passwordVisible} 
            style={styles.input} onChangeText={(password)=>{setPassword(password)
             }}/>

      <TouchableOpacity onPress={()=>{setPasswordVisible(!passwordVisible)}} 
             style={styles.eyeIcon}>
      <Feather 
        name={passwordVisible ? "eye" : "eye-off"} 
        size={24} 
        color="black"/>
      </TouchableOpacity>
      </View>
      </View>

      <View style={styles.container}>
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput secureTextEntry={!passwordVisible} 
            style={styles.input} onChangeText={(password)=>{setPassword(password)
             }}/>

      {/* <TouchableOpacity onPress={()=>{setPasswordVisible(!passwordVisible)}} 
             style={{backgroundColor:'white', position:'absolute', bottom:12, right:12, padding:0}}>
      <Text style={{color:'black'}}>{passwordVisible ? 'Hide me' : 'Show me'}</Text>
      </TouchableOpacity> */}
      </View>



      <Button buttonStyle={{marginTop:28}} text="Sign Up" onPress={()=>{
    //      if (validatePassword(password)) 
    //       {Alert.alert(
    //     'Invalid Password',
    //     'Password must be at least 8 characters long and contain uppercase, lowercase, number and special characters.'
    //   );
    //   return;
    // }
         router.push('../main')
         }}/> 

      <Text style={{fontWeight:'regular', fontSize:18, textAlign:'center', marginTop:38
                   }}>Or continue with Google</Text>
      </View>
    
    </ScrollView>
    </SafeAreaView>
  );
}
// Alert.alert('Details', `First Name: ${firstName} \n Last Name: ${lastName} \n Email: ${email} \n Password: ${password}`)
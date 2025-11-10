import { Text, View, TextInput, Image, Dimensions, 
  TouchableOpacity, ScrollView, Alert, StyleSheet } from "react-native";

import { signupUser } from '../../src/services/auth';
import api from '../../src/api/client';

import { useState } from "react";

import {SafeAreaView} from "react-native-safe-area-context";

import {useRouter} from "expo-router";

import Button from "../../components/button";

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Signup() {

  const {width, height} = Dimensions.get('screen')

  const [Name , setName] = useState('');
  const [Role , setRole] = useState('');
  const [email , setMail] = useState('');
  const [password , setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // const handleSignup = async () => {
  //   if (!selectedRole) {
  //     Alert.alert('Error', 'Please select user (Admin or Employee)');
  //     return;
  //   }

  //   try {
  //     const response = await api.post('/users/register', {
  //       name,
  //       email,
  //       password,
  //       role: selectedRole,
  //     });

  //     if (response.status === 201) {
  //       Alert.alert('Success', 'Account created successfully! You can now log in.');
  //       if (selectedRole === 'admin') {
  //         router.replace('/(dashboard)/(admin)');
  //       } else {
  //         router.replace('/(dashboard)/(employee)');
  //       }
  //     } else {
  //       Alert.alert('Signup Failed', response.data?.message || 'Unexpected error');
  //     }
  //   } catch (error) {
  //     Alert.alert(
  //       'Error',
  //       error.response?.data?.message || 'Unable to sign up. Please try again later.'
  //     );
  //   }
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
  mailIcon:{
    position: 'absolute',
    left:0,
    bottom: '25%',
    transform: [{ translateY: 12 }],
    backgroundColor: 'transparent',
    borderRadius:8,
    padding: 8,
  },
  google:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'lightgrey',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '99%',
      height:48,
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowOffset: { width: -4, height: 2 },
      shadowRadius: 4,
      elevation: 8,
  }
})

  return (
    <SafeAreaView
      style={{
        backgroundColor:"white",
        flex: 1,
        alignItems:'center',
        paddingHorizontal: width*.0001,
        paddingVertical: height*.04
      }}
    >
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{ width:"100%", height:"10%", alignItems:"center"
         }}>
        <Image
          source={require("../../assets/images/Logo-and-Name.png")}
          style={{
            width: Math.min(360, width * 0.6),
            height: height * 0.04,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:34, textAlign:'center', 
        marginBottom:12}}>Create an Account</Text>

      <Text style={{fontWeight:'medium', fontSize:12, textAlign:'center'
            }}>Already have an account?<Text> </Text>
              <Text onPress={() => router.push('./login')}
                style={{fontSize:16, fontWeight:'bold', color: '#007AFF', 
                  textDecorationLine: 'underline'
                  }}>Log In</Text>
      </Text>

      <View style={{...styles.container, flexDirection:'row', justifyContent:'space-evenly', marginTop:24}}>
  <TouchableOpacity 
    onPress={() => setSelectedRole('admin')}
    style={{
      backgroundColor: selectedRole === 'admin' ? '#007AFF' : 'white',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#007AFF'
    }}
  >
    <Text style={{
      color: selectedRole === 'admin' ? 'white' : '#007AFF',
      fontSize: 14,
      fontWeight: '600'
    }}>
      Admin
    </Text>
  </TouchableOpacity>

  <TouchableOpacity 
    onPress={() => setSelectedRole('employee')}
    style={{
      backgroundColor: selectedRole === 'employee' ? '#007AFF' : 'white',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#007AFF'
    }}
  >
    <Text style={{
      color: selectedRole === 'employee' ? 'white' : '#007AFF',
      fontSize: 14,
      fontWeight: '600'
    }}>
      Employee
    </Text>
  </TouchableOpacity>
</View> 

      <View style={{...styles.container, marginTop:38}}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput placeholderTextColor="lightgrey" placeholder="name@gmail.com" keyboardType="email-address" style={{...styles.input, paddingLeft:30}}
                  onChangeText={(mail)=>{setMail(mail)
                   }}/> 
      <TouchableOpacity style={styles.mailIcon}>
        <Ionicons name="mail" size={18} color="black" />
      </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <Text style={styles.label}>Company Name</Text>
      <TextInput placeholderTextColor="lightgrey" placeholder="Doe Crpos" keyboardType="default" style={styles.input} 
                  onChangeText={(text)=>{setName(text)
                  }}/>
      </View>

      <View style={styles.container}>
      <Text style={styles.label}>Role</Text>
      <TextInput placeholderTextColor="lightgrey" placeholder="HR Manager" keyboardType="default" style={styles.input} 
                  onChangeText={(text)=>{setRole(text)
                  }}/>
      </View>

{/* Password Field */}

      <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
      <TextInput placeholderTextColor="lightgrey" placeholder="Johndoe1234#" secureTextEntry={!passwordVisible} 
            style={{...styles.input, paddingRight:30}} onChangeText={(password)=>{setPassword(password)
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
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput secureTextEntry={!passwordVisible} 
            style={styles.input} onChangeText={(password)=>{setPassword(password)
             }}/>
      </View>

      {/* <Button buttonStyle={{ marginTop: 28 }} text="Sign Up" onPress={handleSignup} /> */}



  <Button buttonStyle={{marginTop:28}} text="Sign Up" onPress={()=>{
    if (!selectedRole) {
      Alert.alert('Error', 'Please select user \n (Admin or Employee)');
      return;
    }
    if (selectedRole === 'admin') {
      router.replace('/(dashboard)/(admin)');
    } else {
      router.replace('/(dashboard)/(employee)');
    }
  }}/>

    {/* Divider with "or" */}
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 18,
        width: '100%',
        alignSelf: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#CFCFCF',
        }}
      />
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 14,
          color: '#A0A0A0',
          fontWeight: '500',
        }}
      >or </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#CFCFCF',
        }}
      />
    </View>
    
    
      <View style={{ alignItems: 'center', marginTop: 14, marginBottom:58}}>
      <TouchableOpacity
        onPress={() => Alert.alert('Info', 'Google Sign In pressed')}
        style={styles.google} >
         <Image source={require('../../assets/images/googleicon.png')}
        style={{width: 30, height: 30,
              marginRight:4, resizeMode: 'contain',
            }}/>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>
          Continue with Google</Text>
      </TouchableOpacity>
      </View>  

      </View>
    
    </ScrollView>
    </SafeAreaView>
  );
}

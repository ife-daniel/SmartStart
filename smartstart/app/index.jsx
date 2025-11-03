import { Text, View, Image, TextInput, Dimensions, Pressable, 
  Touchable, TouchableOpacity, 
TouchableWithoutFeedback, ScrollView, Alert, Platform, StyleSheet } from "react-native";

import { useState, useEffect } from "react";

import {SafeAreaView} from "react-native-safe-area-context";

import Button from "../components/button";

export default function Index() {

    const {width, height} = Dimensions.get('screen')
  // console.log(width, height)


  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('')
  const [email , setMail] = useState('')
  const [password , setPassword] = useState('')
  const [passwordVisble, setPasswordVisible] = useState(false)

  const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginBottom: 18,
  },
  label:{
    fontSize:16,
    marginBottom:6,
    color:'black',
  },
  input:{
    borderWidth:1.5,
    borderColor:'skyblue',
    height:38,
    borderRadius:24,
    paddingLeft:12,
    backgroundColor:'white',
  }
})

  // console.log('OS-' Platform.OS)
  function greetBasedOnDevice() {

    // Platform.OS === "ios" ? Alert.alert('hello', "Hello Ios") : Alert.alert('Hello',"Hello Android")


    // if(Platform.OS == 'android'){
    //   Alert.alert("Android", "This is an android device")
    // }

    // else if(Platform.OS == 'ios'){
    //    Alert.alert("IOS", "This is an ios device")
    // }

    // else{
    //   Alert.alert(`${Platform.OS}`, `This is an ${Platform.OS} device`)
    // }

    Alert.alert(`${Platform.OS}`, `This is an ${Platform.OS} device`)
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor:"lightblue",
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: width*.06,
      }}
    >
    <ScrollView>

      {/* <Text style={{color:'blue', fontSize:38}}>SmartStart</Text>
      <Text style={{fontSize:28, fontStyle: "italic"}}>Next Step</Text>

      <Image source={require('../assets/images/icon.png')} 
        style={{width:240, height:240, alignSelf:'center', 
        marginTop:18, borderRadius: 1000}} />

      <TextInput style={{
        borderWidth:1.5, borderColor:'skyblue', height:38, 
        borderRadius:24, paddingLeft:8, marginTop:18}} />

      <Pressable onPress={()=>{
        console.log("Ifeoluwa")
      }}style={{
        backgroundColor:'black', padding:8, width:'50%', 
        alignItems: 'center', borderRadius:24, marginTop:18}}>        
        <Text style={{color:'white', fontSize:18}}>Submit</Text>
      </Pressable>

      <TouchableOpacity onPress={()=>{
        // console.log("Next Step")
        Alert.alert('Good',"You have submitted successfully")
      }}style={{
        backgroundColor:'white', borderColor: "blue", borderWidth: 2, padding:8,
        width:'50%', alignItems: 'center', borderRadius:24, marginTop:18}}>
        
        <Text style={{color:'blue', fontSize:18}}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        // console.log("Next Step")
        greetBasedOnDevice()
      }}style={{
        backgroundColor:'blue', padding:8, width:'50%', 
        alignItems: 'center', borderRadius:24, marginTop:18}}>
        <Text style={{color:'white', fontSize:18}}>Sign In</Text>
      </TouchableOpacity> */}

      <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:24, textAlign:'center', marginVertical:30}}>SmartStart</Text>

      <View style={styles.container}>
        <Text style={styles.label}>First name</Text>
      <TextInput keyboardType="default"  style={styles.input} onChangeText={(text)=>{

          // console.log(text)
          setFirstName(text)
      }}/>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Last name</Text>
        <TextInput  style={styles.input} onChangeText={(text)=>{

          // console.log(text)
          setLastName(text)
        }}/>
      </View>



      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>


      <TextInput keyboardType="email-address"  style={styles.input} onChangeText={(mail)=>{
        setMail(mail)
      }}/>

      </View>



      <View style={styles.container}>
        <Text style={styles.label}>Password</Text>


      <TextInput secureTextEntry={!passwordVisible} style={styles.input} onChangeText={(password)=>{
        setPassword(password)
      }}/>

      <TouchableOpacity onPress={()=>{

        setPasswordVisible(!passwordVisble)


      }} style={{backgroundColor:'white', position:'absolute', top:45, right:25, padding:2}}>
        <Text style={{color:'black'}}>{passwordVisble ? 'Hide me' : 'Show me'}</Text>
      </TouchableOpacity>

      </View>
      <Button title="Register" onPress={()=>{
        Alert.alert('Details', `First Name: ${firstName} \n Last Name: ${lastName} \n Email: ${email} \n Password: ${password}`)}} /> 
      </View>
    
    </ScrollView>
    </SafeAreaView>
  );
}

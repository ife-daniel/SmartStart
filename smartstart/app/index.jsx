import { Text, View, Image, TextInput, Dimensions, Pressable, 
  Touchable, TouchableOpacity, 
TouchableWithoutFeedback, ScrollView, Alert, Platform } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {

  const {width, height} = Dimensions.get('screen')
  // console.log(width, height)
  // console.log('OS-' Platform.OS)
  function greetBasedOnDevice() {
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

      <Text style={{color:'blue', fontSize:38}}>SmartStart</Text>
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

      </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  );
}

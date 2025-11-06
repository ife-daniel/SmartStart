import { View, Text } from 'react-native';

import {SafeAreaView} from "react-native-safe-area-context";

import Button from "../../components/button";

import {router} from "expo-router";

export default function Login() {
  return (
    <SafeAreaView style={{
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:'white',
    }}>
    <View>
      <Text>Login Screen</Text>
    </View>

    <View>
          <Button text="Log In" onPress={()=>{
             router.push('../main')
          }}/> 
    </View>

    </SafeAreaView>
  );
}
import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
    <Stack screenOptions={{headerShown:false}}>  
  
      <Stack.Screen name="signup"
      options={{title:"Create Account"}}/>
      <Stack.Screen name="login"
      options={{title:"Sign In"}}/>
      <Stack.Screen name="forgotpassword"
      options={{title:"Forgot Password"}}/>
      <Stack.Screen name="resetpassword"
      options={{title:"Reset Password"}}/>
      <Stack.Screen name="resetsuccess"
      options={{title:"Password Reset Success"}}/>

    </Stack>
    );
}

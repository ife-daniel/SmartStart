import { Stack } from "expo-router";



const AuthLayout = () => {
    return (
    <Stack screenOptions={{headerShown:false,}}>  
  
      <Stack.Screen name="signup"
      options={{title:"Create Account",}}/>
      <Stack.Screen name="login"
      options={{title:"Sign In",}}/>

    </Stack>
    )
}

export default AuthLayout;
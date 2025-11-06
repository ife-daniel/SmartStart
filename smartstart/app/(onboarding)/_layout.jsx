import { Stack } from "expo-router";



const OnboardingLayout = () => {
    return (
    <Stack screenOptions={{headerShown:false,}}>  
  
      <Stack.Screen name="splash"
      options={{title:"Splash Screen",}}/>
      <Stack.Screen name="onboard1"
      options={{title:"Onboarding",}}/>
      <Stack.Screen name="onboard2"
      options={{title:"Onboarding",}}/>
      <Stack.Screen name="onboard3"
      options={{title:"Onboarding",}}/>

    </Stack>
    )
}

export default OnboardngLayout;
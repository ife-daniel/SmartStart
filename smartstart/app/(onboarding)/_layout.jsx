import { Stack } from "expo-router";

export default function OnboardingLayout() {

    return (
    <Stack screenOptions={{headerShown:false,}}>  
  

      <Stack.Screen name="onboard1"
      options={{title:"Onboarding",}}/>
      <Stack.Screen name="onboard2"
      options={{title:"Onboarding",}}/>
      <Stack.Screen name="onboard3"
      options={{title:"Onboarding",}}/>

    </Stack>
    );
}

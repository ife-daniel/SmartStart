import { useFonts } from "expo-font";
import { Stack } from "expo-router";


export default function RootLayout() {

  const [loaded, error] = useFonts({
    // 'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
    // 'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
    // 'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    // 'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
  });

  return (
    <Stack screenOptions={{headerShown:false}}>  
  
      <Stack.Screen name="main"
      options={{title:"Main",}}/>
      <Stack.Screen name="(auth)"
      options={{title:"Authentication",}}/>
      <Stack.Screen name="(onboarding)"
      options={{title:"Onboarding",}}/>

    </Stack>

)
}
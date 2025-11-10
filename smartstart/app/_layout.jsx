import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import Splash from './splash';
import {useEffect, useState} from 'react';

export default function RootLayout() {
    const [loaded, error] = useFonts({
      'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
      'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
      'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
      'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    });

    const [showSplash, setshowSplash] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setshowSplash(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }, []);

      if (!loaded) return null;

      if (showSplash) {
        return <Splash />;
      }

  return (
    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(dashboard)" />
      
    </Stack>
  );
}
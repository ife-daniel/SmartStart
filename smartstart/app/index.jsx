import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.replace('/(onboarding)/onboard1');
    }, 100);

    return () => clearTimeout(redirect);
  }, []);

  return <View />;
}
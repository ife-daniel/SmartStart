import { View, Text, Image, 
    TouchableOpacity, Dimensions, StyleSheet,} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function Onboarding1() {
  const router = useRouter();
  const { width, height } = Dimensions.get('screen');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topDots}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.imageWrap}>
        <Image
          source={require('../../assets/images/startstrong.png')}
          style={[styles.image, { width: Math.min(360, width * 0.8), height: height * 0.38 }]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>Smooth starts,{"\n"}Stronger teams</Text>
        <Text style={styles.subtitle}>
          Easy and effortless onboarding for every new hire and {"\n"} employer
        </Text>
      </View>

    <View style={{...styles.topDots, marginTop:48, marginBottom:18}}>
        <TouchableOpacity 
        onPress={() => router.push('/(onboarding)/onboard2')}
        style={styles.fab}
        >
        <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => router.replace('/(auth)/signup')}
        style={styles.skip}>
        <Text style={{      
            color: 'black',
            fontSize: 16,
        }}>Skip</Text>
        </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection:'column',
  },
  topDots: {
    marginTop: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: '#0A84FF',
    width: 12,
    height: 8,
    borderRadius: 4,
  },
  imageWrap: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
    paddingRight:20,
  },
  image: {

  },
  textWrap: {
    paddingHorizontal: 8,
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#9AA4AF',
    lineHeight: 20,
    textAlign:'center',
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 40,
    backgroundColor: '#0A84FF',
    width: 54,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#0A84FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
  },
  skip: {
    position: 'absolute',
    left: 18,
    bottom: 54,
  },
});
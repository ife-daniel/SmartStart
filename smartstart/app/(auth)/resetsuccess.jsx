import { Text, View, Image, Dimensions, StyleSheet } from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

import Button from "../../components/button";

import {useRouter} from "expo-router";

export default function ResetSuccess() {

  const {width, height} = Dimensions.get('screen');

  const router = useRouter();

  const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    flexDirection:'column',
  },
  imageWrap: {
    alignItems: 'center',
    width:'100%',
    paddingRight:20,
  },
  image: {

  },
  textWrap: {
    paddingHorizontal: 8,
    alignItems: 'center',
    marginTop:28,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 38,
    marginBottom: 12,
    textAlign:'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#9AA4AF',
    lineHeight: 20,
    textAlign:'center',
  }
});

    return(
        <SafeAreaView 
            style={{
            backgroundColor:"white",
            flex: 1,
            alignItems:'center',
            paddingHorizontal: width*.0001,
            paddingVertical: height*.04
            }}
        >
        
        <View style={{marginVertical:'30%'}}>
            <View style={styles.imageWrap}>
              <Image
                source={require('../../assets/images/passwordreset.png')}
                style={[styles.image, { width: Math.min(360, width *0.8), height: height * 0.24 }]}
                resizeMode="contain"
              />
            </View>
        
            <View style={styles.textWrap}>
              <Text style={styles.title}>Password Reset{"\n"}Successful!</Text>
              <Text style={styles.subtitle}>
                You can now use your new password to sign in to{"\n"} your account
              </Text>
            </View>


            <Button buttonStyle={{marginTop:38}} textStyle={{fontSize:18}} text="Sign In" onPress={()=>{
                router.replace('./login')
                }}
              />

        </View>
        
            
        
            </SafeAreaView>
    );
}
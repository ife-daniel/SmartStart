import { router } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminEmployees() {
  return (
    <SafeAreaView
    style={{ flex: 1, backgroundColor: 'white' }}
    >

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }} onPress={() => {
        router.replace('../../../../(auth)/login')}
      } >Employees</Text>
    </View>

    </SafeAreaView>
  );
}

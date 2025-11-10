import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminSettings() {
  return (
    <SafeAreaView>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Settings Screen</Text>
    </View>

    </SafeAreaView>
  );
}

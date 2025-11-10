import { View, Text } from "react-native";
import { router } from "expo-router";

export default function EmployeeProfile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }} onPress={() => {
              router.replace('../../../../(auth)/login')}}
              >Profile</Text>
    </View>
  );
}

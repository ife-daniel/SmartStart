import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EmployeeTabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#0077B6",
        tabBarInactiveTintColor: "lightgrey",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#E0E0E0",
          height: 70,
          padding:12
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "checklist") iconName = "checkmark-done-outline";
          else if (route.name === "uploads") iconName = "cloud-upload-outline";
          else if (route.name === "progress") iconName = "stats-chart-outline";
          else if (route.name === "profile") iconName = "person-outline";
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "regular",
          marginTop: 2,
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="checklist" options={{ title: "Checklist" }} />
      <Tabs.Screen name="uploads" options={{ title: "Uploads" }} />
      <Tabs.Screen name="progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

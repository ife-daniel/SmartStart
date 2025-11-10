import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AdminTabLayout() {
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
          else if (route.name === "employees") iconName = "body-outline";
          else if (route.name === "documents") iconName = "documents-outline";
          else if (route.name === "events") iconName = "calendar-outline";
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
      <Tabs.Screen name="employees" options={{ title: "Employees" }} />
      <Tabs.Screen name="documents" options={{ title: "Documents" }} />
      <Tabs.Screen name="events" options={{ title: "Events" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

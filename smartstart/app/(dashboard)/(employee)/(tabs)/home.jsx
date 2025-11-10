import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function EmployeeHome() {

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom:-34, backgroundColor: "white" }}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={28} color="#000" />
        <Pressable onPress={() => {router.push('/profile')}} >
        <Image
          source={require("../../../../assets/images/profileicon.png")}
          style={styles.avatar}
        /> </Pressable>
      </View>

      {/* Welcome Section */}
      <View style={{ marginTop: 12 }}>
        <Text style={styles.welcomeText}>Welcome Aisha!</Text>
        <Text style={styles.subText}>Let's get you settled in</Text>
      </View>

      {/* Onboarding Progress */}
      <View style={styles.progressCard}>
        <View style={styles.progressCircle}>
          <Text style={styles.progressPercent}>0%</Text>
          <Text style={styles.progressLabel}>Complete</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.progressTitle}>Onboarding Progress: 0% Complete</Text>
          <Text style={styles.progressDesc}>
            Better late than never! Complete your tasks to reach 100%.
          </Text>
        </View>
      </View>

      {/* Quick Info */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Quick Information</Text>

        <View style={styles.infoSection}>
          <Text style={styles.infoHeader}>Details</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Employee ID:</Text>
            <Text style={styles.infoValue}>121948ASH3</Text>
          </View>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>aishabello@gmail.com</Text>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>+2347082569056</Text>
          <Text style={styles.infoLabel}>Department:</Text>
          <Text style={styles.infoValue}>Logistics</Text>
          <Text style={styles.infoLabel}>Start Date:</Text>
          <Text style={styles.infoValue}>Oct 30, 2025</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoHeader}>Manager</Text>
          <Text style={styles.infoValue}>Olumide Adeboyega</Text>
          <Text style={styles.infoValue}>MideAdeboyega@gmail.com</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoHeader}>Support Team</Text>
          <Text style={styles.infoValue}>Hassan Ahmed</Text>
          <Text style={styles.infoValue}>Hassanmedwahid@gmail.com</Text>
          <Text style={styles.infoValue}>George Adekunle</Text>
          <Text style={styles.infoValue}>GeorgeAdekunle@gmail.com</Text>
          <Text style={styles.infoValue}>Okafor Benedicta</Text>
          <Text style={styles.infoValue}>BenekaFordicta@gmail.com</Text>
        </View>
      </View>

      {/* Upcoming Sessions */}
      <View style={styles.upcomingCard}>
        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
        {[
          { title: "Policy Induction", time: "10:00 AM - 10:25 AM" },
          { title: "Company's Culture Induction", time: "12:00 PM - 12:45 PM" },
          { title: "Maximizing Productivity", time: "2:00 PM - 3:00 PM" },
        ].map((session, index) => (
          <View key={index} style={styles.sessionItem}>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <Text style={styles.sessionTime}>{session.time}</Text>
          </View>
        ))}
      </View>

      {/* Checklist and Upload Section */}
      <View style={styles.actionCard}>
        <Feather name="check-square" size={24} color="#007AFF" />
        <View style={{ flex: 1 }}>
          <Text style={styles.actionTitle}>View Checklist</Text>
          <Text style={styles.actionDesc}>
            See your onboarding tasks and track your progress
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Open Checklist</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionCard}>
        <Feather name="file-text" size={24} color="#007AFF" />
        <View style={{ flex: 1 }}>
          <Text style={styles.actionTitle}>Upload Documents</Text>
          <Text style={styles.actionDesc}>
            Submit your required documents securely
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Upload Files</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    paddingHorizontal:20,
    paddingVertical:28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  subText: {
    color: "#777",
    fontSize: 14,
  },
  progressCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  progressPercent: {
    fontSize: 18,
    fontWeight: "700",
    color: "#007AFF",
  },
  progressLabel: {
    fontSize: 12,
    color: "#888",
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  progressDesc: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D8E5F8",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  infoSection: {
    marginTop: 10,
  },
  infoHeader: {
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 13,
    color: "#555",
  },
  infoValue: {
    fontSize: 13,
    color: "#000",
    marginBottom: 3,
  },
  upcomingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  sessionItem: {
    backgroundColor: "#EAF3FD",
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  sessionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  sessionTime: {
    fontSize: 12,
    color: "#555",
  },
  actionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D8E5F8",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
  },
  actionDesc: {
    fontSize: 13,
    color: "#555",
    marginBottom: 8,
  },
  actionButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});

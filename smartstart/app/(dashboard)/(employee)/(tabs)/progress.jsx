import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function EmployeeProgressTracker() {
  const milestones = [
    { id: 1, title: "Welcome Email Sent", date: "Oct 25, 2025", status: "complete" },
    { id: 2, title: "Documentation Submitted", date: "Oct 30, 2025", status: "complete" },
    { id: 3, title: "IT Equipment Assigned", date: "Oct 30, 2025", status: "complete" },
    { id: 4, title: "Complete All Tasks", date: "Nov 5, 2025", status: "pending" },
    { id: 5, title: "First Day Ready", date: "Nov 8, 2025", status: "pending" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="search-outline" size={22} color="#A0A0A0" style={styles.searchIcon} />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Ionicons name="chatbubble-outline" size={24} color="#000" style={{ marginLeft: 14 }} />
          <View style={styles.avatar} />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Progress Tracker</Text>
      <Text style={styles.subtitle}>Your onboarding journey so far</Text>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.badge}>
          <Feather name="award" size={20} color="#007AFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.progressTitle}>Great Progress!</Text>
          <Text style={styles.progressText}>Past the halfway mark — amazing progress!</Text>
        </View>
      </View>

      {/* Milestones */}
      <View style={styles.milestonesCard}>
        <Text style={styles.milestoneHeader}>Milestones</Text>
        {milestones.map((m, index) => (
          <View key={m.id} style={styles.milestoneRow}>
            <View
              style={[
                styles.statusCircle,
                { backgroundColor: m.status === "complete" ? "#28C76F" : "#CFCFCF" },
              ]}
            >
              {m.status === "complete" && <Feather name="check" size={14} color="#fff" />}
              {m.status === "pending" && <Text style={{ color: "#fff", fontWeight: "600" }}>{m.id}</Text>}
            </View>
            <View style={styles.milestoneText}>
              <Text style={styles.milestoneTitle}>{m.title}</Text>
              <Text style={styles.milestoneDate}>{m.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Pending Action */}
      <View style={styles.warningBanner}>
        <Ionicons name="alert-circle-outline" size={18} color="#C58B00" />
        <Text style={styles.warningText}>Complete Tax & Employment Forms</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA", paddingHorizontal: 20, paddingTop: 50 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#DDD", marginLeft: 12 },
  searchIcon: { backgroundColor: "#F3F3F3", padding: 10, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: "700", marginTop: 20, color: "#000" },
  subtitle: { color: "#666", marginBottom: 16 },
  progressCard: {
    flexDirection: "row",
    backgroundColor: "#E9F3FF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  badge: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 10,
    marginRight: 12,
  },
  progressTitle: { fontWeight: "700", color: "#007AFF" },
  progressText: { color: "#555", fontSize: 13, marginTop: 4 },
  milestonesCard: { backgroundColor: "#fff", borderRadius: 12, padding: 16 },
  milestoneHeader: { fontWeight: "700", fontSize: 16, marginBottom: 12 },
  milestoneRow: { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  statusCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  milestoneText: { flex: 1 },
  milestoneTitle: { fontWeight: "600", color: "#000" },
  milestoneDate: { color: "#777", fontSize: 13 },
  warningBanner: {
    backgroundColor: "#FFECC2",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  warningText: { marginLeft: 8, color: "#C58B00", fontWeight: "600" },
});

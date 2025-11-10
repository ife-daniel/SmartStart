import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router} from "expo-router";

export default function EmployeeChecklist() {
  // 🔹 Set deadline date/time
  const deadline = new Date("2025-11-13T18:00:00"); // adjust as needed

  const [timeLeft, setTimeLeft] = useState("");

  // 🔹 Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft("Deadline Passed");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days} days ${hours}:${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🔹 Example task data
  const tasks = [
    {
      id: 1,
      title: "Complete Employee Information Form",
      description: "Fill out all required personal and contact information",
      status: "Completed",
      color: "#25C685",
      date: "Oct 30, 2025",
      upload: false,
    },
    {
      id: 2,
      title: "Upload Government-issued ID",
      description: "Provide a clear copy of your driver's license or passport",
      status: "Completed",
      color: "#25C685",
      date: "Oct 30, 2025",
      upload: false,
    },
    {
      id: 3,
      title: "Upload Offer Letter",
      description: "Review and electronically sign your employment offer",
      status: "Processing",
      color: "#007AFF",
      date: "Oct 30, 2025",
      upload: true,
    },
    {
      id: 4,
      title: "Complete Tax Forms",
      description: "Fill out W-4 and state tax withholding forms",
      status: "Pending",
      color: "#A9A9A9",
      date: "Oct 30, 2025",
      upload: false,
    },
    {
      id: 5,
      title: "Complete Tax Forms",
      description: "Fill out W-4 and state tax withholding forms",
      status: "Pending",
      color: "#A9A9A9",
      date: "Oct 30, 2025",
      upload: false,
    },
    {
      id: 6,
      title: "Complete Tax Forms",
      description: "Fill out W-4 and state tax withholding forms",
      status: "Pending",
      color: "#A9A9A9",
      date: "Oct 30, 2025",
      upload: false,
    },
  ];

  const completedTasks = tasks.filter((t) => t.status === "Completed").length;

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom:-34, backgroundColor: "white" }}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Deadline Card */}
      <View style={styles.deadlineCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.deadlineTitle}>Deadline to complete all task:</Text>
          <Text style={styles.deadlineTime}>{timeLeft}</Text>
        </View>
        <Ionicons name="alert-circle-outline" size={32} color="#FF6B00" />
      </View>

      {/* Progress Text */}
      <Text style={styles.subtitle}>
        Complete all tasks to finish your onboarding
      </Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(completedTasks / tasks.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {completedTasks} of {tasks.length} completed
        </Text>
      </View>

      {/* Task List */}
      {tasks.map((task) => (
        <View key={task.id} style={[styles.taskCard, { borderColor: task.color }]}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View
              style={[styles.statusTag, { borderColor: task.color, backgroundColor: "#fff" }]}
            >
              <Text style={[styles.statusText, { color: task.color }]}>
                {task.status}
              </Text>
            </View>
          </View>

          <Text style={styles.taskDescription}>{task.description}</Text>

          <View style={styles.taskFooter}>
            {task.upload && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="cloud-upload-outline" size={14} color="gray" />
                <Text style={styles.uploadText}> Upload Required</Text>
              </View>
            )}
            <Text style={styles.taskDate}>{task.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical:28,
  },
  deadlineCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#FF6B00",
    backgroundColor: "#FFF8F3",
    borderRadius: 10,
    padding: 16,
  },
  deadlineTitle: {
    color: "#FF6B00",
    fontWeight: "500",
    fontSize: 14,
  },
  deadlineTime: {
    color: "#FF6B00",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "black",
    marginTop: 16,
    marginBottom: 8,
  },
  progressContainer: {
    width: "100%",
    marginBottom: 20,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  progressText: {
    textAlign: "right",
    marginTop: 4,
    fontSize: 12,
    color: "gray",
  },
  taskCard: {
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },
  statusTag: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
  },
  taskDescription: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
  taskFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  uploadText: {
    color: "gray",
    fontSize: 12,
  },
  taskDate: {
    color: "gray",
    fontSize: 12,
  },
});

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function EmployeelUpload() {
  const documents = [
    { title: "Government ID", file: "Drivers-license.pdf", size: "2.4 MB", time: "2 hours ago", status: "Pending Review", color: "#FFB84C" },
    { title: "Offer Letter", file: "Signed offer.pdf", size: "1.8 MB", time: "2 days ago", status: "Approved", color: "#28C76F" },
    { title: "Tax Form", file: "TaxForm.pdf", size: "890 KB", time: "2 hours ago", status: "Approved", color: "#28C76F" },
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
      <Text style={styles.title}>Document Uploads</Text>
      <Text style={styles.subtitle}>Upload your documents to complete this step</Text>

      {/* Upload Section */}
      <View style={styles.uploadCard}>
        <TouchableOpacity style={styles.chooseFileBtn}>
          <Text style={{ color: "#000", fontSize: 13 }}>Choose File</Text>
        </TouchableOpacity>
        <Text style={styles.uploadText}>Upload a scan or photo of your documents</Text>
      </View>

      <Text style={styles.supportText}>Supported document format: pdf and jpg</Text>

      {/* Document List */}
      <Text style={styles.sectionHeader}>Your Documents</Text>

      {documents.map((doc, index) => (
        <View key={index} style={[styles.docCard, { borderColor: doc.color }]}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={[styles.docTitle, { color: doc.color }]}>{doc.title}</Text>
            <Feather name="file-text" size={18} color={doc.color} />
          </View>
          <Text style={styles.docFile}>{doc.file}</Text>
          <Text style={styles.docDetails}>{doc.size}   ·   {doc.time}</Text>
          <Text style={[styles.statusText, { color: doc.color }]}>{doc.status}</Text>

          <View style={styles.docActions}>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="eye" size={16} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Feather name="download" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
  uploadCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    padding: 12,
  },
  chooseFileBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  uploadText: { color: "#666", fontSize: 13 },
  supportText: { color: "#B22222", fontSize: 12, marginVertical: 8 },
  sectionHeader: { fontWeight: "700", fontSize: 16, marginVertical: 10 },
  docCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 12,
    marginVertical: 8,
  },
  docTitle: { fontWeight: "700", marginBottom: 6 },
  docFile: { color: "#333", fontWeight: "500", marginBottom: 4 },
  docDetails: { fontSize: 12, color: "#777" },
  statusText: { fontWeight: "600", fontSize: 13, marginVertical: 6 },
  docActions: { flexDirection: "row", justifyContent: "flex-end", marginTop: 4 },
  iconBtn: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 8,
    padding: 6,
    marginLeft: 8,
  },
});

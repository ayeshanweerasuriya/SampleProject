import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CircleWithName = ({ iconName, iconText }) => {
  return (
    <View style={styles.circleContainer}>
      <View style={styles.circleIcon}>
        <MaterialCommunityIcons name={iconName} size={20} color="#fff" />
      </View>
      <Text>{iconText}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.circleScroller}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.rowContainer}>
          <CircleWithName iconName={"gate"} iconText="Main Gate" />
          <CircleWithName iconName={"boom-gate"} iconText="Second Gate" />
          <CircleWithName iconName={"gate-open"} iconText="Main Gate" />
          <CircleWithName
            iconName={"boom-gate-arrow-up"}
            iconText="Main Gate"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  circleScroller: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  circleContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  circleIcon: {
    color: "#fff",
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 50,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

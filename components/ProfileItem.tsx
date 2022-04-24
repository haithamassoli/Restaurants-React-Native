import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

interface ProfileItemProps {
  icon: string;
  title: string;
  subTitle: string;
  onPress: () => void;
}

const ProfileItem = ({ icon, title, subTitle, onPress }: ProfileItemProps) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Ionicons name={icon} color={Colors.gray} size={26} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <FontAwesome name="angle-right" color={Colors.gray} size={20} />
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: Colors.gray,
  },
});

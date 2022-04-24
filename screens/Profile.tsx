import { ScrollView, Text, StyleSheet, View } from "react-native";
import ProfileItem from "../components/ProfileItem";

const Profile = () => {
  function onPress() {
    console.log("onPress");
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>Account Setting</Text>
        <ProfileItem
          icon="person-outline"
          title="Profile Information"
          subTitle="Change your account information"
          onPress={onPress}
        />
        <ProfileItem
          icon="card-outline"
          title="Payment Information"
          subTitle="Payment Information"
          onPress={onPress}
        />
        <ProfileItem
          icon="star-outline"
          title="Adress"
          subTitle="Add your delivery location"
          onPress={onPress}
        />
        <ProfileItem
          icon="notifications-outline"
          title="Notifications"
          subTitle="Set notification you want to receive"
          onPress={onPress}
        />
        <ProfileItem
          icon="share-social-outline"
          title="Refer and Share App"
          subTitle="Change your account information"
          onPress={onPress}
        />
        <Text style={styles.headerTitle}>More</Text>
        <ProfileItem
          icon="information-circle-outline"
          title="FAQ"
          subTitle="Frequently asked questions"
          onPress={onPress}
        />
        <ProfileItem
          icon="help-buoy-outline"
          title="Support"
          subTitle="24/7 support"
          onPress={onPress}
        />
        <ProfileItem
          icon="star-outline"
          title="Rate Us"
          subTitle="Rate us on the app store"
          onPress={onPress}
        />
        <ProfileItem
          icon="log-out-outline"
          title="Logout"
          subTitle="Logout from your account"
          onPress={onPress}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
});

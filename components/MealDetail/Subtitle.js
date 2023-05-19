import { View, Text, StyleSheet } from "react-native";
function Subtitle({ name }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{name}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

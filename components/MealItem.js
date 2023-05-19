import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate('Detail', {
      mealId: id,
    });
  }
  return (
    
    <View style={styles.container}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>

        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    //ios
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

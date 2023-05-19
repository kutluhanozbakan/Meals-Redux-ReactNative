import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      numColumns={2} //sayfayı ikiye bölmek için
    ></FlatList>
  );
}
export default CategoriesScreen;

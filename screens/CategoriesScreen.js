import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";

function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
}

function CategoriesScreen(params) {
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

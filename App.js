import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import DetailScreen from "./screens/DetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

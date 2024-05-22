import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalSyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import { persistor, store } from "./store/redux/store";
import Loading from "./components/UI/Loading";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalSyles.colors.primaryColor },
        headerTintColor: GlobalSyles.colors.lightColor,
        tabBarStyle: { backgroundColor: GlobalSyles.colors.primaryColor },
        tabBarActiveTintColor: GlobalSyles.colors.lightColor,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            iconPressed={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalSyles.colors.primaryColor,
                },
                headerTintColor: GlobalSyles.colors.lightColor,
              }}
            >
              <Stack.Screen
                name="ExpenseOverview"
                component={ExpensesOverview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{
                  presentation: "modal",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

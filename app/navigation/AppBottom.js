import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Employer/Home";
import Profiler from "../screens/Employer/Profiler";

const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};

const AppBottom = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeBackgroundColor: "#7cd5f3",
      activeTintColor: "black",
      inactiveBackgroundColor: "#0f5e85",
      inactiveTintColor: "white",
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="home-variant-outline" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="jobs"
      component={EmptyScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon name="plus-circle-outline" size={32} color={color} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate("Add Job");
        },
      })}
    />
    <Tab.Screen
      name="ChatScreen"
      component={EmptyScreen}
      options={{
        tabBarLabel: "Chat",
        tabBarIcon: ({ size, color }) => (
          <Icon name="chat-outline" size={32} color={color} />
        ),
    
      }}
      listeners={({ navigation }) => ({
        tabPress: (event) => {
          event.preventDefault();
          navigation.navigate("Chat");
        },
      })}
    />
    <Tab.Screen
      name="Profile"
      component={Profiler}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ size, color }) => (
          <Icon name="account" size={32} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottom;

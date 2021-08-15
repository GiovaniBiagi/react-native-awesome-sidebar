import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  ProfileScreen,
  ActivityScreen,
  ListScreen,
  MessageScreen,
  ReportScreen,
  SignOutScreen,
  StatisticScreen,
} from "./src/screens";

import { SideBar } from "./src/components";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Profile"
        drawerContent={(props) => <SideBar {...props} />}
        screenOptions={{
          drawerType: "front",
          headerShown: false,
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: "rgba(212, 118, 207, 0.2)",
          drawerActiveTintColor: "#53115B",
        }}
      >
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="user" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            title: "Activities",
            drawerIcon: ({ color }) => (
              <Feather name="activity" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="List"
          component={ListScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="list" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Message"
          component={MessageScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="message-square" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Report"
          component={ReportScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="bar-chart" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Statistic"
          component={StatisticScreen}
          options={{
            title: "Statistics",
            drawerIcon: ({ color }) => (
              <Feather name="trending-up" size={16} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="SignOut"
          component={SignOutScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="log-out" size={16} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../view/login/index";
import Home from "../view/main_tabs/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "red",
        inactiveTintColor: "#A80002",

        style: {
          paddingHorizontal: moderateScale(10),
          height: verticalScale(60),
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              {color == "#1E1F20" ? (
                <IconHome
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconHome>
              ) : (
                <IconHome
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconHome>
              )}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Rates"
        component={Rates}
        options={{
          tabBarLabel: "Tarif",
          tabBarIcon: ({ color, size }) => (
            <>
              {color == "#1E1F20" ? (
                <IconRate
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconRate>
              ) : (
                <IconRate
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconRate>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          tabBarLabel: "Lacak",
          tabBarIcon: ({ color, size }) => (
            <>
              {color == "#1E1F20" ? (
                <IconTrack
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconTrack>
              ) : (
                <IconTrack
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconTrack>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <>
              {color == "#1E1F20" ? (
                <IconHistory
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconHistory>
              ) : (
                <IconHistory
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconHistory>
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <>
              {color == "#1E1F20" ? (
                <IconProfile
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconProfile>
              ) : (
                <IconProfile
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "stretch",
                  }}
                ></IconProfile>
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;

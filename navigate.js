import React from "react";
import Main from './components/Main';
import Profile from './components/Profile';
import { Image } from 'react-native';
import Post from './components/Post';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import IMAGES from "./assets/img";


const Tab = createBottomTabNavigator();

export default function Navigate(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle:{
                    backgroundColor: '#121212',
                }
                ,
                tabBarStyle: {
                  paddingHorizontal:10,
                  backgroundColor: '#121212',
                  borderTopWidth: 0,
              },
              tabBarLabelStyle: {
                color: '#BAF800',
                fontFamily: 'exo',
              }, 
            headerTitleStyle:{
                color: 'white',
            },
            })}>
               <Tab.Screen
          name="Main"
          component={Main}
          options={{
            title: "ГЛАВНАЯ",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.HOME}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#BAF800' : 'gray',
                }}
              />
              ),
              
          }}
        />

        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            title: "СОЗДАТЬ ПОСТ",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.POST}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#BAF800' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "ПРОФИЛЬ",
            tabBarIcon: ({ focused }) => (
              <Image
                source={IMAGES.PROFILE}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#BAF800' : 'gray',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
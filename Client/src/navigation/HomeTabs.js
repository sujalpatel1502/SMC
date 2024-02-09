import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/Home';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Create a stack navigator for the Members screen


const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          color: '#000',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route && route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route && route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={26} color={'#000'} />;
        },
      })}
    >
      <Tab.Screen  options={{ headerShown: false }} name="Home">
        {() => (
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={Home} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};


export default HomeTabs;

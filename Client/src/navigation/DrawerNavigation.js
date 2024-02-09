
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import HomeTabs from './HomeTabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { useSelector } from 'react-redux';
import { COLOR_DARK, COLOR_LIGHT } from '../constants/Color';
import UserProfileScreen from '../components/UserProfileScreen';
import EditProfileScreen from '../components/EditProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



const DrawerNavigation = () => {

  

  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor:COLOR.DARKBLUE,
      drawerActiveTintColor:COLOR.WHITE,
      drawerInactiveTintColor:COLOR.GRAY,
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }} initialRouteName="Home1">
        <Drawer.Screen
        name="Home1"
        component={HomeTabs}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
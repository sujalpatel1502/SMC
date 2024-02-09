
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailsCard from '../components/MemberDetailsData/DetailsData';
import AdminDetailCard from '../components/AdminDetailData/AdminDetailCard';
import { COLOR_DARK, COLOR_LIGHT } from '../constants/Color';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export const MembersList = () => {
    return (
        <View>
            <DetailsCard />
        </View>
    )
}
export const Admin = () => {
    return (
        <View>
            <AdminDetailCard/>
        </View>
    )
}
export const Committee = () => {
    return (
        <View>
            <DetailsCard />

        </View>
    )
}

export const TopNavigation = () => {
    const theme = useSelector(state => state.ThemeReducer);
    const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor:COLOR.DARKBLUE },
                tabBarLabelStyle: { fontSize: 14, color:COLOR.DARKBLUE, fontWeight: 'bold' },
                tabBarStyle:{marginTop:10}
            }}
        >
            <Tab.Screen name="memberlist" component={MembersList} />
            <Tab.Screen name="admin" component={Admin} />
            <Tab.Screen name="committee" component={Committee} />
        </Tab.Navigator>
    );
}
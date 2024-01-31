
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailsCard from '../components/DetailsData';
import AdminDetailCard from '../components/AdminDetailCard';

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
            <AdminDetailCard />
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
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#0F1035' },
                tabBarLabelStyle: { fontSize: 14, color: '#0F1035', fontWeight: 'bold' }
            }}
        >
            <Tab.Screen name="memberlist" component={MembersList} />
            <Tab.Screen name="admin" component={Admin} />
            <Tab.Screen name="committee" component={Committee} />
        </Tab.Navigator>
    );
}
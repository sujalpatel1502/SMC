

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/Splash/SplashScreen';
import AuthStack from './AuthStack';
import SocietyMembers from '../screens/Members/members';
import Visitor from '../screens/Visitor/Visitor';
import Notice from '../screens/NoticeBoard/NoticeBoard';
import Payment from '../screens/Payment/Payment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeTabs from './HomeTabs';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Service/api';
import { name } from '../redux/action';
import DrawerNavigation from './DrawerNavigation';
import SplashScreenHome from '../screens/Splash/SplashScreenHome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MembersStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Members" component={SocietyMembers} />
            {/* Add more screens if needed */}
        </Stack.Navigator>
    );
};
const VisitorStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Visitor" component={Visitor} />
            {/* Add more screens if needed */}
        </Stack.Navigator>
    );
};
const NoticeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="NoticeBoard" component={Notice} />
            {/* Add more screens if needed */}
        </Stack.Navigator>
    );
};
const PaymentStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />
            {/* Add more screens if needed */}
        </Stack.Navigator>
    );
};
const NavigationHandler = () => {
    const [allowUser, setAllowUser] = useState(null)
    const userName = useSelector(state=>state.dataReducer)
    const dispatch = useDispatch();

 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('token');
                const parsedData = JSON.parse(storedData);
                setAllowUser(parsedData);
                // console.log("asyncccccdataaaaaaaa",parsedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // useEffect(()=>{
    //     const fetchToken=async()=>{

    //         let response = await getData(allowUser);
    //         console.log("responsee------ of user dataaaa",response.data);
    //         // dispatch(name(response?.data?.data?.name))
            
    //     }
        


    //     fetchToken()
    // },[allowUser])
    // console.log("USerrrrrrrrr", allowUser,userName?.userData?.name);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' headerMode="none">


                {
                    userName?.userData !== null || allowUser !== null?
                        <>
                            {/* <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} /> */}
                            <Stack.Screen options={{ headerShown: false }} name="Splashh" component={SplashScreenHome} />
                            <Stack.Screen options={{ headerShown: false }} name="DrawerNavigation" component={DrawerNavigation} />
                            <Stack.Screen options={{ headerShown: false }} name="MembersStack" component={MembersStack} />
                            <Stack.Screen options={{ headerShown: false }} name="VisitorStack" component={VisitorStack} />
                            <Stack.Screen options={{ headerShown: false }} name="NoticeStack" component={NoticeStack} />
                            <Stack.Screen options={{ headerShown: false }} name="PaymentStack" component={PaymentStack} />
                        </>
                        :
                        <>
                            <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
                            <Stack.Screen options={{ headerShown: false }} name="AuthStack" component={AuthStack} />
                        </>
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationHandler

const styles = StyleSheet.create({})
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthStack from './src/navigation/AuthStack';
import HomeTabs from './src/navigation/HomeTabs';
import SplashScreen from './src/screens/Splash/SplashScreen';
import SocietyMembers from './src/screens/Members/members';
import Visitor from './src/screens/Visitor/Visitor';
import Notice from './src/screens/NoticeBoard/NoticeBoard';
import Payment from './src/screens/Payment/Payment';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/redux/store';


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

const App = () => {
  useEffect(async()=>{
    const getData=()=>{
        
    }

   
  },[])
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' headerMode="none">
          <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
          <Stack.Screen options={{ headerShown: false }} name="AuthStack" component={AuthStack} />
          <Stack.Screen options={{ headerShown: false }} name="HomeTabs" component={HomeTabs} />
          <Stack.Screen options={{ headerShown: false }} name="MembersStack" component={MembersStack} />
          <Stack.Screen options={{ headerShown: false }} name="VisitorStack" component={VisitorStack} />
          <Stack.Screen options={{ headerShown: false }} name="NoticeStack" component={NoticeStack} />
          <Stack.Screen options={{ headerShown: false }} name="PaymentStack" component={PaymentStack} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
};

export default App;

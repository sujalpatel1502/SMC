import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Auth/LoginScreen';
import SignUp from '../screens/Auth/SignUpScreen';
import Details from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      {/* <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;

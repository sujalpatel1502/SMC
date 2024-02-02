import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/redux/store';
import NavigationHandler from './src/navigation/NavigationHandler';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationHandler />
    </Provider>
  )
};

export default App;

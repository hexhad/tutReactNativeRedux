import React from 'react';
import { StatusBar } from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
       animated={true}
       backgroundColor="#fff"
       barStyle={'dark-content'}
      />
      <Home />
    </Provider>
  );
};


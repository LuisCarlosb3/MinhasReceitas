import React from 'react';
import {useScreens} from 'react-native-screens';
import MealsNavigator from './src/navigation/MealsNavigator';
useScreens();
const App = () => {
  return <MealsNavigator />;
};

export default App;

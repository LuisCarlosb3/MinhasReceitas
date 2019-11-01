import React from 'react';
import { useScreens } from 'react-native-screens';
import { StatusBar } from 'react-native';
import MealsNavigator from './src/navigation/MealsNavigator';
import Colors from './src/assets/constants/Colors';
useScreens();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primaryColor} barStyle='light-content' />
      <MealsNavigator />
    </>
  );
};

export default App;

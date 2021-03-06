import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoriteScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

FavoriteScreen.navigationOptions = navData => {
  return {
    headerLeft: (
      < HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => { navData.navigation.toggleDrawer() }} />
      </HeaderButtons>
    )
  }
}
export default FavoriteScreen;

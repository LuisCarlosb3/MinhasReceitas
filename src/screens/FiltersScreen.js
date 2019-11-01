import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../assets/constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
}


const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isZeroLactose, setIsZeroLactose] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lacotseFree: isZeroLactose,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isZeroLactose, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filtros disponíveis</Text>
      <FilterSwitch
        label='Sem Gluten'
        state={isGlutenFree}
        onChange={value => setIsGlutenFree(value)}
      />
      <FilterSwitch
        label='Vegano'
        state={isVegan}
        onChange={value => setIsVegan(value)}
      />
      <FilterSwitch
        label='Vegetariano'
        state={isZeroLactose}
        onChange={value => setIsZeroLactose(value)}
      />
      <FilterSwitch
        label='Sem lacotse'
        state={isVegetarian}
        onChange={value => setIsVegetarian(value)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

FiltersScreen.navigationOptions = navData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => { navData.navigation.toggleDrawer() }} />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    )
  }
}
export default FiltersScreen;

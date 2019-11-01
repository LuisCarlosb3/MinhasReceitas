import React from 'react';
import { Platform, Text } from 'react-native';
import Colors from '../assets/constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';

//configurações do stack
const stackNavigationOptions = {
  mode: 'modal',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular'
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}
//stack principal
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Categorias',
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: stackNavigationOptions,
  },
);
//stack de refeições favoritas
const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      headerTitle: 'Favoritos',
    },
  },
  MealDetail: MealDetailScreen,
}, {
  defaultNavigationOptions: stackNavigationOptions,
});

//configuração das tabs
const mealsScreenDetails = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'OpenSans-Regular' }}>Receitas!</Text> : 'Receutas',
      tabBarIcon: tabInfo => {
        return <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'OpenSans-Regular' }}>Favoritos!</Text> : 'Favoritos',
      tabBarIcon: tabInfo => {
        return <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
      },
    }
  },
}
//tab navigation
const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(mealsScreenDetails, {
    activeTintColor: Colors.accentColor,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor,
    },
  })
  : createBottomTabNavigator(mealsScreenDetails, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: {
          fontFamily: 'OpenSans-Regular'
        }
      }
    },
  });

//stack dos filtros
const FiltersNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
    navigationOptions: {
      headerTitle: 'Filtros'
    }
  },
}, {
  defaultNavigationOptions: stackNavigationOptions
});

//principal
const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Refeições',
    }
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filtros'
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'OpenSans-Regular',
    }
  }
});
export default createAppContainer(MainNavigator);

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoriteScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Tela de Favoritos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default FavoriteScreen;

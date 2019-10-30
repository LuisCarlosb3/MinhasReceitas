import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTitle = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={props.onSelect} style={{flex: 1}}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: 'black', //funciona apenas no IOS
    shadowOpacity: 0.25, //funciona apenas no IOS
    shadowRadius: 10, //funciona apenas no IOS
    shadowOffset: {width: 0, height: 2}, //funciona apenas no IOS
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoryGridTitle;

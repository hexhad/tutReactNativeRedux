import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles/Home.Styles';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions/countAction';

export default function Home() {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.centerme}>
      <Text>Current Value</Text>
      <Text style={styles.h_value}>{count}</Text>
      <View style={styles.h_row}>
        <TouchableOpacity onPress={handleDecrement} style={styles.h_button}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIncrement} style={styles.h_button}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

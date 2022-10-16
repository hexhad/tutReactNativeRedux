import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centerme: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  h_button: {
    color: '#000',
    backgroundColor: '#f7f7f7',
    width: Dimensions.get('window').width / 2 - 50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 40,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  h_row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  h_value: {
    fontSize: 50,
    marginVertical: 10,
  },
});

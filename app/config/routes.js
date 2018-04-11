import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home.js';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => null,
    },
  },
});

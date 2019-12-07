import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareReducerScreen from './src/screens/SquareReducerScreen';
import ContadorReducerScreen from './src/screens/CounterReducerScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import FlexboxScreen from './src/screens/FlexboxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Componente: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Contador: CounterScreen,
    ContadorReducer: ContadorReducerScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareReducerScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Flex: FlexboxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

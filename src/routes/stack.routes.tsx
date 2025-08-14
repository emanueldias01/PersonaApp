import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Skills from '../screens/Skills';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Skills" component={Skills} />
    </Stack.Navigator>
  );
}
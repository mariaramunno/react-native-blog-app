import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js';
import Details from './screens/Details.js';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
   return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
         <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
         <Stack.Screen name="Back" component={Home} options={{headerShown: false}}/>
         <Stack.Screen name="Details" component={Details} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#891446',
          },
          headerTintColor: '#fff',
          headerTitle:"",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
   </NavigationContainer>
  )
 }
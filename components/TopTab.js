import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import { Colors } from './styles';
import { View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const {secondary, primary, brand, tertiary} = Colors;
const TopTab = () => {
    return (
        <Tab.Navigator
        initialRouteName="Page1"
        screenOptions={{
        tabBarActiveTintColor: brand,
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: secondary },
        tabBarIndicatorStyle: {backgroundColor: tertiary}
      }}
      >
                <Tab.Screen name="Page 1" component={Page1} />
                <Tab.Screen name="Page 2" component={Page2} />
                <Tab.Screen name="Page 3" component={Page3} />
        </Tab.Navigator>
    )
}

export default TopTab;
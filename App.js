
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ItemsScreen from './screens/ItemsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
// import DetailScreen from './screens/DetailScreen';


function App() {
  // const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>

      {/* <Stack.Navigator>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
      </Stack.Navigator> */}

      <Tab.Navigator
          initialRouteName="Home"
          // tabBarOptions={{
          //   activeTintColor: 'tomato',
          //   inactiveTintColor: 'gray',
          //   tabBarStyle: {
          //     display: 'flex'
          //   },
          // }}
          screenOptions={screenOptions}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Items" component={ItemsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'About') {
      iconName = focused ? 'information-circle' : 'information-circle-outline';
    } else if (route.name === 'Items') {
      iconName = focused ? 'list' : 'list-outline';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default App;




import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const CustomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    )
}
export default CustomTab;

/*export default function App() {
=======

//export default CustomTab;

export default function App() {
>>>>>>> ba314d3e818e501daab167fdc63537c326a21a2b
  return (
    <NavigationContainer>
      <CustomTab />
    </NavigationContainer>
  );
}*/
/*https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ

https://reactnativeelements.com/docs/1.2.0/avatar

https://es.quish.tv/most-popular-react-native-card-components */

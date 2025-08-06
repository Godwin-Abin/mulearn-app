import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ setIsLoggedIn }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} setIsLoggedIn={setIsLoggedIn} />
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Other" component={OtherScreen}/>
    </Drawer.Navigator>
  );
}

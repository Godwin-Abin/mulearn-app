import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ setIsLoggedIn }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => (
        <CustomDrawer {...props} setIsLoggedIn={setIsLoggedIn} />
      )}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/home.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
              />
              <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>Home</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/profile.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>Profile</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          drawerLabel: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/leaderboard.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>Leaderboard</Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SpecialEventsScreen from '../screens/SpecialEventsScreen';

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
      >
        {(props) => <HomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Profile"
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
      >
        {(props) => <ProfileScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Leaderboard"
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
      >
        {(props) => <LeaderboardScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="SpecialEvents"
        options={{
          drawerLabel: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/web.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>Special Events</Text>
            </View>
          ),
        }}
      >
        {(props) => <SpecialEventsScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Drawer.Screen>
    </Drawer.Navigator>
    
  );
}

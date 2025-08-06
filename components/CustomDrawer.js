import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const { setIsLoggedIn } = props;

  const handleLogout = () => {
    // Clear session or token here if needed
    setIsLoggedIn(false);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Image source={require('../assets/mulearn.png')} style={styles.logo} />
      </View>
      <DrawerItemList {...props} />

      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ padding: 20, color: 'red' }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
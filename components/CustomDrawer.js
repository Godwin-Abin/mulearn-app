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
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => props.navigation.closeDrawer()}
      >
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
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
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 15,
    zIndex: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
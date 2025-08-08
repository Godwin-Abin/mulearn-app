import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import DrawerNavigator from './navigation/DrawerNavigator';
import { RoleProvider } from './context/RoleContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RoleProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthStack setIsLoggedIn={setIsLoggedIn} />
        )}
      </NavigationContainer>
    </RoleProvider>
  );
}

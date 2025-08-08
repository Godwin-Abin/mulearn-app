import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState('Manager');

  const updateRole = (newRole) => {
    setSelectedRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ selectedRole, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};

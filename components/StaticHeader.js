import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Animated, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRole } from '../context/RoleContext';

const StaticHeader = ({ title, showMenu = true, showBack = false, onBackPress, setIsLoggedIn }) => {
  const navigation = useNavigation();
  const { selectedRole, updateRole } = useRole();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [tempSelectedRole, setTempSelectedRole] = useState(selectedRole);

  const roles = [
    {
      id: 'creative',
      name: 'Creative',
      image: require('../assets/creative.webp')
    },
    {
      id: 'coder',
      name: 'Coder',
      image: require('../assets/coder.webp')
    },
    {
      id: 'maker',
      name: 'Maker',
      image: require('../assets/maker.webp')
    },
    {
      id: 'manager',
      name: 'Manager',
      image: require('../assets/manager.webp')
    }
  ];

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleProfilePress = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleHomePress = () => {
    setDropdownVisible(false);
    navigation.navigate('Home');
  };

  const handleLogoutPress = () => {
    setDropdownVisible(false);
    if (setIsLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigation.navigate('Login');
    }
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleTitlePress = () => {
    setRoleModalVisible(true);
    setTempSelectedRole(selectedRole);
  };

  const handleRoleSelect = (role) => {
    setTempSelectedRole(role.name);
  };

  const handleSubmitRole = () => {
    updateRole(tempSelectedRole);
    setRoleModalVisible(false);
  };

  const closeRoleModal = () => {
    setRoleModalVisible(false);
    setTempSelectedRole(selectedRole);
  };

  // Update tempSelectedRole when selectedRole changes
  useEffect(() => {
    setTempSelectedRole(selectedRole);
  }, [selectedRole]);

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {showBack ? (
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        ) : showMenu ? (
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      
      <View style={styles.centerSection}>
        <TouchableOpacity onPress={handleTitlePress} style={styles.titleContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{selectedRole}</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>
          <Image source={require('../assets/avatar.jpg')} style={styles.profileImage} />
        </TouchableOpacity>
        
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={handleHomePress}>
              <Text style={styles.dropdownText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={handleLogoutPress}>
              <Text style={[styles.dropdownText, { color: 'red' }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Overlay to close dropdown when tapping outside */}
      {dropdownVisible && (
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={closeDropdown}
        />
      )}

             {/* Role Selection Modal */}
       <Modal
         animationType="slide"
         transparent={true}
         visible={roleModalVisible}
         onRequestClose={closeRoleModal}
       >
         <View style={styles.modalOverlay}>
           <View style={styles.roleModalContainer}>
             {/* Modal Header */}
             <View style={styles.roleModalHeader}>
               <Text style={styles.roleModalTitle}>Choose Your Path</Text>
               <TouchableOpacity style={styles.closeButton} onPress={closeRoleModal}>
                 <Text style={styles.closeButtonText}>✕</Text>
               </TouchableOpacity>
             </View>

             {/* Scrollable Content */}
             <ScrollView 
               style={styles.roleScrollContainer}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={styles.roleScrollContent}
             >
               {/* Role Cards */}
               <View style={styles.roleCardsContainer}>
                 {roles.map((role) => (
                   <TouchableOpacity
                     key={role.id}
                     style={[
                       styles.roleCard,
                       tempSelectedRole === role.name && styles.selectedRoleCard
                     ]}
                     onPress={() => handleRoleSelect(role)}
                   >
                     <Image source={role.image} style={styles.roleImage} />
                     <Text style={styles.roleName}>{role.name}</Text>
                     {tempSelectedRole === role.name && (
                       <View style={styles.roleTags}>
                         {role.name === 'Creative' && (
                           <>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Animation</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Graphic Design</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Illustration</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Photography</Text>
                             </View>
                           </>
                         )}
                         {role.name === 'Coder' && (
                           <>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Web Development</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Mobile Apps</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Data Science</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Machine Learning</Text>
                             </View>
                           </>
                         )}
                         {role.name === 'Maker' && (
                           <>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Industrial</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Hardware</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>IoT</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Robotics</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Civil</Text>
                             </View>
                           </>
                         )}
                         {role.name === 'Manager' && (
                           <>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Project Management</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Operations</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>Product Management</Text>
                             </View>
                             <View style={styles.roleTag}>
                               <Text style={styles.roleTagText}>HR</Text>
                             </View>
                           </>
                         )}
                       </View>
                     )}
                   </TouchableOpacity>
                 ))}
               </View>
             </ScrollView>

             {/* Submit Button */}
             <View style={styles.submitButtonContainer}>
               <TouchableOpacity style={styles.submitButton} onPress={handleSubmitRole}>
                 <Text style={styles.submitButtonText}>Submit</Text>
               </TouchableOpacity>
             </View>
           </View>
         </View>
       </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    top: 10,
    zIndex: 1000,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 2,
    alignItems: 'flex-start',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'relative',
  },
  titleContainer: {
    padding: 4,
  },
  titleBox: {
    backgroundColor: '#4264ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: -50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: '#666',
  },
  profileContainer: {
    padding: 2,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  dropdown: {
    position: 'absolute',
    top: 45,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 120,
    zIndex: 1001,
    alignItems: 'center',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 999,
  },

  // Role Modal Styles
  roleModalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  roleModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  roleModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roleScrollContainer: {
    flex: 1,
  },
  roleScrollContent: {
    paddingBottom: 20,
  },
  roleCardsContainer: {
    padding: 20,
  },
  roleCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedRoleCard: {
    borderColor: '#4264ff',
    borderWidth: 2,
  },
  roleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  roleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  roleTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  roleTag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  roleTagText: {
    fontSize: 12,
    color: '#666',
  },
  submitButtonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#4264ff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StaticHeader;

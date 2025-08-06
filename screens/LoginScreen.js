import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

export default function LoginScreen({ navigation, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter your email and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Graphics */}
      <View style={styles.topImages}>
        <Image source={require('../assets/ufo.webp')} style={styles.topLeft} />
        <Image source={require('../assets/planet.webp')} style={styles.topRight} />
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/mulearn.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to continue to your account</Text>

      {/* Input Fields */}
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Email or Muid"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={{ paddingHorizontal: 10 }}
          >
            <Text>{hidePassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Links */}
      <View style={styles.linkRow}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot <Text style={{ fontWeight: 'bold' }}>Password?</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
          <Text style={styles.link}>Login with OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signinButton} onPress={handleLogin}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.signupRow}>
        <Text style={styles.signup}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.signup, { fontWeight: 'bold', marginLeft: 4 }]}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Image */}
      <View style={styles.bottomContainer}>
        <Image source={require('../assets/rocket.webp')} style={styles.bottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  topImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    marginTop: 0,
  },
  topLeft: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 0,
    marginTop: 0,
  },
  topRight: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 0,
    marginTop: 0,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputSection: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#f7f7fa',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    marginBottom: 20,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25,
  },
  link: {
    color: '#555',
    fontSize: 14,
  },
  signinButton: {
    backgroundColor: '#4e5cf0',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#4e5cf0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  signinText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  signupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signup: {
    fontSize: 14,
    color: '#555',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  bottom: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
});

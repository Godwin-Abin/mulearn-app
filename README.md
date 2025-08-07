# MuLearn App

A React Native mobile application built with Expo for the MuLearn platform, featuring leaderboards, profile management, and learning analytics.

## 🚀 Features

- **Leaderboard System**: Monthly and Overall karma rankings for Students, Campus, and Zonal levels
- **Profile Management**: Comprehensive user profiles with karma history, achievements, and activity tracking
- **Navigation**: Drawer navigation with custom header components
- **Responsive Design**: Clean, modern UI with proper styling and animations
- **Tab-based Interface**: Dynamic content switching with smooth transitions


## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Navigation**: Navigation library for React Native
- **React Native Elements**: UI component library

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Expo CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

## 🚀 Getting Started

### 1. Install Expo CLI

```bash
npm install -g @expo/cli
```

### 2. Clone the Repository

```bash
git clone <repository-url>
cd mulearn-app
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Install Required Packages

```bash
# React Navigation
npm install @react-navigation/native @react-navigation/drawer @react-navigation/native-stack

# Expo dependencies
npx expo install react-native-screens react-native-safe-area-context

# Drawer navigation dependencies
npx expo install react-native-gesture-handler react-native-reanimated

# Additional UI components
npx expo install @expo/vector-icons
```

### 5. Start the Development Server

```bash
npx expo start
```

### 6. Run on Device/Simulator

- **iOS Simulator**: Press `i` in the terminal or scan QR code with Expo Go app
- **Android Emulator**: Press `a` in the terminal or scan QR code with Expo Go app
- **Physical Device**: Install Expo Go app and scan the QR code

## 📁 Project Structure

```
mulearn-app/
├── assets/                 # Images, fonts, and static files
├── components/            # Reusable UI components
│   ├── StaticHeader.js   # Custom header component
│   └── CustomDrawer.js   # Drawer navigation component
├── navigation/           # Navigation configuration
│   └── DrawerNavigator.js
├── screens/             # Application screens
│   ├── HomeScreen.js    # Main dashboard
│   ├── ProfileScreen.js # User profile screen
│   └── LeaderboardScreen.js # Leaderboard screen
├── App.js              # Main application component
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
└── README.md         # Project documentation
```

## 🔧 Configuration

### Expo Configuration (app.json)

```json
{
  "expo": {
    "name": "MuLearn App",
    "slug": "mulearn-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

## 📦 Available Scripts

```bash
# Start the development server
npm start
# or
npx expo start

# Start with clear cache
npx expo start -c

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android

# Build for production
npx expo build:android
npx expo build:ios

# Eject from Expo (if needed)
npx expo eject
```

## 🔍 Development Tips

### Hot Reload
- Enable hot reload in Expo Go app for instant code updates
- Use `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS) to save and see changes

### Debugging
- Use React Native Debugger for better debugging experience
- Enable remote debugging in Expo Go app
- Use `console.log()` for debugging (visible in Expo CLI terminal)

### Performance
- Use `React.memo()` for expensive components
- Implement proper list rendering with `FlatList` or `SectionList`
- Optimize images and assets

## 🐛 Common Issues & Solutions

### Metro Bundler Issues
```bash
# Clear Metro cache
npx expo start -c

# Reset cache completely
npx expo r -c
```

### Navigation Issues
```bash
# Reinstall navigation dependencies
npm install @react-navigation/native @react-navigation/drawer
npx expo install react-native-screens react-native-safe-area-context
```

### iOS Build Issues
```bash
# Clean iOS build
cd ios && rm -rf build && cd ..
npx expo run:ios
```

### Android Build Issues
```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
npx expo run:android
```

## 📱 Platform-Specific Notes

### iOS
- Requires macOS for development
- Install Xcode from App Store
- iOS Simulator included with Xcode

### Android
- Install Android Studio
- Set up Android SDK
- Configure environment variables (ANDROID_HOME)

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
API_BASE_URL=your_api_url_here
API_KEY=your_api_key_here
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the [Expo documentation](https://docs.expo.dev/)

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [React Navigation](https://reactnavigation.org/) for navigation solutions
- [React Native](https://reactnative.dev/) for the cross-platform framework

---

**Happy Coding! 🚀**

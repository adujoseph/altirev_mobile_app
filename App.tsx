/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/routes';
import SplashScreen from './src/screens/onboarding/splashscreen/SplashScreen';



const App = () => {
  return (
    <SafeAreaView style={{flexGrow:1}}>
      <Routes />
    </SafeAreaView>
  );
}

export default App;

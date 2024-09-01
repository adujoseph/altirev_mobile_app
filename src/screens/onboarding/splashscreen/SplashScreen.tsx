import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Screens from '../../../components/Screens';
import { welcome, login, dashboard } from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SplashScreenProps {}

const SplashScreen = () => {
  const navigation: NavigationProp< any | string >= useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firstTimer()
    const checkTokenAndNavigate = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');

        if (token) {
          navigation.navigate(dashboard);
        } else if (isFirstTime === 'true') {
          navigation.navigate(welcome);
        } else {
          navigation.navigate(login);
        }
      } catch (error) {
        console.error('Error checking token and navigating:', error);
        navigation.navigate(login);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(checkTokenAndNavigate, 3000);
  }, []);

  const firstTimer = async () => {
    await AsyncStorage.setItem('isFirstTime','true')
  }

  if (isLoading) {
    return (
      <Screens>
        <View style={styles.container}>
          <Text style={{ fontSize: 40, color: 'green' }}>SplashScreen</Text>
        </View>
      </Screens>
    );
  } else {
    return null; // Or render an error screen if needed
  }
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './stackRoute/StackRoutes';
import { navigationRef } from '../../RootNavigation';
import AuthContextProvider from '../context/AuthProvider'


const Routes = () => {

  return (
    <AuthContextProvider>
      <NavigationContainer ref={navigationRef} screenOptions={{ gestureEnabled: false }}>
        <StackRoute />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default Routes;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }

})

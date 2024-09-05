import React, { useState } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// import {BottomTabNav} from './bottomRoute';
import { authSuccess, dash, forgotpass, login, otpScreen, register1, register2, result_upload, splashscreen, video_recording, welcome } from '../../utils/constants';
import SplashScreen from '../../screens/onboarding/splashscreen/SplashScreen';
import WelcomeScreen from '../../screens/onboarding/welcome/Welcome';
import LoginScreen from '../../screens/authentication/login/Login';
import Register1Screen from '../../screens/authentication/register1/Register1';
import Register2Screen from '../../screens/authentication/register2/Register2';
import AuthSuccessScreen from '../../screens/authentication/authSuccess/AuthSuccess';
import OtpScreen from '../../screens/authentication/otpscreen/otpScreen';
import ForgotPasswordScreen from '../../screens/authentication/forgotpassword/ForgotPassword';
import BottomNav from '../bottomTabRoute/bottomTabRoute'
import ResultUploadScreen from '../../screens/uploadResult/resultUploadScreen/ResultUploadScreen';
import CameraRecordScreen from '../../screens/common/Camera/CameraRecording';





const RootStack = createStackNavigator();

//TODO: Good to have, dissolve screen:
const horizontalAnimation = {
  gestureDirection: 'horizontal',
  gestureEnabled: false,
};

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={splashscreen}>
    <RootStack.Screen
      name={splashscreen}
      component={SplashScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />

    <RootStack.Screen
      name={welcome}
      component={WelcomeScreen}
      options={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: '#000',
      }}
    />
    <RootStack.Screen
      name={login}
      component={LoginScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerShown: false,
        headerLeft: () => null,
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />
    <RootStack.Screen
      name={register1}
      component={Register1Screen}
      options={{
        headerTransparent: true,
        headerShown: false,
        headerTitle: '',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />
    <RootStack.Screen
      name={register2}
      component={Register2Screen}

      options={{
        headerTransparent: true,
        headerShown: false,
        headerTitle: '',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />
    <RootStack.Screen
      name={otpScreen}
      component={OtpScreen}
      options={{
        headerTransparent: true,
        headerTitle: 'Verification',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />
    <RootStack.Screen
      name={forgotpass}
      component={ForgotPasswordScreen}
      options={{
        headerTransparent: true,
        headerTitle: 'Forget Password',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />
    <RootStack.Screen
      name={authSuccess}
      component={AuthSuccessScreen}
      options={{
        headerTransparent: true,
        headerShown: false,
        headerTitle: '',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />

    <RootStack.Screen
      name={result_upload}
      component={ResultUploadScreen}
      options={{
        headerTransparent: true,
        headerTitle: 'Result Upload History',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />

<RootStack.Screen
      name={video_recording}
      component={CameraRecordScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
    />

    <RootStack.Screen
      name={dash}
      options={{
        headerShown: false,
        headerTransparent: false,
        headerTitle: '',
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#F6F6F6',
        },
      }}
      component={BottomNav}
    />

  </RootStack.Navigator>
);

export default RootStackScreen;

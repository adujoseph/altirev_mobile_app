import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthCommonScreen from '../../../components/AuthCommonScreen'
import CustomTextField from '../../../components/CustomTextField'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { login, otpScreen, register1, register2 } from '../../../utils/constants'

const Register1 = () => {
  const navigation: any = useNavigation()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');


  const loginUserRoute = () => {
    navigation.navigate(login)
  }

  const completeReg = () => {
    navigation.navigate(otpScreen)
  }
  return (
    <AuthCommonScreen title='Create Account' description='Kindly enter your details to create an account with us.'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <CustomTextField label='First Name' onChangeText={setFirstname} />
        <CustomTextField label='Last Name' onChangeText={setLastname} />
        <CustomTextField label='Username' onChangeText={setLastname} />
        <CustomTextField label='Email Address' onChangeText={setLastname} />
        <CustomTextField label='Phone Number' onChangeText={setLastname} />
        <View style={{ marginTop: 10 }}>
          <CustomButton title='Continue' onPress={completeReg} />
          <Pressable style={{ alignSelf: 'center', marginTop: 15 }} onPress={loginUserRoute}>
            <CustomText>Already have an account? <CustomText style={{ color: colors.primary }}>Login</CustomText></CustomText>
          </Pressable>
        </View>
      </View>

    </AuthCommonScreen>
  )
}

export default Register1
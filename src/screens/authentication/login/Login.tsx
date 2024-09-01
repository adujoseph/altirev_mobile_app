import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthCommonScreen from '../../../components/AuthCommonScreen'
import CustomTextField from '../../../components/CustomTextField'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { dash, forgotpass, register1 } from '../../../utils/constants'
import PersonIcon from '../../../assets/svg/PersonIcon'
import EyeOpenIcon from '../../../assets/svg/EyeOpenIcon'
import PersonCardIcon from '../../../assets/svg/PersonCardIcon'

const Login = () => {
  const navigation: any = useNavigation()
  const [username, setUsername] = useState('');

  const forgotPasswordRoute = () => {
    navigation.navigate(forgotpass)
  }

  const registerUserRoute = () => {
    navigation.navigate(register1)
  }

  const handleSubmit = () => {
    navigation.navigate(dash)
  }


  return (
    <AuthCommonScreen title='Welcome back!' description='Enter your login details below.'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <CustomTextField label='Username' onChangeText={setUsername} icon={<PersonCardIcon />} />
        <CustomTextField label='Password' onChangeText={setUsername} secureTextEntry={true} icon={<EyeOpenIcon />} password/>
        <Pressable style={{justifyContent:'flex-end', alignSelf:'flex-end'}} onPress={forgotPasswordRoute }>
          <CustomText style={{ color: colors.primary }}>Forgot Password ?</CustomText>
        </Pressable>
        <View style={{marginTop: 40}}>
          <CustomButton title='Login' onPress={handleSubmit} />
          <Pressable style={{alignSelf:'center', marginTop: 15}} onPress={registerUserRoute}>
            <CustomText>Don’t have an account? <CustomText style={{ color: colors.primary }}>Sign Up</CustomText></CustomText>
          </Pressable>
        </View>
      </View>

    </AuthCommonScreen>
  )
}

export default Login

const styles = StyleSheet.create({})
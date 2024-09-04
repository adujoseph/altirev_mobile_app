import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthCommonScreen from '../../../components/AuthCommonScreen'
import CustomTextField from '../../../components/CustomTextField'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { login, otpScreen, register1, register2 } from '../../../utils/constants'
import { isValidEmail } from '../../../utils/validateEmail'
import { initiateOtp } from '../../../services/authentication'

const Register1 = () => {
  const navigation: any = useNavigation()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)


  const loginUserRoute = () => {
    navigation.navigate(login)
  }

  const completeReg = async () => {
    if (!firstname) {
      setErrorMessage('Enter first name')
      return
    }
    if (!lastname) {
      setErrorMessage('Enter last name')
      return
    }
    if (!username) {
      setErrorMessage('Enter username')
      return
    }
    if (!email || !isValidEmail(email)) {
      setErrorMessage('Enter valid email address')
      return
    }
    if (!phone) {
      setErrorMessage('Enter phone number')
      return
    }
    setLoading(true)
    const payload = {
      firstname,
      lastname,
      username,
      email,
      phone
    }
    const response = await initiateOtp({email, phone: `+234${Number(phone)}`})
    if(response.status === 200){
      navigation.navigate(otpScreen, { payload })
    }else {
      console.log('Error: ',response.data.message)
      setErrorMessage(response.data.message)
    }
    setLoading(false)
  }
  return (
    <AuthCommonScreen title='Create Account' description='Kindly enter your details to create an account with us.'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <CustomTextField label='First Name' onChangeText={setFirstname} />
        <CustomTextField label='Last Name' onChangeText={setLastname} />
        <CustomTextField label='Username' onChangeText={setUsername} />
        <CustomTextField label='Email Address' onChangeText={setEmail} />
        <CustomTextField label='Phone Number' onChangeText={setPhone} />
        <View style={{ marginTop: 10 }}>
          {errorMessage ? <View><CustomText style={{color:'red', textAlign:'center', paddingBottom: 5}}>{errorMessage}</CustomText></View>: null}
          <CustomButton title='Continue' onPress={completeReg} loading={loading} />
          <Pressable style={{ alignSelf: 'center', marginTop: 15 }} onPress={loginUserRoute}>
            <CustomText>Already have an account? <CustomText style={{ color: colors.primary }}>Login</CustomText></CustomText>
          </Pressable>
        </View>
      </View>
    </AuthCommonScreen>
  )
}

export default Register1
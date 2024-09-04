import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
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
import { userLogin } from '../../../services/authentication'
import Authcontext from '../../../context/Authcontext'

const Login = () => {
  const navigation: any = useNavigation()
  const {myRole, setMyRole, setMyUser} = useContext(Authcontext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const forgotPasswordRoute = () => {
    navigation.navigate(forgotpass)
  }

  const registerUserRoute = () => {
    navigation.navigate(register1)
  }

  const handleSubmit = async () => {
    if (!email) {
      setErrorMessage('Enter Email Address')
      return
    }
    if (!password) {
      setErrorMessage('Enter Password')
      return
    }
    setLoading(true)
    const payload = {
      email,
      password
    }
    const response = await userLogin(payload);
    if(response.status === 200){
      setMyRole(response.data.user.role)
      setMyUser(response.data.user)
      //setMyRole(response.data)
     navigation.navigate(dash)
    }else {
      setErrorMessage(response.data.message)
    }
    setLoading(false)
  }


  return (
    <AuthCommonScreen title='Welcome back!' description='Enter your login details below.'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <CustomTextField label='Email' onChangeText={setEmail} icon={<PersonCardIcon />} />
        <CustomTextField label='Password' onChangeText={setPassword} secureTextEntry={true} icon={<EyeOpenIcon />} password />
        <Pressable style={{ justifyContent: 'flex-end', alignSelf: 'flex-end' }} onPress={forgotPasswordRoute}>
          <CustomText style={{ color: colors.primary }}>Forgot Password ?</CustomText>
        </Pressable>
        <View style={{ marginTop: 40 }}>
          <CustomButton title='Login' onPress={handleSubmit} loading={loading} />
          <Pressable style={{ alignSelf: 'center', marginTop: 15 }} onPress={registerUserRoute}>
            <CustomText>Don’t have an account? <CustomText style={{ color: colors.primary }}>Sign Up</CustomText></CustomText>
          </Pressable>
        </View>
      </View>

    </AuthCommonScreen>
  )
}

export default Login

const styles = StyleSheet.create({})
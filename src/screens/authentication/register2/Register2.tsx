import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, FC, useContext } from 'react'
import AuthCommonScreen from '../../../components/AuthCommonScreen'
import CustomTextField from '../../../components/CustomTextField'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { authSuccess, login, otpScreen, register1 } from '../../../utils/constants'
import CustomSelectInput from '../../../components/CustomSelectInput'
import ChevronLeftIcon from '../../../assets/svg/ChevronLeftIcon'
import { countries } from '../../../utils/countries'
import { states } from '../../../utils/states'
import { registerUser } from '../../../services/authentication'
import Authcontext from '../../../context/Authcontext'

interface OtpScreenProps {
  route: any; //TODO: fix better type
}

const genders = [
  { id: '1', name: 'Male', label: 'Male', value: 'Male' },
  { id: '2', name: 'Female', label: 'FeMale', value: 'FeMale' },
]

const Register2: FC<OtpScreenProps> = ({ route }) => {
  const {myRole, setMyRole, setMyUser} = useContext(Authcontext)
  const { payload } = route.params
  const navigation: any = useNavigation()
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [gender_, setGender] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit = async () => {
    if (password !== password2) {
      setErrorMessage('Password does not match')
      return
    }
    setLoading(true)
    const payload_ = {
      "email": payload.email,
      "password": password,
      "firstName": payload.firstname,
      "lastName": payload.lastname,
      "username": payload.username,
      "phoneNumber": `+234${Number(payload.phone)}`,
      "gender": gender_,
      "state": state,
      "country": country,
      "paymentRef": "",
      "planId": ""
    }
    const response = await registerUser(payload_)
    if (response.status === 200) {
      setMyRole(response.data.user.role)
      setMyUser(response.data.user)
      // navigation.navigate(register2, {payload})
      navigation.navigate(authSuccess)
    } else {
      setErrorMessage(response.data.message)
    }
    setLoading(false)
  }

  const selectGender = (arg: any) => {
    setGender(arg)
  }

  return (
    <AuthCommonScreen title='Location & Password' description='Complete your registration by setting your location and creating a secure password'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <View style={styles.gender}>
          {genders.map((gender) => (
            <Pressable style={[styles.genderItem, { backgroundColor: gender_ === gender.value ? "lightgray" : "white" }]} key={gender.id} onPress={() => selectGender(gender.value)}><CustomText>{gender.name}</CustomText></Pressable>
          ))}
        </View>
        <CustomSelectInput value={country} label='Country' options={countries} onValueChange={(value) => setCountry(value)} placeholder='Select Country' />
        <CustomSelectInput value={state} label='State' options={states} onValueChange={(value) => setState(value)} placeholder='Select State' />
        <CustomTextField label='Password' onChangeText={setPassword} />
        <CustomTextField label='Re-enter Password' onChangeText={setPassword2} />
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable style={{ flexGrow: 0.1 }} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon />
          </Pressable>
          <View style={{ flexGrow: 0.9 }}>
            <CustomButton title='Sign Up' onPress={handleSubmit} loading={loading} />
          </View>

        </View>
      </View>

    </AuthCommonScreen>
  )
}

export default Register2

const styles = StyleSheet.create({
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderItem: {
    flexGrow: 0.5,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    height: 50
  }
})
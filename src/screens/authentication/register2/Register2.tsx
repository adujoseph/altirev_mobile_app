import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthCommonScreen from '../../../components/AuthCommonScreen'
import CustomTextField from '../../../components/CustomTextField'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { login, otpScreen, register1 } from '../../../utils/constants'
import CustomSelectInput from '../../../components/CustomSelectInput'
import ChevronLeftIcon from '../../../assets/svg/ChevronLeftIcon'

const Register2 = () => {
  const navigation: any = useNavigation()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');


  const loginUserRoute = () => {
    navigation.navigate(login)
  }

  const genders = [
    { id: '1', name: 'Male', label: 'Male', value:'Male' },
    { id: '2', name: 'Female', label: 'FeMale', value:'FeMale'  },


  ]

  const handleRouteOtp = () => {
    navigation.navigate(otpScreen)
  }
  return (
    <AuthCommonScreen title='Location & Password' description='Complete your registration by setting your location and creating a secure password'>
      <View style={{ flexGrow: 1, padding: 20 }}>
        <View style={styles.gender}>
          {genders.map((gender) => (
            <Pressable style={styles.genderItem}><CustomText>{gender.name}</CustomText></Pressable>
          ))}
        </View>
        <CustomSelectInput label='Country' options={genders} onValueChange={(value) => console.log(value)} placeholder='Select Country'/>
        <CustomSelectInput label='State' options={genders} onValueChange={(value) => console.log(value)} placeholder='Select State'/>
        <CustomTextField label='Password' onChangeText={setLastname} />
        <CustomTextField label='Re-enter Password' onChangeText={setLastname} />
        <View style={{ marginTop: 10, flexDirection:'row', justifyContent:'space-between' }}>
          <Pressable style={{flexGrow: 0.1}} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon />
          </Pressable>
          <View  style={{flexGrow: 0.9}}>
          <CustomButton title='Sign Up' onPress={handleRouteOtp}/>
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
    justifyContent:'space-between',
    marginBottom: 10,
  },
  genderItem: {
    flexGrow: 0.5,
  margin: 2,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    height: 50
  }
})
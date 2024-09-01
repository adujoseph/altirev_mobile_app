import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CustomTextField from '../../components/CustomTextField'
import CustomButton from '../../components/CustomButton'
import PersonCardIcon from '../../assets/svg/PersonCardIcon'
import PersonIcon from '../../assets/svg/PersonIcon'
import EmailIcon from '../../assets/svg/EmailIcon'
import ScreenHeader from '../../components/ScreenHeader'

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ScreenHeader title='Profile' />
      <KeyboardAvoidingView>
        <View>
          <CustomTextField label='First name' onChangeText={(val) => console.log(val)} underline icon={<PersonIcon />}/>
          <CustomTextField label='Last name' onChangeText={(val) => console.log(val)} underline icon={<PersonIcon />}/>
          <CustomTextField label='Email ' onChangeText={(val) => console.log(val)} underline icon={<EmailIcon />}/>
          <CustomTextField label='Username' onChangeText={(val) => console.log(val)} underline icon={<PersonCardIcon />} />
          <CustomTextField label='Phone number' onChangeText={(val) => console.log(val)} underline/>
          <CustomTextField label='State' onChangeText={(val) => console.log(val)} underline/>
          <CustomTextField label='LG ' onChangeText={(val) => console.log(val)} underline/>
          <CustomTextField label='Ward' onChangeText={(val) => console.log(val)} underline/>
          <CustomTextField label='Polling Unit' onChangeText={(val) => console.log(val)} underline/>
          <CustomTextField label='Password' onChangeText={(val) => console.log(val)}/>
        </View>
        <CustomButton title='Log out' />
      </KeyboardAvoidingView>
      </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{},
  content:{
    paddingHorizontal: 20
  },
  wrapper: {},
})
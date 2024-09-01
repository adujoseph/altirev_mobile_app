import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Screens from '../../../components/Screens'
import CustomText from '../../../components/CustomText'
import CustomTextField from '../../../components/CustomTextField';
import CustomButton from '../../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmailIcon from '../../../assets/svg/EmailIcon';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('')
  return (
   <Screens>
    <SafeAreaView style={styles.container}>
      <CustomText style={styles.text}>For verification purposes, please provide the email address you used to create your account</CustomText>
   <View style={{marginTop: 20}}>
   <CustomTextField label='Email Address' onChangeText={setEmail} placeholder='you@gmail.com' icon={<EmailIcon />}/>
   </View>
     

      <CustomButton title='Continue'/>
    </SafeAreaView>
   </Screens>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  container: {marginTop: 60, paddingHorizontal: 20},
  text: {
    color:'#656565',
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400'
  }
})
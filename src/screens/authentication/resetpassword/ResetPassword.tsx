import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screens from '../../../components/Screens'
import CustomText from '../../../components/CustomText'
import CustomTextField from '../../../components/CustomTextField';
import CustomButton from '../../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  return (
    <Screens>
      <SafeAreaView style={styles.container}>
        <CustomText style={styles.text}>Strengthen your account! Update your password for added security</CustomText>
        <View style={{ marginTop: 20 }}>
          <CustomTextField label='Password' onChangeText={setPassword} secureTextEntry/>
          <CustomTextField label='Re-enter Password' onChangeText={setRePassword} secureTextEntry/>
        </View>


        <CustomButton title='Continue' />
      </SafeAreaView>
    </Screens>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
  container: { marginTop: 60, paddingHorizontal: 20 },
  text: {
    color: '#656565',
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400'
  }
})
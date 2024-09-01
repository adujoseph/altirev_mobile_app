import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Screens from '../../../components/Screens'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'

const AuthSuccess = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Your account has been successfully created')
  },[])
  return (
  <Screens>
    <SafeAreaView style={styles.container}>
      <View>
        <CustomText style={styles.text}>{message}</CustomText>
      </View>
      <CustomButton title='Dashboard' />
    </SafeAreaView>
  </Screens>
  )
}

export default AuthSuccess

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color: colors.primary,
    fontSize: 32,
    lineHeight: 38.4,
    textAlign:'center',
    fontWeight: '700'
  }
})
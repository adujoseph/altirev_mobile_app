import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screens from '../../../components/Screens'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'
import CustomText from '../../../components/CustomText'
import { colors } from '../../../utils/theme'
import SuccessIcon from '../../../assets/svg/SuccessIcon'
import { useNavigation } from '@react-navigation/native'
import { dash } from '../../../utils/constants'

const AuthSuccess = () => {
  const navigation: any = useNavigation()
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Your account has been created successfully')
  }, [])

  const handleRouter = () => {
    navigation.navigate(dash)
  }
  return (
    <Screens>
      <SafeAreaView style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.8 }}>
          <View>
            <SuccessIcon />
          </View>

          <View style={{ paddingVertical: 20 }}>
            <CustomText style={styles.text}>{message}</CustomText>
          </View>


        </View>
        <View style={{ flex: 0.2 }}>
          <CustomButton title='Dashboard' onPress={handleRouter} />
        </View>

      </SafeAreaView>
    </Screens>
  )
}

export default AuthSuccess

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // justifyContent:'center',
    // alignItems: 'center'
  },
  text: {
    color: colors.primary,
    fontSize: 32,
    lineHeight: 38.4,
    textAlign: 'center',
    fontWeight: '700'
  }
})
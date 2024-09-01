import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/ScreenHeader'
import CustomText from '../../components/CustomText'
import CustomButton from '../../components/CustomButton'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title='Notification' />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomText>3 unread notification</CustomText>
        <CustomButton title='Mark all as read' inverted style={{ padding: 10 }} />
      </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})
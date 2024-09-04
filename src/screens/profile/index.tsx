import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import CustomTextField from '../../components/CustomTextField'
import CustomButton from '../../components/CustomButton'
import PersonCardIcon from '../../assets/svg/PersonCardIcon'
import PersonIcon from '../../assets/svg/PersonIcon'
import EmailIcon from '../../assets/svg/EmailIcon'
import ScreenHeader from '../../components/ScreenHeader'
import Authcontext from '../../context/Authcontext'


const ProfileScreen = () => {
  const { myUser } = useContext(Authcontext)
  console.log({ myUser })
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ScreenHeader title='Profile' />

      <Pressable onPress={() => console.log('ooooo')}
        style={{
          width: 100,
          height: 100, borderRadius: 50, alignSelf: 'center'
        }}>
        <Image
          source={require('../../assets/images/profileImage.png')}
          resizeMethod='resize'
          //style={styles.avatar}
          onLoadStart={() => console.log('Image is loading')}
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.log('Failed to load image')}
        />
      </Pressable>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
          <CustomTextField value={myUser.firstName} label='First name' onChangeText={(val) => console.log(val)} underline icon={<PersonIcon />} />
          <CustomTextField value={myUser.lastName} label='Last name' onChangeText={(val) => console.log(val)} underline icon={<PersonIcon />} />
          <CustomTextField value={myUser.email} label='Email ' onChangeText={(val) => console.log(val)} underline icon={<EmailIcon />} />
          <CustomTextField value={myUser.username} label='Username' onChangeText={(val) => console.log(val)} underline icon={<PersonCardIcon />} />
          <CustomTextField value={myUser.phoneNumber} label='Phone number' onChangeText={(val) => console.log(val)} underline />
          <CustomTextField value={''} label='State' onChangeText={(val) => console.log(val)} underline />
          <CustomTextField label='LG ' onChangeText={(val) => console.log(val)} underline />
          <CustomTextField label='Ward' onChangeText={(val) => console.log(val)} underline />
          <CustomTextField label='Polling Unit' onChangeText={(val) => console.log(val)} underline />
          <CustomTextField label='Password' onChangeText={(val) => console.log(val)} />
        </View>
        <CustomButton title='Log out' style={{ backgroundColor: 'red' }} />
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 20
  },
  wrapper: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 15,
  },
})
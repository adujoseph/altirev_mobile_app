import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileImageIcon from '../../../assets/svg/ProfileImageIcon'
import CustomText from '../../../components/CustomText'

const HeaderSection = () => {

  const userType = [
    {id:1, name:'Patriot'},
    {id:2, name:'Agent'}
  ]
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', paddingHorizontal: 20, marginTop: 30, marginBottom: 10}}>
      <View style={{flexDirection:'row'}}>
        <ProfileImageIcon />
        <View>
          <CustomText>Hello</CustomText>
          <CustomText>Jordan</CustomText>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        {userType.map((user) => (
           <Pressable key={user.id}><CustomText>{user.name}</CustomText></Pressable>
        ))}
       
      </View>
    </View>
  )
}

export default HeaderSection

const styles = StyleSheet.create({})
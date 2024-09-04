import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ProfileImageIcon from '../../../assets/svg/ProfileImageIcon'
import CustomText from '../../../components/CustomText'
import Authcontext from '../../../context/Authcontext'

const HeaderSection = ({ name, type }: any) => {
const {activeType, setActiveType} = useContext(Authcontext)
  const userType = [
    { id: 1, name: 'Patriot' },
    { id: 2, name: 'Agent' }
  ]
  const handleView = (type: string) => {
    setActiveType(type)
  }
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 30, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems:'center' }}>
        <ProfileImageIcon />
        <View style={{paddingLeft: 10}}>
          <CustomText>Hello</CustomText>
          <CustomText>{name}</CustomText>
        </View>
      </View>
      {type === 'user' ?
        <View><CustomText>Patriot</CustomText></View>
        :
        <View style={{ flexDirection: 'row' }}>
          {userType.map((user) => (
            <Pressable key={user.id} style={activeType === user.name ? styles.active : styles.inactive} onPress={() => handleView(user.name)}><CustomText>{user.name}</CustomText></Pressable>
          ))}
        </View>
      }
    </View>
  )
}

export default HeaderSection

const styles = StyleSheet.create({
  active:{
    paddingHorizontal: 10,
    marginHorizontal: 5,
    paddingBottom: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 2
  },
  inactive:{
    paddingHorizontal: 5,
  },
})
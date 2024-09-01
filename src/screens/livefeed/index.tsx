import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import CustomText from '../../components/CustomText'
import ScreenHeader from '../../components/ScreenHeader'
import HamburgerIcon from '../../assets/svg/HamburgerIcon'


const LiveFeedScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title='Polling Unit Report' iconRight={<HamburgerIcon />} />
      <SearchBar  placeholder='Search by polling unit'/>
    </View>
  )
}

export default  LiveFeedScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})
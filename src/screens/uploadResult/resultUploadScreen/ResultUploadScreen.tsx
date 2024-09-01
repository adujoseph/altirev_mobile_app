import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../_components/SearchBar'

const ResultUploadScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  )
}

export default ResultUploadScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 20,
        paddingTop: 50,
    }
})
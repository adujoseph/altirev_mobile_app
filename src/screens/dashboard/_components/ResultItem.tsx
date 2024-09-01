import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'

const ResultItem = ({item}: any) => {
  
  const {title, time, status} = item;
  return (
    <View style={{flexDirection:'row', justifyContent: 'space-between', paddingVertical: 10, alignItems:'center'}}>
      <View>
        <CustomText>{title}</CustomText>
        <CustomText>{time}</CustomText>
      </View>
      <View>
      <CustomText>{status}</CustomText>
      </View>
    </View>
  )
}

export default ResultItem

const styles = StyleSheet.create({})
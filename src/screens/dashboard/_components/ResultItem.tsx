import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'
import NegativeIcon from '../../../assets/svg/NegativeIcon';
import PostiveIcon from '../../../assets/svg/PositiveIcon';
import IncompleteIcon from '../../../assets/svg/IncompleteIcon';

const ResultItem = ({ item }: any) => {
  const { title, time, status } = item;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        {status === 'rejected' ? <NegativeIcon /> : status === 'success' ? <PostiveIcon /> : <IncompleteIcon />}
        <View style={{ paddingLeft: 10 }}>
          <CustomText style={{ fontWeight: '600', color: '#333' }}>{title}</CustomText>
          <CustomText>{time}</CustomText>
        </View>
      </View>
      <View>
        <CustomText>{status}</CustomText>
      </View>
    </View>
  )
}


export default ResultItem

const styles = StyleSheet.create({})
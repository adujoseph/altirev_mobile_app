import { Pressable, StyleSheet, Text, View, Dimensions, Switch } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import CustomTextArea from '../../components/CustomTextArea'
import CustomButton from '../../components/CustomButton'
import { colors } from '../../utils/theme'

const { height, width } = Dimensions.get('window')
const UploadReport = () => {
  return (
    <View style={styles.container}>
      <CustomTextArea label="Comment" count={300}/>
      <View>
        <CustomText>Media Attachment(Optional)</CustomText>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <CustomButton title='Record Video'  style={styles.video} textStyle={styles.videoText}/>
          <CustomButton title='Record Audio'  style={styles.audio} textStyle={styles.audioText}/>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 20, alignItems:'center'}}>
        <CustomText>Request for Callback</CustomText>
        <Switch />
      </View>
      <View style={{marginTop: 20}}>
        <CustomButton title="Submit" />
      </View>
    
    </View>
  )
}

export default UploadReport

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 20
  },
  video:{
    backgroundColor: colors.disable_btn,
    width: '45%',
    marginTop: 10
  },
  audio:{
    backgroundColor: colors.disable_btn,
    width: '45%',
    marginTop: 10
  },
  videoText:{
    color: colors.primary
  },
  audioText:{
    color: colors.primary
  }
})
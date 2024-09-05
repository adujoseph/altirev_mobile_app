import { Pressable, StyleSheet, Text, View, Dimensions, Switch } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import CustomTextArea from '../../components/CustomTextArea'
import CustomButton from '../../components/CustomButton'
import { colors } from '../../utils/theme'
import { useNavigation } from '@react-navigation/native'
import { video_recording } from '../../utils/constants'

const { height, width } = Dimensions.get('window')
const UploadReport = () => {
  const navigation: any = useNavigation()
  const [reportText, setReportText] = useState('');


  const handleVideoRecording = () => {
    navigation.navigate(video_recording)
  }
  return (
    <ScrollView style={styles.container}>
      <CustomTextArea label="Comment" count={300} value={reportText} onChangeText={(text: string) => setReportText(text)} />
      <View>
        <CustomText>Media Attachment(Optional)</CustomText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton title='Record Video' style={styles.video} textStyle={styles.videoText} onPress={handleVideoRecording} />
          <CustomButton title='Record Audio' style={styles.video} textStyle={styles.audioText} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
        <CustomText>Request for Callback</CustomText>
        <Switch />
      </View>
      <View style={{ marginTop: 20 }}>
        <CustomButton title="Submit" />
      </View>

    </ScrollView>
  )
}

export default UploadReport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  video: {
    backgroundColor: '#ECF1F4',
    borderWidth: 1,
    borderColor: '#CBCBCB',
    width: '45%',
    marginTop: 10
  },
  audio: {
    backgroundColor: '#ECF1F4',
    width: '45%',
    marginTop: 10
  },
  videoText: {
    color: colors.primary
  },
  audioText: {
    color: colors.primary
  }
})
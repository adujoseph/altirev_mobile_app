import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSelectInput from '../../components/CustomSelectInput'
import Screens from '../../components/Screens'
import CustomTextField from '../../components/CustomTextField'
import CustomText from '../../components/CustomText'
import CustomButton from '../../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const UploadResult = () => {
  const electionOptions = [
    { id: 1, label: 'Presidential', value: 'Presidential' }
  ]
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <View style={styles.container}>
        <View>
          <CustomSelectInput label='' options={electionOptions} onValueChange={(val: string) => console.log(val)} />
        </View>
        <View>
          <CustomTextField label='Number of accredited voters' onChangeText={(val) => console.log(val)} />
          <CustomTextField label='Number of votes casted' onChangeText={(val) => console.log(val)} />
          <CustomTextField label='Number of inavlid voter' onChangeText={(val) => console.log(val)} />
        </View>
        <View>
          <CustomTextField label='APC' onChangeText={(val) => console.log(val)} />
          <CustomTextField label='PDP' onChangeText={(val) => console.log(val)} />
          <CustomTextField label='LP' onChangeText={(val) => console.log(val)} />
          <Pressable>
            <CustomText>Add Party +</CustomText>
          </Pressable>
        </View>
        <View>
          <CustomText>File Attachment of CTC Copy</CustomText>
        </View>
        <View>
          <CustomButton title='Submit' />
        </View>
      </View>
    </ScrollView>
  )
}

export default UploadResult

const styles = StyleSheet.create({
  scroll:{
    flex: 1,
  },
  content: {
    flexGrow: 1,
    marginBottom: 100
  },
  container:{
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    paddingBottom: 100
  }
})
import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomText from './CustomText'

const { height, width } = Dimensions.get('window')
const CustomTextArea = ({ label, count, value, ...rest }: any) => {
    return (
        <View style={styles.wrapper}>
            <CustomText>{label}</CustomText>
            <View style={styles.textArea}>
                <TextInput multiline={true} placeholder='Typing...' style={styles.input} {...rest} maxLength={count} />
            </View>
            <CustomText style={styles.count}>{value.length}/{count}</CustomText>
        </View>
    )
}

export default CustomTextArea

const styles = StyleSheet.create({
    wrapper: {
        // paddingHorizontal: 20
    },
    textArea: {
        minHeight: height * 0.2,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginTop: 10
    },
    input: {
        marginLeft: 5
    },
    count:{
        textAlign:'right',
        paddingTop: 10
    }
})
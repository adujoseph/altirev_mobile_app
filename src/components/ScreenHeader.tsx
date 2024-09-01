import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import CustomText from './CustomText'

interface ScreenHeaderProps {
    title: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    pressRight?: () => void;
    pressLeft?: () => void;
}
const ScreenHeader = ({ title, iconLeft, iconRight , pressLeft, pressRight}: ScreenHeaderProps) => {
    return (
        <View style={{flexDirection:'row', justifyContent: 'space-between', paddingVertical:10}}>
            <View>{iconLeft ? <Pressable onPress={pressLeft}>{iconLeft}</Pressable> : null}</View>
            <CustomText style={styles.text}>{title}</CustomText>
            <View>{iconRight ? <Pressable onPress={pressRight}>{iconRight}</Pressable> : null}</View>
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({
    text:{
        fontFamily: 'AeonikTRIAL-Bold',
        fontSize: 18,
        lineHeight:26.4,
        color:'#272727'
    }
})
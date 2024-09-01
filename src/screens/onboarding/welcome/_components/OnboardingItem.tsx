import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { OnboardingData } from './onboardingData';
import CustomButton from '../../../../components/CustomButton';
import CustomText from '../../../../components/CustomText';

const OnboardingItem = ({ item }: any) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={{ width , flexGrow: 1, justifyContent:'center', alignItems: 'center', padding: 30}}>
            {item.image}
            <View style={{marginTop: 50}}>
                <CustomText style={styles.bigText}>{item.text}</CustomText>
                <CustomText style={styles.smallText}>{item.describe}</CustomText>
            </View>
        </View>
    )
}

export default OnboardingItem;

const styles = StyleSheet.create({
    bigText:{
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28.8,
        textAlign:'center',
        color:'#272D2F'
    },
    smallText:{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19.2,
        textAlign:'center',
        color:'#272D2F',
        marginTop: 10
    }
})
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { Children } from 'react'
import CustomText from './CustomText'
import { colors } from '../utils/theme'


const AuthCommonScreen = ({ children, title, description }: any) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={{ flexGrow: 0.15, padding: 20, justifyContent: 'flex-end' }}>
                <CustomText style={styles.bigText}>{title}</CustomText>
                <CustomText style={styles.smallText}>{description}</CustomText>
            </View>
            <View style={{ flexGrow: 0.85, backgroundColor: '#fff', borderTopEndRadius: 30, borderTopStartRadius: 30, zIndex:9999 }}>
                {children}
            </View>
        </ScrollView>
    )
}

export default AuthCommonScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.dark_bg
    },
    content: {
        flexGrow: 1,
        //backgroundColor: colors.dark_bg
    },
    bigText: {
        fontSize: 24,
        lineHeight: 33.6,
        fontWeight: '700',
        color: colors.white
    },
    smallText:{
        fontSize: 16,
        lineHeight: 22.6,
        fontWeight: '400',
        color: colors.white,
        width: '75%'
    }
})
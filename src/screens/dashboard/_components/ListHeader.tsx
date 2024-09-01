import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'
import { useNavigation } from '@react-navigation/native'
import { result_upload } from '../../../utils/constants'

const ListHeader = () => {
    const navigation: any = useNavigation()
    const getMore = () => {
        navigation.navigate(result_upload)
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CustomText>Recent Result Upload</CustomText>
            <Pressable onPress={getMore}>
                <CustomText>View All</CustomText>
            </Pressable>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({})
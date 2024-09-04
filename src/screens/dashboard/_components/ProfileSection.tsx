import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/theme'
import CustomText from '../../../components/CustomText'
import BellIcon from '../../../assets/svg/BellIcon'

const ProfileSection = ({state, pollingUnit}: any) => {
    return (
        <View style={{ backgroundColor: colors.dark_bg, minHeight: 70, padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <CustomText style={{ color: 'white' }}>Agent</CustomText>
                    <View style={{ paddingTop: 30 }}>
                        <BellIcon />
                    </View>
                </View>
                <View>
                    <CustomText style={{ color: 'white', textAlign: 'left' }}>State</CustomText>
                    <CustomText style={{ color: 'white' }}>{state}</CustomText>
                    <View style={{ paddingTop: 20 }}>
                        <CustomText style={{ color: 'white' }}>Polling unit</CustomText>
                        <CustomText style={{ color: 'white' }}>{pollingUnit}</CustomText>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileSection

const styles = StyleSheet.create({})
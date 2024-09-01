import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screens from '../../../components/Screens';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { register2 } from '../../../utils/constants';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPTextView from 'react-native-otp-textinput';
import OtpInput from '../../../components/OtpInput';

const OtpScreen = () => {
  const navigation: any = useNavigation();

  const [otp, setOtp] = useState<string>('');

  const handleOtpChange = (code: string) => {
    setOtp(code);
  };

  const handleSubmit = () => {
    console.log('Entered OTP:', otp);
    navigation.navigate(register2)
  };

  return (
    <Screens>
      <View style={styles.container}>
        <CustomText>Kindly enter the verification code that has been sent to your email now.</CustomText>
        <View>
          <OtpInput length={6} value={otp} onChange={handleOtpChange} style={{height: 150, alignItems:'center'}}/>
        </View>
        <CustomText style={{textAlign: 'center'}}>Don’t receive OTP? <CustomText>Resend OTP</CustomText></CustomText>
        <View style={{marginTop: 30}}>
        <CustomButton title='Verify' onPress={handleSubmit} />
        </View>
       
      </View>
    </Screens>
  )
}

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 60,
    paddingHorizontal: 20
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
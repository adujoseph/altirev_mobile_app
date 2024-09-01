import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screens from '../../../components/Screens';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { register2 } from '../../../utils/constants';
// import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpScreen = () => {
  const navigation: any = useNavigation();

  const handleSubmit = () => {
    navigation.navigate(register2)
  }
  return (
    <Screens>
      <View style={styles.container}>
        <CustomText>Kindly enter the verification code that has been sent to your email now.</CustomText>
        <View>
          {/* <OTPInputView
            style={{ width: '80%', height: 200 }}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code => {
              console.log(`Code is ${code}, you are good to go!`)
            })}
          /> */}
        </View>
        <CustomText>Don’t receive OTP? <CustomText>Resend OTP</CustomText>.</CustomText>
        <CustomButton title='Verify' onPress={handleSubmit} />
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
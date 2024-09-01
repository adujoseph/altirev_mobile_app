import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../utils/theme';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inverted?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  inverted
}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.buttonText];

//   if (inverted) {
//     buttonStyles.push(styles.invertedButton);
//     textStyles.push(styles.invertedButtonText);
//   }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, {backgroundColor: inverted ? '#fff': colors.primary, borderWidth : inverted? 1: 0}, style]}
    >
      <Text style={[styles.buttonText,{color : inverted ? colors.primary : '#fff' }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent:'center',
    height: 50,
    borderColor: colors.primary
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },

});

export default CustomButton;
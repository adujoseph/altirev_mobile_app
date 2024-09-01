import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  // Add custom properties as needed
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  color,
  textAlign,
}) => {
  return (
    <Text style={[styles.defaultText, { fontFamily, fontSize, lineHeight, letterSpacing, color, textAlign }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color:'#333',
    fontFamily: 'AeonikTRIAL-Regular'
  },
});

export default CustomText;
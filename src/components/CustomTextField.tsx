import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import PersonIcon from '../assets/svg/PersonIcon';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'email-address' | 'phone-pad' | 'numeric' | 'url' | 'default';
  secureTextEntry?: boolean;
  error?: string;
  style?: any;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  icon?: any;
  password?: any;
  underline?: boolean;
}

const CustomTextField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  error,
  style,
  inputStyle,
  labelStyle,
  errorStyle,
  icon,
  password,
  underline
}: TextFieldProps) => {
  const [secure, setSecure] = useState(secureTextEntry)
  const inputRef = useRef<TextInput>(null);

  const clearText = useCallback(() => {
    inputRef.current?.clear();
  }, []);

  const handleToggle = () => {
    if(password) setSecure(!secure)
  }

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={underline ? styles._inputContainer : styles.inputContainer}>
      {icon && underline ?
          <Pressable onPress={handleToggle}>
            {icon}
          </Pressable> 
          : 
          null
        }
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
        />
        {value && (
          <TouchableOpacity onPress={clearText} style={styles.clearButton}>
            {/* Clear button icon */}
          </TouchableOpacity>
        )}


        {icon && !underline ?
          <Pressable onPress={handleToggle}>
            {icon}
          </Pressable> 
          : 
          null
        }


      </View>
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color:'#656565',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#272727',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  _inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  clearButton: {
    marginLeft: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default CustomTextField;
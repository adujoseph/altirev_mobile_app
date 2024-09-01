import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBarIcon from '../../../assets/svg/SearchBarIcon';


interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onClearPress?: () => void;
  style?: any;
  inputStyle?: any;
  iconStyle?: any;
}

const SearchBar = ({
  placeholder,
  onChangeText,
  onClearPress,
  style,
  inputStyle,
  iconStyle,
}: SearchBarProps) => {
  const [text, setText] = useState('');

  const handleClearPress = () => {
    setText('');
    onClearPress?.();
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.iconContainer}>
        <SearchBarIcon  />
      </TouchableOpacity>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={text}
        onChangeText={(text) => {
          setText(text);
          onChangeText?.(text);
        }}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={handleClearPress} style={styles.clearButton}>
          {/* Clear button icon */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
  },
  clearButton: {
    marginLeft: 5,
  },
});

export default SearchBar;
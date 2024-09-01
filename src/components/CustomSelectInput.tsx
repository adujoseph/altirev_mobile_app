import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DownArrowIcon from '../assets/svg/DownArrow';

interface SelectInputProps {
  label?: string;
  options: { label: string; value: any }[];
  value?: any;
  onValueChange: (value: any) => void;
  style?: any;
  dropdownStyle?: any;
  itemStyle?: any;
  placeholder?: string; // Added placeholder prop
}

const CustomSelectInput = ({
  label,
  options,
  value,
  onValueChange,
  style,
  dropdownStyle,
  itemStyle,
  placeholder,
}: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: any) => {
    onValueChange(option.value);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity onPress={handlePress} style={[styles.selectContainer, styles.button]}>
        <Text style={styles.selectedValue}>{value?.label || placeholder || 'Select an option'}</Text>
        <DownArrowIcon />
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.dropdown, dropdownStyle]}>
          {options.map((option) => (
            <TouchableOpacity key={option.value} onPress={() => handleSelect(option)} style={[styles.dropdownItem, itemStyle]}>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 50
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedValue: {
    flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: 80,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
  },
});

export default CustomSelectInput;
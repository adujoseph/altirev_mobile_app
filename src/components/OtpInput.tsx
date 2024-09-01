import React, { useRef, FC } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TextStyle, KeyboardAvoidingView, Platform } from 'react-native';

interface OtpInputProps {
    length?: number;
    value: string;
    onChange: (value: string) => void;
    style?: ViewStyle;
    inputStyle?: TextStyle;
}

const OtpInput: FC<OtpInputProps> = ({
    length = 6,
    value,
    onChange,
    style,
    inputStyle
}) => {
    const inputs = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, index: number) => {
        const otpArray = value.split('');
        otpArray[index] = text;

        if (text && index < length - 1) {
            inputs.current[index + 1]?.focus();
        }

        onChange(otpArray.join(''));
    };

    const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // style={styles.keyboardAvoidingView}
        >
            <View style={[styles.container, style]}>
                {Array(length)
                    .fill(0)
                    .map((_, index) => (
                        <TextInput
                            key={index}
                            style={[styles.input, inputStyle]}
                            keyboardType="numeric"
                            maxLength={1}
                            value={value[index] || ''}
                            onChangeText={(text) => handleChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            ref={(ref) => (inputs.current[index] = ref)}
                        />
                    ))}
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: 40,
        height: 40,
        borderBottomWidth: 2,
        borderColor: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default OtpInput;

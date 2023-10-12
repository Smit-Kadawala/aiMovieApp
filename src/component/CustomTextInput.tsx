import React from 'react';
import {StyleSheet, TextInput, View, TextInputProps} from 'react-native';

interface CustomTextInputProps extends Partial<TextInputProps> {
  placeholder: string;
  // You can add other props you want to pass to TextInput here
}
const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  ...restProps
}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} {...restProps} />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

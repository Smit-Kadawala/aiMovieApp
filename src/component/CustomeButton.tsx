import React from 'react';
import {StyleSheet, Pressable, PressableProps, Text} from 'react-native';

interface CustomeButtonProps extends Partial<PressableProps> {
  btnText: string;
  // You can add other props you want to pass to TextInput here
}
const CustomeButton: React.FC<CustomeButtonProps> = ({
  btnText,
  ...restProps
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'white' : 'rgb(210, 230, 255)',
        },
        styles.wrapperCustom,
      ]}
      {...restProps}>
      <Text>{btnText}</Text>
    </Pressable>
  );
};

export default CustomeButton;

const styles = StyleSheet.create({
  wrapperCustom: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});

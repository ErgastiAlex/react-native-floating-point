import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={getMainViewStyle(props.position, props.padding)}>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...props.shadow,
          backgroundColor: props.backgroundColor,
        }}
        onPress={() => {
          if (props.hasChildren == true) {
            setIsOpen(!isOpen);
          } else {
            props.onPress();
          }
        }}
      >
        {props.icon}
      </TouchableOpacity>
      {/* To display the button */}
      {isOpen && props.children}
    </View>
  );
};

FloatingButton.defaultProps = {
  position: "flex-end",
  backgroundColor: "red",
  hasChildren: true,
  padding: 10,
  shadow: {},
};

const getMainViewStyle = (position, padding) => {
  return {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column-reverse",
    padding: padding,
    alignItems: position,
    zIndex: 1,
  };
};

const styles = StyleSheet.create({
  //Container of the button and the child
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,

    //For the icon
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingButton;

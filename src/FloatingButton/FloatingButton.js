import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={getMainViewStyle(props.position)}>
      <TouchableOpacity
        style={{ ...styles.view, backgroundColor: props.backgroundColor }}
        onPress={() => {
          if (props.hasChildren === true) {
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
};

const getMainViewStyle = (position) => {
  alert(position)
  return {
    position: "absolute",
    left: 0,
    right: 0,
    bottom:0,
    flexDirection: "column-reverse",
    alignItems:position,
  };
};

const styles = StyleSheet.create({
  //Container of the button and the child
  view: {
    width: 55,
    height: 55,
    borderRadius: 30,

    //For the icon
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingButton;

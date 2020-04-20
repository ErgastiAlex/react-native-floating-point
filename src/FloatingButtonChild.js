import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const FloatingButtonChild = (props) => {
  const [fadeIn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      timing: 10000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{ ...getMainViewStyle(props.flexDirection), opacity: fadeIn }}
    >
      {props.title && props.title != "" && (
        <Text style={styles.tooltip}>{props.title}</Text>
      )}
      <TouchableOpacity onPress={() => props.onPress()}>
        <View
          style={{
            ...styles.button,
            ...props.shadow,
            backgroundColor: props.backgroundColor,
          }}
        >
          {props.children}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

FloatingButtonChild.defaultProps = {
  position: "right",
  backgroundColor: "red",
  flexDirection: "row",
  shadow: {},
};

const getMainViewStyle = (flexDirection) => {
  return {
    flexDirection: flexDirection,
    justifyContent: flexDirection == "row" ? "flex-end" : "flex-start" < s,
    alignItems: "center",
    marginBottom: 15,
  };
};

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  tooltip: {
    padding: 5,
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export default FloatingButtonChild;

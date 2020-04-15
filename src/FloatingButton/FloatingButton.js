import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
const FloatingButton = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={{...styles.view, ...props.style}}
        onPress={() => {
          if (props.hasChildren === true) {
            setIsOpen(!isOpen);
          } else {
            props.onPress();
          }
        }}>
        {props.icon}
      </TouchableOpacity>
      {/* To display the button */}
      {isOpen && props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    right: '8%',
    bottom: 30,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
  },
  view: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;

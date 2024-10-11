import React from 'react'
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet,Text } from 'react-native';
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});
const Loading = () => {
  return (
    <AnimatedLoader
    visible={true}
    animationStyle={styles.lottie}
    overlayColor="#fdf6aa "
    speed={1}
  >
    <Text style={styles.loadingText}>Loading...</Text>
  </AnimatedLoader>
  )
}

export default Loading
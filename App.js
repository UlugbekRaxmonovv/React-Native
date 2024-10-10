import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    },
    profile: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      backgroundColor: 'red',
    },
    profileText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileSecond: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      backgroundColor: 'blue',
    },
    profileSecondText: {
      fontSize: 20,
      fontWeight: 'bold',
    }
})
export default function App() {

  return (
    <View style={styles.container}>
       <View style={styles.profile}>
        <Text style={styles.profileText}>Ulug'bek</Text>
       </View>
       <View style={styles.profileSecond}>
        <Text style={styles.profileSecondText}>Ulug'bek</Text>
       </View>
       </View>
  );
}


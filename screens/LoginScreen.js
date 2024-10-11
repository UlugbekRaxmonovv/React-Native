import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Loading from '../components/Loading';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';  // Toast kutubxonasini import qiling

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handelLogin = () => {
    setLoading(true);
    let data = {
      username: user,
      password: password,
    };

    axios
      .post('https://dummyjson.com/auth/login', data)
      .then((res) => {
        console.log(res);
        navigation.navigate('Home');
        setPassword('');
        setUser('');
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back 👋',
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: 'Invalid username or password',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.title}>Logins</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={user}
              onChangeText={(text) => setUser(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <Button title="Login" onPress={handelLogin} />
          </View>
        </View>
      )}
    </View>
  );
}

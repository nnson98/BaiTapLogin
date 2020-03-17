import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import Login from './login';
import AsyncStorage from '@react-native-community/async-storage';
export default function Home({navigation}) {
  const [username1, setUserName] = useState('');
  const [password1, setPassWord] = useState('');
  async function deleteData() {
    AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Home ....</Text>
      <Button title="button" onPress={deleteData} />
    </View>
  );
}

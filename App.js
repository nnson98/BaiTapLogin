import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './App/login';
import Home from './App/home';
import Splash from './App/Splash';
import AsyncStorage from '@react-native-community/async-storage';

const AuthStack = createStackNavigator();
export default function App(navigation) {
  const [isLoading, setIsLoading] = useState(true);
  /*const Loaddata = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (isLoggedIn !== '1') {
      navigation.navigate('Home');
    }
  };*/
  useEffect(() => {
    AsyncStorage.getItem('isLoggedIn').then(value => {
      if (value !== '1') {
        return navigation.navigate('Home');
      }
    });
  });
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

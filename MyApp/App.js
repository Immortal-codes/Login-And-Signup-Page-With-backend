
import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './Screens/SignupScreen'
import LoginScreen from './Screens/LoginScreen'
import LoadingScreen from './Screens/LoadingScreen';
import HomeSceen from './Screens/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App= () => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('token')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator
     initialRouteName="none"
      >
 
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="home" component={HomeSceen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
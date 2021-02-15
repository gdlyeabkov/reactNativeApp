import {Provider} from 'react-redux'
import { AppNavigation } from './src/navigation/AppNavigation';
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo'
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store/index';

export default function App() {
  const [isReady,setIsReady]=useState(false)
  if(!isReady){
	return <AppLoading startAsync={bootstrap} onError={err=>console.log(err)} onFinish={()=>setIsReadty(true)} />
}
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

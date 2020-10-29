import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import style from './style';


const Home = () => {

  const [name, setName ] = useState('');
  const [newName, setNewName ] = useState('')


  async function handleSaveName(){
    if(newName !== ''){
      await AsyncStorage.setItem('@name', newName);
      setName(newName);
      setNewName('');
    }
  }

  async function getName(){
    const n = await AsyncStorage.getItem('@name');
    setName(n);
  }

  useEffect(() => {
    getName()
  }, []);

  return(
    <View style={style.container}>
      <TextInput
        placeholder="Qual o seu nome ?"
        style={style.InputText}
        value={newName}
        onChangeText={setNewName}  
      />
      <Button 
        title="Salvar"
        onPress={handleSaveName}  
      />
      <View style={style.nameArea}>
        <Text style={style.nameAreaText}>{name}</Text>
      </View>
    </View>
  )
};


export default Home;
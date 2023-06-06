import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [nome,setNome] = useState('Seu nome aparece aqui <3')
  const [entrada,setEntrada] = useState()

  useEffect(()=>{

    async function buscarNome(){
      const stgNome = await AsyncStorage.getItem('nome')
      if(stgNome != null){
        setNome(stgNome)
      }
    }

    buscarNome()

  },[])


  useEffect(()=>{
    async function gravarNome(){
      await AsyncStorage.setItem('nome',nome)
    }
    gravarNome()
  },[nome])

  function alterar(){
    setNome(entrada)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{nome}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(txt)=>{
          setEntrada(txt)
        }}
      />
      <Button color="#f78fb7" style={styles.btn} title='Alterar Nome'
        
        onPress={alterar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  btn:{
    width: '100%',
    marginBottom: 15,

  },
  txt:{
    fontSize: 15,
    marginTop: 10,
    fontWeight: '500',
    fontSize: '20px',
    color: '#080003',
    width: 'fit-content',
    backgroundColor: '#ffe6ef',
    padding: '15px',
    borderRadius: '30px',
    color: "#f05b94",
    marginBottom: '5px'
  },
  input:{
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 10,
    borderColor: '#f05b94',
    height: '4%',
    borderRadius: '20px',
    width: '90%'
  }
});

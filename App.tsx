import React, {useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

 interface satunnainen {
  numero : number,
  arvaus : string
 }


  const [numero, setNumero] = useState();


  const suurempi = () : any => {
    console.log("")
  }
  
  const pienempi = () : any => {
    console.log("pienempi painettu.")
  }


  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
    <View style={styles.napit}>
    <Button title='Suurempi' onPress={suurempi}></Button>
    <Button title='Pienempi' onPress={pienempi}></Button>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex : 1,
    justifyContent : 'center',
    marginHorizontal : 50,
    maxHeight: '20%',
    marginVertical: 20
  },
  napit : {
    backgroundColor : 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 400,
    marginTop: 150,
  }
});

import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {



  const [numero, setNumero] = useState<any>();
  const [loppu, setLoppu] = useState<boolean>(true);
  const [edellinenNumero, setEdellinenNumero] = useState<any>();
  const [arvaus, setArvaus] = useState("");
  let havio = false;


  const aloitusnumero = () => {
    setNumero(Math.floor(Math.random() * 12 + 1))
  }


  const suurempi = () : any => {
    setArvaus("Suurempi")
    setNumero(Math.floor(Math.random() * 12 + 1))
    setEdellinenNumero(numero)
    console.log(`Edellinen numero : ${edellinenNumero} nykyinen numero ${numero}`)
  }
  
  const pienempi = () : any => {
    setArvaus("Pienempi")
    setNumero(Math.floor(Math.random() * 12 + 1))
    setEdellinenNumero(numero)
  }
  if (arvaus === "Suurempi" && numero >= edellinenNumero) {
    console.log("kissa")
  }else if (arvaus === "Suurempi" && numero < edellinenNumero) {
    havio = true
  }
    if (arvaus === "Pienempi" && numero < edellinenNumero) {
    console.log("Pienempihän se..")
  } else if (arvaus === "Pienempi" && numero > edellinenNumero) {
    havio = true
  }

  useEffect(() => {
    aloitusnumero()
    setArvaus("")
  }, []);
  useEffect(() => {
    setLoppu(true)
    setArvaus("")
  }, [havio]);


  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
    <View>
    <Text style={styles.numero}>{numero}</Text>
    </View>
    <View style={styles.napit}>
    <Button disabled={loppu} title='Suurempi' onPress={suurempi}></Button>
    <Button disabled={loppu} title='Pienempi' onPress={pienempi}></Button>
    <Button title='Aloita' onPress={ () => setLoppu(false)}></Button>
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
  },
  numero  : {
    marginLeft: 150,
    fontSize: 50
  }
});

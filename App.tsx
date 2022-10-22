import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native-paper';



export default function App() {
   const [numero, setNumero] = useState<any>();
   const [loppu, setLoppu] = useState<boolean>(true);
   const [edellinenNumero, setEdellinenNumero] = useState<any>();
   const [arvaukset, setArvaukset] = useState<any>(0);
   const [arvaus, setArvaus] = useState("");
   let havio = false;
   const aloitus = () => {
      setNumero(Math.floor(Math.random() * 12 + 1));
      setLoppu(false);
      setArvaukset(0);
   };

   const suurempi = (): any => {
      setArvaus("Suurempi");
      setNumero(Math.floor(Math.random() * 12 + 1));
      setEdellinenNumero(numero);
      setArvaukset(arvaukset + 1);
   };

   const pienempi = (): any => {
      setArvaus("Pienempi");
      setNumero(Math.floor(Math.random() * 12 + 1));
      setEdellinenNumero(numero);
      setArvaukset(arvaukset + 1);
   };
   if (arvaus === "Suurempi" && numero >= edellinenNumero) {
   } else if (arvaus === "Suurempi" && numero < edellinenNumero) {
      havio = true;
   }
   if (arvaus === "Pienempi" && numero < edellinenNumero) {
   } else if (arvaus === "Pienempi" && numero > edellinenNumero) {
      havio = true;
   }

   
   useEffect(() => {
      setLoppu(true);
   }, [havio]);

   return (
      <>
         <View style={styles.container}>
            <Text variant="displaySmall" style={{textAlign: "center"}}>Suurempi vai pienempi arvaaminen</Text>
         </View>
         <View>
            <Text variant="headlineLarge" style={{textDecorationLine: 'underline'}}>Nykyinen Numero :{numero}</Text>
            <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginTop: 5, textDecorationLine: 'underline'}}>
               {" "}
               Oikeat arvaukset : {arvaukset}
          </Text>
         </View>
         <View style={styles.napit}>
            <Button
               disabled={loppu}
               onPress={suurempi}
               mode={"contained"}
            >Suurempi</Button>
            <Button
               disabled={loppu}
               onPress={pienempi}
               mode={"contained"}
            >Pienempi</Button>
            <Button disabled={!loppu} onPress={aloitus} mode={"contained"}>Aloita</Button>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 0,
      maxHeight: "50%",
      marginVertical: 10,
   },
   napit: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 400,
      marginTop: 100,
   },
   numero: {
      alignItems: "center",
      marginLeft: 170,
      fontSize: 50,
   },
   otsikko: {
      fontSize: 30,
      height: 130,
      padding: 15,
      textAlign: "center",
   },
   arvaukset: {
      marginLeft: 100,
      fontSize: 25,
      textAlign: "left",
   },
});

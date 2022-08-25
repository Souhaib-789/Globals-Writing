import React, {useEffect } from "react";
import { Text, Image, View,StyleSheet } from 'react-native';



export default function Thankyou({ navigation }) {


  useEffect(() => {
    setTimeout(() => navigation.navigate('ClientsRoom'), 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Images/check.png')} style={styles.img} />
      <View>
        <Text style={styles.heading}>
          Your project details has been shared succesfully !
        </Text>
      </View>
    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20
  },
  img: {
    marginHorizontal: '30%',
    marginVertical: '15%',
    height: '30%',
    width: '50%'
  },
  heading: {
    fontSize: 30,
    color: '#F08000',
    margin: '10%',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 40
  },
  headingx: {
    margin: '3%',
    fontSize: 18,
    color: 'black',
    marginHorizontal: '10%'
  },
});
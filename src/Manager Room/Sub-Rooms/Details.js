import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Details({ navigation, route }) {


  const item = route.params;

  return (
    <View style={styles.mainview}>
      <View style={styles.headview}>
        <Text style={styles.heading}> <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />   MANAGER PORTAL</Text>
      </View>
      <TouchableOpacity style={styles.profilebtn} onPress={() => navigation.navigate('Received Docs')}>
        <Text style={styles.receiveddoc}> Received Documents </Text><FontAwesome5 name='file' size={20} color={'white'} style={styles.icon} solid />
      </TouchableOpacity>
      <View style={styles.subview}>
        <Text style={styles.headingx}>Number of Employees in {item.name} :</Text>
        <View style={styles.employeecard}>
          <Text style={styles.empname}>Hamza Zafar</Text>
          <View style={styles.icons}>
            <Ionicons name='chatbox' size={35} color={'#F08000'} solid onPress={() => navigation.navigate('Gup Shup Room')} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: 'white',
    flex: 1
  },
  headview: {
    margin: '7%',


  },
  subview: {
    margin: '8%',
    alignItems: 'center'
  },
  bgimage: {
    flex: 1
  },


  heading: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    // marginVertical: '11%',
    // marginHorizontal: '5%'
  },
  employeecard: {
    width: '100%',
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: '5%',
    elevation: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  empname: {
    fontSize: 18,
    color: 'black'
  },
  FoodCardx: {
    width: '70%',
    height: 60,
    backgroundColor: '#F08000',
    borderRadius: 20,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',

    marginBottom: 10,
    marginTop: 30,
    marginHorizontal: 55,
    elevation: 10,
  },
  headingx: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginBottom: '10%'
  },
  flatlist: {
    marginTop: '15%'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profilebtn: {
    backgroundColor: '#F08000',
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
marginHorizontal: '5%',
    marginTop: '7%',
    flexDirection: 'row',
  }
  ,
  receiveddoc: {
    color: 'white',
    fontSize: 18,

  },


});
import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function ReceivedProjects({ navigation }) {

 const clientsorder = [
  {
    id: 1,
    name : 'Jhon Smith',
    email : 'jhon@gmail.com',
    contactno: '0233333333333',
    weburl: 'www.jhoncompany.com',
    projectname: 'Mobile Application',
    category: 'Management System',
    desc: 'Application should be completed within 6 months'
  },
  {
    id: 2,
    name : 'Ferrad Sonz',
    email : 'ferad@gmail.com',
    contactno: '0233333333333',
    weburl: 'www.feradcompany.com',
    projectname: 'Website',
    category: 'E-Commerce',
    desc: 'Website should be completed within 6 months'
  },
  {
    id: 3,
    name : 'Dale Boe',
    email : 'dale@gmail.com',
    contactno: '0233333333333',
    weburl: 'www.DaleBoe.com',
    projectname: 'Mobile Application',
    category: 'Portfolio',
    desc: 'Portfolio should be completed within 6 months'
  }
 ]
  return (
    <View style={styles.container}>
      <View style={styles.headview}>
        <Text style={styles.heading}>
          <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  RECEIVED PROJECTS</Text>
      </View>
      <FlatList
        data={clientsorder}
        renderItem={({ item, index }) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <View style={styles.subview}>
                <Text style={styles.headingx}> From : {item.name}</Text>
                <Text style={styles.headingx}> Email : {item.email}</Text>
                <Text style={styles.headingx}> Cell # : {item.contactno}</Text>
                <Text style={styles.headingx}> Web url : {item.weburl}</Text>
                <Text style={styles.headingx}> Project Name : {item.projectname}</Text>
                <Text style={styles.headingx}> Category : {item.category}</Text>
                <Text style={styles.headingx}> Description : {item.desc}</Text>
              <View style={styles.bottomcard}>
                <Text style={styles.headingxx}> Project {index} Details</Text>
                <TouchableOpacity >
                  <MaterialIcons name='highlight-remove' size={30} color={'black'} style={styles.icon} solid />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )} />
    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F6',
    flex: 1,
    padding: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  headingx: {
    margin: '3%',
    fontSize: 18,
    color: 'black',
    marginHorizontal: '10%',
  },
  headingxx: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F08000',
  },
  subview: {
    marginTop: '15%',
    backgroundColor: 'white',
    width: '95%',
    height: 550,
    elevation: 10,
    borderRadius: 20,
    marginBottom: '3%',
    padding: 20
  },
  heading: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
  bottomcard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '5%'
  },


});
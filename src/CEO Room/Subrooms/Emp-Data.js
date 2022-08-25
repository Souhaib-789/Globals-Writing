import React from "react";
import {Text,View, StyleSheet} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function EmployeesData({navigation}){

    return(
    <View style={styles.mainView}>
        <View style={styles.headview}>
        <Text style={styles.headingx}>
          <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  Employees Data</Text>
      </View>
      <ScrollView>
     <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.heading}>Name of Employee :</Text></DataTable.Title>
        <DataTable.Title ><Text style={styles.heading}>Hamza</Text></DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Country -</DataTable.Cell>
        <DataTable.Cell>Pakistan</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Email -</DataTable.Cell>
        <DataTable.Cell>hamza@gamil.com</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>City -</DataTable.Cell>
        <DataTable.Cell>karachi</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Phone # -</DataTable.Cell>
        <DataTable.Cell>0300 000000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Designation</DataTable.Cell>
        <DataTable.Cell>Back-end Developer</DataTable.Cell>
      </DataTable.Row>
    </DataTable>



    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.heading}>Name of Employee :</Text></DataTable.Title>
        <DataTable.Title ><Text style={styles.heading}>Souhaib</Text></DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Country -</DataTable.Cell>
        <DataTable.Cell>Pakistan</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Email -</DataTable.Cell>
        <DataTable.Cell>souhaib@gamil.com</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>City -</DataTable.Cell>
        <DataTable.Cell>karachi</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Phone # -</DataTable.Cell>
        <DataTable.Cell>0300 000000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Designation</DataTable.Cell>
        <DataTable.Cell>React-Native Developer</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView>
    </View>

    );
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'white',
    flex: 1
  },
    container: {
      paddingTop: 60,
      paddingHorizontal: 20,
    },
   
    tableHeader: {
      backgroundColor: '#FFECC5',
    },
    heading: {
      fontSize: 15,
      color: 'black',
    },
    headingx: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    headview:{
      padding: 20
    }
  });
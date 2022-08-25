import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MenuScreen({ navigation }) {
    return (

        <ImageBackground source={require('../../assets/Images/imgx.jpg')} resizeMode="cover" style={{ flex: 1 }}>
 <View style={styles.headview}>
        <Text style={styles.heading}> 
        <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  MENU  </Text>
      </View>
            <View style={styles.subdiv}>


                <TouchableOpacity onPress={()=> navigation.navigate('ClientsOrder')}>
                    <View style={styles.menuopt}>
                        <FontAwesome5 name='users' size={25} color={'#F08000'} style={styles.icon} solid />
                        <Text style={styles.txt}> Clients Portal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Registration')}>
                    <View style={styles.menuopt}>
                        <Ionicons name='ios-man-sharp' size={27} color={'#F08000'} style={styles.icon} solid />
                        <Text style={styles.txt}> Employees Portal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Manager Room')}>
                    <View style={styles.menuopt}>
                        <MaterialCommunityIcons name='human-male-board-poll' size={27} color={'#F08000'} style={styles.icon} solid />
                        <Text style={styles.txt}> Manager Portal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('CEO Room')}>
                    <View style={styles.menuopt}>
                        <FontAwesome5 name='user' size={25} color={'#F08000'} style={styles.icon} solid />
                        <Text style={styles.txt}> CEO Portal</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    headview: {
        marginBottom: '5%',
        // marginRight: '60%',
      },
      heading: {
        fontSize: 20,
        marginTop: '8%',
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: '8%'
      },
    txt: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 2,
        color: 'black'
    },
    subdiv: {
        marginVertical: 70,
        marginRight: '30%'
    },
    menuopt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '7%',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 0.97,
    }
});



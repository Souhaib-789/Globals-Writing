import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function ReceivedDocs({ navigation }) {




    return (
        <View style={styles.container}>


            <ScrollView>
                <View style={styles.headview}>
                    <Text style={styles.heading}>
                        <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  RECEIVED DOCUMENTS</Text>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.subview}>
                        <Image source={require('../../assets/Images/pdf.png')} style={styles.Image} />
                        <Image source={require('../../assets/Images/pdf.png')} style={styles.Image} />
                        <Image source={require('../../assets/Images/video.png')} style={styles.Image} />

                    </View>
                    <Text style={styles.headingx}>by hamza zafar</Text>
                </View>


            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    heading: {
        fontSize: 25,
        marginTop: '5%',
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: '8%'
    },
    headingx: {
        margin: '2%',
        fontSize: 18,
        color: 'black',
        marginHorizontal: '20%'
    },

    subview: {
        marginTop: '5%',
        backgroundColor: '#eee',
        width: '80%',
        height: 400,
        elevation: 20,
        padding: 20
    },
    heading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',

    },
    headview: {
        margin: '10%',
    },
    Image: {
        width: '30%',
        height: 90,
        margin: '3%',
        resizeMode: 'contain'
    }


});


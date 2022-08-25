import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function ComplainBox({ navigation }) {

    return (
        <View style={styles.mainView}>
            <View style={styles.headview}>
                <Text style={styles.ssd}>
                    <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  Complains</Text>
            </View>
            <ScrollView>
                <View>
                    <Image source={require('../../../assets/Images/complain.jpg')} style={styles.img} />
                </View>
                <View style={styles.container}>
                <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
                    <Text style={styles.headingx}>Complain From -</Text>
                    <Text style={styles.heading}> Richard</Text>
                    </View>
                    <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
                    <Text style={styles.headingx}>Email :</Text>
                    <Text style={styles.heading}> richard@gmail.com</Text>
                    </View>
                    <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
                    <Text style={styles.headingx}>Contact # :</Text>
                    <Text style={styles.heading}> 0300-398000000</Text>
                    </View>
                    <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
                    <Text style={styles.headingx}>Complain :</Text>
                    </View>
                    
                    
                    <Text style={styles.txt}>Lorem Ipsum es simplemente . No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</Text>
                </View>
            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        width: '95%',
        height: 550,
        elevation: 10,
        borderRadius: 20,
        marginBottom: '3%',
        padding: 20,
        alignSelf: 'center'
    },
    txt: {
        lineHeight: 20,
        fontSize: 15,
    },
    tableHeader: {
        backgroundColor: '#FFECC5',
    },
    heading: {
        fontSize: 15,
        color: 'black',
        margin: '5%'
    },
    headingx: {
        fontSize: 15,
        color: 'black',
        margin: '5%'
    },
    ssd: {
        fontSize: 20,
        color: 'black',
fontWeight: 'bold'  ,
  },
    headview: {
        padding: 20
    },
    img: {
        width: '60%',
        height: 100,
        marginHorizontal: '20%',
        marginVertical: '7%'
    }
});
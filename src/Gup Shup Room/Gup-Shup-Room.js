import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function GupShupRoom({ navigation }) {

    const [message, setmessage] = useState()

    const sendMessage = () => {
        setmessage(null);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headview}>
                    <Text style={styles.heading}> <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'white'} style={styles.icon} solid />   GUP SHUP</Text>
                    <Text style={styles.heading}> Souhaib</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.inbox}>
                    <Text style={styles.person1}>Hello developer how are you?</Text>
                </View>

                <View style={styles.sent}>
                    <Text style={styles.person1}>Hey Souhaib ! I'm Fine .. What about you?</Text>
                </View>

                <View style={[styles.footer, {marginVertical: setmessage == null ? '60%' : '90%'}]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message !"
                        onChangeText={(e) => setmessage(e)}
                        value={message}
                    />
                    <FontAwesome onPress={sendMessage} name='send' size={30} color={'#F08000'} style={styles.icon} solid />
                </View>
            </ScrollView>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        width: '100%',
        height: '9%',
        backgroundColor: '#F08000',
        justifyContent: 'center'
    },
    headview: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15
    },

    heading: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

    },
    inbox: {
        width: '70%',
        height: 80,
        backgroundColor: '#eee',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: '5%',
        justifyContent: 'center'

    },
    person1: {
        margin: '3%',
        fontSize: 18,
    },
    sent: {
        width: '70%',
        height: 80,
        backgroundColor: '#ffc87c',
        marginHorizontal: '25%',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center'

    },
    footer: {
        width: '95%',
        height: 70,
        alignSelf: 'center',
        // elevation: 10,
        borderRadius: 30,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5
    },
    input: {
        width: '80%',
        fontSize: 20
    },
});
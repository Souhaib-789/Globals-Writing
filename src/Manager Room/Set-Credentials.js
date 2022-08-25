import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
// import {getAuth,  createUserWithEmailAndPassword} from '../Employees Room/Registration/firebase';

// import { Picker } from '@react-native-picker/picker';


export default function SetCredentials({ navigation }) {

    const [email,setemail] =useState('');
    const [password,setpassword]=useState('');

    // const SetCredentials= async () =>{
    //     try{
    //       const auth = getAuth();
    //       await createUserWithEmailAndPassword(auth, email, password);
    //       alert('Credentials are set for new employee !')
    // console.log(auth, email, password)
    //     }catch(err){
    //       console.log(err.message)
    //       alert(err.message)
    
    //     }}

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headview}>
                    <Text style={styles.heading}>
                        <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  SET CREDENTIALS</Text>
                </View>

                <View style={styles.subview}>
                    <Text style={styles.txt}><Entypo name='mail' size={20} color={'black'} style={styles.icon} solid />  Set Email :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= ' Enter email for employee' 
                        onChangeText={setemail}
                        value={email}/>
                    
                    <Text style={styles.txt}><FontAwesome5 name='key' size={20} color={'black'} style={styles.icon} solid />  Set security key :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter security key for employee'
                        onChangeText={setpassword}
                        value={password}/>

                    <TouchableOpacity style={styles.btn}  >
                        <Text style={styles.btntxt}>Set Credentials</Text>
                    </TouchableOpacity>
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
    subview: {
        backgroundColor: 'white',
        margin: '1%',
        padding: '10%'
    },
    heading: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',

    },
    txt:{
        fontSize: 18,
        color: 'black',

    },
    input:{
        width: '100%',
        backgroundColor: '#eeef',
        margin: '5%',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18
    },
    headview: {
        margin: '10%',
    },
    btn: {
        backgroundColor: '#F08000',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
        marginTop: '10%',
        borderRadius: 10,
        width: '100%'
    
      },
      btntxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    
      },

});


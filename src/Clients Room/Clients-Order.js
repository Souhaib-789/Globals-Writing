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
import { Picker } from '@react-native-picker/picker';
// import firestore from '@react-native-firebase/firestore';


export default function ClientsOrder({ navigation }) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [contactno, setcontactno] = useState('');
    const [projectname, setprojectname] = useState('');
    const [weburl, setweburl] = useState('');
    const [category, setcategory] = useState('');
    const [desc, setdesc] = useState('');

    const Order = { name, email, contactno, category, desc, weburl, projectname }
    //Sending data to firestore/CEO portal
    // const SendOrder = () => {
    //     firestore().collection('Clients Order').doc().set(Order)
    //     console.log('Data going ==> ', Order)
    //     navigation.navigate('Thank you')

    // }



    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headview}>
                    <Text style={styles.heading}> <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  What are you looking for ?  </Text>
                </View>
                <Text style={styles.headingx}>Describe your project here</Text>
                <View style={styles.subview}>

                    <View style={{ flexDirection: 'row' }}>
                         <Text style={styles.txt}>  <FontAwesome5 name='user' size={18} color={'black'} style={styles.icon} solid />  Name : </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setname}
                            value={name}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         <Text style={styles.txt}> <FontAwesome5 name='envelope' size={18} color={'black'} style={styles.icon} solid />  Email : </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setemail}
                            value={email}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         <Text style={styles.txt}> <FontAwesome5 name='phone' size={18} color={'black'} style={styles.icon} />  Contact No. : </Text>
                        <TextInput
                            style={[styles.input,{width: '55%'}]}
                            onChangeText={setcontactno}
                            value={contactno}
                        />
                    </View>
                    
                         <Text style={styles.txt}> <FontAwesome5 name='servicestack' size={18} color={'black'} style={styles.icon} />  Category : </Text>
                        <Picker
                            selectedValue={category}
                            dropdownIconColor='black'
                            style={styles.dropdown}
                            onValueChange={(item) =>
                                setcategory(item)
                            }>
                            <Picker.Item label="Select" value=" " style={styles.dropdowntxt} />
                            <Picker.Item label="Content Writing" value="Content Writing" style={styles.dropdowntxt} />
                            <Picker.Item label="Content Marketing" value="Content Marketing" />
                            <Picker.Item label="Graphic Designing" value="Graphic Designing" />
                            <Picker.Item label="Website Development" value="Website Development" />
                            <Picker.Item label="Application Development" value="Application Development" />
                            <Picker.Item label="Games Development" value="Games Development" />
                            <Picker.Item label="SEO Service" value="SEO Service" />
                            <Picker.Item label="ASO Service" value="ASO Service" />
                            <Picker.Item label="Social media marketing" value="Social media marketing" />
                            <Picker.Item label="Google ads" value="Google ads" />


                        </Picker>
                   
                    <View style={{ flexDirection: 'row' }}> 
                    <Text style={styles.txt}> <FontAwesome5 name='tv' size={18} color={'black'} style={styles.icon} />  Project Name : </Text>
                        <TextInput
                            style={[styles.input, {width: '55%'}]}
                            onChangeText={setprojectname}
                            value={projectname}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         <Text style={styles.txt}> <FontAwesome5 name='link' size={18} color={'black'} style={styles.icon} />  Website URL : </Text>
                        <TextInput
                            style={[styles.input, {width: '58%'}]}
                            onChangeText={setweburl}
                            value={weburl}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                         <Text style={styles.txt}> <FontAwesome5 name='clipboard' size={18} color={'black'} style={styles.icon} />  Description : </Text>
                        <TextInput
                            style={[styles.input, {width: '58%'}]}
                            onChangeText={setdesc}
                            value={desc}
                            multiline={true}
                            maxLength={300}
                            numberOfLines={5}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Thank you')} >
                    <Text style={styles.btntxt}>SUBMIT</Text>
                </TouchableOpacity>

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
        fontSize: 23,
        marginTop: '5%',
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: '3%'
    },
    headingx: {
        margin: '2%',
        fontSize: 17,
        color: '#F08000',
        marginHorizontal: '20%'
    },
    input: {
        backgroundColor: 'white',
        width: '60%',
        margin: '3%',
        // elevation: 15,
        borderRadius: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    dropdown: {
        margin: '5%',
    },
    dropdowntxt: {
        fontSize: 16
    },
    subview: {
        marginTop: '5%',
        marginLeft: '5%'
    },
    txt: {
        fontSize: 14,
        color: 'black',
        marginTop: '3%'
    },
    btn: {
        width: '40%',
        backgroundColor: 'black',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '8%',
        borderRadius: 10,
        marginLeft: '50%',

    },
    btntxt: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'

    },
    icon: {
        marginRight: '10%'
    }
});


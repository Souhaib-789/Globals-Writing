import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';


export default function Registration({ navigation }) {

  const [name, setname] = useState('');
  const [country, setcountry] = useState('')
  const [city, setcity] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [securitycode, setsecuritycode] = useState('')
  const [pickervalue1,setpickervalue1]= useState('')

  
  const Register = async () => {
   
      navigation.navigate('Screen1')
  
  }


 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register yourself</Text>

      < View style={styles.footer}>
        <ScrollView>
        <View style={styles.subview}>

          <Text style={styles.txt}>  <FontAwesome5 name='user' size={18} color={'black'} style={styles.icon} solid /> Name : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setname}
            value={name}
          />
          <Text style={styles.txt}> <FontAwesome5 name='envelope' size={18} color={'black'} style={styles.icon} solid /> Email : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setemail}
            value={email}
          />
          <Text style={styles.txt}> <FontAwesome5 name='key' size={18} color={'black'} style={styles.icon} /> Security Code : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setsecuritycode}
            value={securitycode}
          />
              <Text style={styles.txt}> <FontAwesome5 name='city' size={18} color={'black'} style={styles.icon} /> City : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setcity}
            value={city}
          />
          <Text style={styles.txt}> <FontAwesome5 name='globe' size={18} color={'black'} style={styles.icon} /> Country : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setcountry}
            value={country}
          />
           <Text style={styles.txt}> <FontAwesome5 name='phone' size={18} color={'black'} style={styles.icon} /> Phone # : </Text>
          <TextInput
            style={styles.input}
            onChangeText={setphone}
            value={phone}
          />
           <Text style={styles.txt}> <MaterialIcons name='meeting-room' size={18} color={'black'} style={styles.icon} /> Select Department : </Text>
          <Picker
            selectedValue={pickervalue1}
            dropdownIconColor='black'
            onValueChange={(item) =>
              setpickervalue1(item)
            }>
              <Picker.Item label="Select" value="Select"  />
            <Picker.Item label="Content Writing" value="Content Writing"  />
            <Picker.Item label="Graphic designing" value="Graphic designing"  />
            <Picker.Item label="Software development" value="Software development"  />
            <Picker.Item label="SEO / ASO" value="SEO / ASO" />
            <Picker.Item label="Social media marketing" value="Social media marketing" />
          </Picker>

        </View>
        </ScrollView>
        <TouchableOpacity style={styles.btn} onPress={Register}>

          <Text style={styles.btntxt}>REGISTER</Text>


        </TouchableOpacity>
       
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F08000',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
  },

  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: '90%'
  },
  heading: {
    fontSize: 30,
    margin: '3%',
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    backgroundColor: 'white',
    width: 270,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRadius: 3,
    marginLeft: '10%',
    marginBottom: '5%',
    fontSize: 18,
    textAlign: 'center'

  },

  txt: {
    fontSize: 15,
    color: 'black'
  },
  btn: {
    backgroundColor: '#F08000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8%',
    marginTop: '7%',
    borderRadius: 10,
    width: '80%'

  },
  btntxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'

  },
  icon: {
    marginRight: '10%'
  }
});


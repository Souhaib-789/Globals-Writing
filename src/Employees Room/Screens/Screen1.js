import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Screen1({ navigation }) {

  const [pickervalue1, setpickervalue1] = useState('');
  const [pickervalue2, setpickervalue2] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Images/img1.jpg')} resizeMode="cover" style={styles.bgimage}>
        <View style={styles.flatlist}>
          <TouchableOpacity style={styles.profilebtn} onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name='user' size={25} color={'white'} style={styles.icon} solid />
          </TouchableOpacity>
          <View style={styles.FoodCardx} >
            <Picker
              selectedValue={pickervalue1}
              dropdownIconColor='white'
              onValueChange={(item) =>
                setpickervalue1(item)
              }>
              <Picker.Item label="Content Writing" value="Content Writing" style={styles.FoodCardName} />
              <Picker.Item label="Screen Plays" value="Screen Plays" />
              <Picker.Item label="Articles , Blogs etc" value="Articles , Blogs etc" />
            </Picker>
          </View>


          <TouchableOpacity
            underlayColor={'white'}
            activeOpacity={0.8} >
            <View style={styles.FoodCard}>
              <Text style={styles.FoodCardName}>Graphic Designing</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.FoodCardx} >
            <Picker
              selectedValue={pickervalue2}
              dropdownIconColor='white'
              onValueChange={(item) =>
                setpickervalue2(item)
              }>
              <Picker.Item label="Software Dev." value="Software Dev." style={styles.FoodCardName} />
              <Picker.Item label="Website Development" value="Website Development" />
              <Picker.Item label="App Development" value="App Development" />
              <Picker.Item label="Game Development" value="Game Development" />
            </Picker>
          </View>
          <TouchableOpacity
            underlayColor={'white'}
            activeOpacity={0.8} >
            <View style={styles.FoodCard}>
              <Text style={styles.FoodCardName}>SEO / ASO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={'white'}
            activeOpacity={0.8} >
            <View style={styles.FoodCard}>
              <Text style={styles.FoodCardName}>Social media marketing</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>EMPLOYEES PORTAL</Text>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  bgimage: {
    flex: 1
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: '15%',
    marginHorizontal: '5%'
  },
  FoodCard: {
    width: '70%',
    height: 60,
    backgroundColor: '#F08000',
    borderRadius: 20,
    // alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
    marginTop: 30,
    marginHorizontal: 55,
    elevation: 10,
  },
  FoodCardx: {
    width: '70%',
    height: 60,
    backgroundColor: '#F08000',
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center',

    marginBottom: 10,
    marginTop: 30,
    marginHorizontal: 55,
    elevation: 10,
  },
  FoodCardName: {
    alignItems: 'center',
    marginLeft: '5%',
    fontSize: 20,
    color: 'white',
  },
  flatlist: {
    marginTop: '1%'
  },
  profilebtn: {
    backgroundColor: '#800000',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: '80%',
    marginTop: '11%'

  }

});


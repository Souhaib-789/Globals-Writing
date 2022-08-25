import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function ManagerRoom({ navigation }) {

  const rooms = [
    {
      id: 1,
      name: 'Content Writing',
      nextlocation: 'Content Writing Emp'
    },
    {
      id: 2,
      name: 'Graphic Designing',
      nextlocation: 'Graphic Designing Emp'
    },
    {
      id: 3,
      name: 'Software Development',
      nextlocation: 'Software Development Emp'
    },
    {
      id: 4,
      name: 'SEO / ASO',
      nextlocation: 'SEO Emp'
    },
    {
      id: 5,
      name: 'Social Media Marketing',
      nextlocation: 'Social Media Marketing Emp'
    },
  ]


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Images/imgx.jpg')} resizeMode="cover" style={styles.bgimage}>
        <View style={styles.upperheader}>
         
          <TouchableOpacity style={styles.profilebtn} onPress={() => navigation.navigate('Set Credentials')}>
            <Text style={styles.receiveddoc}> Set key  </Text><FontAwesome5 name='key' size={20} color={'black'} style={styles.icon} solid />
          </TouchableOpacity>
        </View>

        <View style={styles.flatlist}>
          <FlatList
            data={rooms}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', item)}
                underlayColor={'white'}
                activeOpacity={0.7} >
                <View style={styles.FoodCard}>
                  <Text key={item.id} style={styles.FoodCardName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )} />


        </View>
        <Text style={styles.heading}>MANAGER PORTAL</Text>

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
  upperheader: {
    flexDirection: 'row',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
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
    marginTop: '10%'
  },
  profilebtn: {
    backgroundColor: '#eee',
    width: 120,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginLeft: '5%',
    marginTop: '7%',
    flexDirection: 'row',
    elevation: 8
  }
  ,
  receiveddoc: {
    color: 'black',
    fontSize: 18,

  }

});


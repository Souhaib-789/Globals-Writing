import React from 'react';
import {StyleSheet,Text,View,ImageBackground,TouchableOpacity,FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



export default function CEORoom({navigation}) {
 


  const rooms = [
    {
      id: 1,
      name: 'General Manager',
      nextlocation: 'Manager Room'
    },
    {
      id: 2,
      name: 'Employees Data',
      nextlocation: 'Employees Data'
    },
    {
      id: 3,
      name: 'Customer feedback',
      nextlocation: 'Customer Feedback'
    },
    {
      id: 4,
      name: 'Complaint Box',
      nextlocation: 'Complaint Box'
    },
    {
      id: 5,
      name: 'Gup Shup Room',
      nextlocation: 'Gup Shup Room'
    },
    {
      id: 6,
      name: 'Set Login Keys',
      nextlocation: 'Set Credentials'
    },
    {
      id: 7,
      name: 'Received Projects',
      nextlocation: 'Received Projects'
    },
  ]



  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../assets/Images/imgx.jpg')} resizeMode="cover" style={styles.bgimage}>
      <View style={styles.upperheader}>
      <Text style={styles.headingx}>25 employees / 7 <Text styele={styles.greentxt}>Online</Text></Text>
      </View>

      <View style={styles.flatlist}>
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.nextlocation)}
              underlayColor={'white'}
              activeOpacity={0.7} >
              <View style={styles.FoodCard}>
                <Text key={item.id} style={styles.FoodCardName}> <Feather name='arrow-right' size={20} color={'white'} style={styles.icon} /> {item.name}</Text>
              </View>
            </TouchableOpacity>
          )} />
      </View>
      <Text style={styles.heading}>C E O  PORTAL</Text>

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
    marginVertical: '10%',
    marginHorizontal: '5%'
  },
  headingx: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: '7%',
    marginHorizontal: '22%'
  },
  FoodCard: {
    width: '65%',
    height: 60,
    backgroundColor: '#F08000',
    borderRadius: 20,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 20,
    elevation: 10,
  },

  FoodCardName: {
    alignItems: 'center',
    marginLeft: '5%',
    fontSize: 18,
    color: 'white',
  },
  flatlist: {
    marginTop: '5%',
    marginBottom: '1%'
  },
  greentxt:{
    color: '#00FF00'}
});


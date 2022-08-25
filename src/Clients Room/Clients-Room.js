import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native';



export default function ClientsRoom({ navigation }) {

  const services = [
    {
      id: 1,
      name: 'Content Marketing',
      img: require('../../assets/Images/c-marketing.jpg')
    },
    {
      id: 2,
      name: 'Content Writing',
      img: require('../../assets/Images/content.jpg')

    },
    {
      id: 3,
      name: 'Graphic Designing',
      img: require('../../assets/Images/graphic.png')

    },
    {
      id: 4,
      name: 'Website Development',
      img: require('../../assets/Images/webdev.jpg')

    },
    {
      id: 5,
      name: 'App Development',
      img: require('../../assets/Images/app.jpeg')

    },
    {
      id: 6,
      name: 'Games Development',
      img: require('../../assets/Images/game.jpeg')

    },
    {
      id: 7,
      name: 'SEO Service',
      img: require('../../assets/Images/seo.jpg')

    },
    {
      id: 8,
      name: 'ASO Service',
      img: require('../../assets/Images/aso.png')

    },
    {
      id: 9,
      name: 'Social media marketing',
      img: require('../../assets/Images/ssm.jpg')

    },
    {
      id: 10,
      name: 'Google Ads',
      img: require('../../assets/Images/ads.jpg')

    },
  ]
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Images/imgx.jpg')} resizeMode="cover" style={{ flex: 1 }}>
        <Image source={require('../../assets/Images/logo.png')} style={styles.logo} />
        <View style={styles.headingview}>
          <Text style={styles.heading}>Services we offer</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu Screen')}>
            <Text style={styles.buttontxt}>
              <Feather name='menu' size={30} color={'black'} style={styles.icon} /></Text></TouchableOpacity>
        </View>
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={'white'}
              activeOpacity={0.8} >
              <View style={styles.FoodCard}>
                <Image source={item.img} style={styles.shortimg} />
                <Text key={item.id} style={styles.FoodCardName}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )} />
        <View style={styles.footer}>
          <Text style={styles.footertxt}>For more details visit</Text>
          <Text style={styles.footertxts}
            onPress={() => Linking.openURL('https://theglobalswriting.com/')}>www.theglobalswriting.com</Text>
        </View>
      </ImageBackground >

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  logo: {
    width: '60%',
    height: 30,
    margin: '5%'
  },
  headingview: {
    margin: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  shortimg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: '4%'
  },
  button: {
    backgroundColor: 'white',
    width: 60,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  buttontxt: {
    fontSize: 17,
    color: 'white'
  },
  FoodCard: {
    width: '80%',
    height: 70,
    backgroundColor: '#ffdab9',
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 10,
    marginTop: 15,
    marginHorizontal: 40,
    elevation: 15,
    flexDirection: 'row',
  },
  FoodCardName: {
    alignItems: 'center',
    fontSize: 20,
    color: 'black',
  },
  footer: {
    margin: '5%',
    alignItems: 'center'
  },
  footertxt: {
    fontSize: 15
  },
  footertxts: {
    fontSize: 15,
    color: 'blue'
  }
});


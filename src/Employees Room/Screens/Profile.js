import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
// import firestore from '@react-native-firebase/firestore';


export default function Profile({ navigation }) {

  //Select image for profile
const [image, setimage] = useState('https://desertfoothillsgardens.com/wp-content/uploads/2019/06/man-icon.png');
  const selectFile=()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        setimage(image.path);
      });
   }


//Fetching Users data from firestore
  // const fetchdata = firebase.firestore().collection('Users');
  // const [usersdata, setUsers] = useState([]);
  // useEffect(() => {
  //   fetchdata.onSnapshot(e => {
  //     e.forEach(documentSnapshot => {
  //       setUsers(documentSnapshot.data())
  //     })})
  //   console.log("Users =>", usersdata);
  // }, [usersdata]);



  //Select document to send
const [docs, setdoc] = useState( );
  const openDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setdoc(res);
      console.log(
       'File uri => ' , res.uri,
       'File type => ' , res.type,
       'File name => ' ,  res.name,
       'File size => ' , res.size
      );
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('cancelled')
      }
      else {
        throw error;
      }
    }
  }


  //Sending document to manager
  // const Senddoc = () => {
  //   firestore().collection('Documents').doc().set({
  //     docs   
  //   })
  //   console.log('Data going ==> ', docs)
  //   alert('File shared to manager!')
    
  // }


  return (
    <View style={styles.container}>
      <View style={styles.headview}>
        <Text style={styles.heading}>
          <FontAwesome5 onPress={() => navigation.goBack()} name='arrow-left' size={22} color={'black'} style={styles.icon} solid />  PROFILE</Text>
      </View>

      <TouchableOpacity onPress={selectFile}>
        <Image source={{uri: image}} style={styles.img} />
      </TouchableOpacity>
      {/* <View style={styles.subdiv}>
        <Text style={styles.txt}>{usersdata.name}</Text>
      </View> */}

      <View style={styles.subdiv2}>
        <Text style={styles.FoodCardName}> <FontAwesome5 name='file' size={22} color={'black'} style={styles.icon} /> File share system : </Text>
        <TouchableOpacity style={styles.filebtn}
          onPress={openDocumentFile}>
          <Text style={styles.filetxt}>Choose file   <FontAwesome5 name='plus' size={20} color={'grey'} style={styles.icon} /></Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btntxt} >SUBMIT</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  FoodCardName: {
    alignItems: 'center',
    fontSize: 20,
    color: 'black',
    margin: '5%'
  },
  headview: {
    marginBottom: '15%',
    marginRight: '60%',
  },
  head: {
    fontSize: 25,
    color: 'black',
    position: 'absolute',
    right: '75%',
    bottom: '90%',
    fontWeight: 'bold',

  },
  container: {
    alignItems: "center",
    height: '100%',
    backgroundColor: '#fff',
    marginBottom: '20%',
  },
  img: {
    width: 180,
    height: 170,
    borderRadius: 90

  },
  heading: {
    fontSize: 20,
    marginTop: '10%',
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: '8%'
  },
  filetxt: {
    fontSize: 19,

  },
  filebtn: {
    marginHorizontal: '18%',
    marginVertical: '2%'
  },
  txt: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 2,
    color: 'black'
  },
  txtx: {
    textDecorationStyle: "solid",
    fontSize: 20,
    margin: 2,
    color: '#FF1717'
  },
  subdiv: {
    alignItems: 'center',
    margin: 20
  },
  subdiv2: {
    // marginTop: 50,
    // marginRight: "50%"
  },

  btn: {
    width: 150,
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8%',
    marginTop: '19%',
    borderRadius: 10,
    marginLeft: '50%',

  },
  btntxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10

  },

});



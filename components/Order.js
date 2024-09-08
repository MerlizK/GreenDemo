/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

export default function Menu({text}) {
  const [menuAva,setMenuAva] = useState(false);
  const [menuIn,setMenuIn] = useState(true);
  const toggleMenuAva = () => setMenuAva(!menuAva);
  const toggleMenuIn = () => setMenuIn(!menuIn);

  return (
  <View>
  {menuIn ? ( 
  <View style={styles.container}>
    <View>
    <Entypo name="location-pin" size={24} color="black" />
    </View>
    <View style={{paddingRight:60}}>
      <Text style={{fontSize:16}}>ออเดอร์ที่ {text}</Text>
      {menuAva ? (
        <View style={{paddingLeft:30}}>
          <Text>เมนูที่ 1</Text>
          <Text>จำนวนที่สั่ง</Text>
          <Text>Option</Text>
          <Text>Comment</Text>
        </View>
        
      ):
      null
      }
    </View>
    <View>
      <Text>ค่าอาหาร</Text>
      {menuAva ? ( <Text>ราคา</Text> ) : (null) }
    </View>
    <View>
      <Text>xx.xx บาท</Text>
      {menuAva ? ( <Text>xx.xx บาท</Text> ) : (null) }
    </View>
    <TouchableOpacity onPress={toggleMenuAva} style={menuAva ? styles.menuYButton : styles.menuXButton}>
      {menuAva ? 
      (<Entypo name="chevron-small-down" size={28} color="black" />):
      (<Entypo name="chevron-small-right" size={28} color="black" />)
      }
    </TouchableOpacity>
  </View>
  ) : null }
  {menuIn ? ( 
  <View>
  {menuAva ? ( 
    <TouchableOpacity onPress={toggleMenuIn} style={styles.addButton}>
      <Text style={{color:'white'}}>ทำอาหารเสร็จแล้ว</Text>
    </TouchableOpacity>
    
    ) : null}
  </View>
  ) : null}
  </View>
)};

const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    padding: 5,
    // backgroundColor: 'lightblue',
    // borderBottomColor: '#009951',
    // borderBottomWidth: 2,
    marginVertical: 20
    ,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuYButton: {
    // backgroundColor:'#009951',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  menuXButton: {
    // backgroundColor:'black',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  addButton: {
    backgroundColor: '#2C2C2C',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    bottom: 0,
    alignSelf: 'flex-end',
    marginTop: 40,
    marginHorizontal: 10,
  },
});


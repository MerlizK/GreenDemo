import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import SHeader from './components/SHeader';
import OrderH from './components/OrderH';

import Entypo from '@expo/vector-icons/Entypo';

export default function History() {
  const [shopAva,setShopAva] = useState(true);
  const toggleShopAva = () => setShopAva(!shopAva)

  return (
    <View style={styles.container}>
      <ScrollView>
      <SHeader text={`< ประวัติการทำอาหาร `}/>
        <View>
          <View style={{alignItems: 'center',marginVertical: 20}}>
            <Text style={{fontSize:16}}>เลือกวันที่่</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginTop:10,fontSize:16, fontWeight: 'bold'}}>19 July 2024</Text>
              <Entypo style={{marginTop:10}} name="chevron-small-down" size={24} color="black" />

            </View>
          </View>
          <View style={{marginBottom:10,marginLeft: 5,paddingRight: 71,flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize:16}}>รายได้รวม</Text>
            <Text style={{fontSize:16}}>xx บาท</Text>
          </View>
          <OrderH text='1234'/>
          <OrderH text='1235'/>
          <OrderH text='1236'/>
          <OrderH text='1237'/>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 35,
    marginBottom: 10,
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 46,
    fontWeight: 'bold',
    // borderBottomColor: 'green',
    // borderBottomWidth: 2,
  },
  menuYButton: {
    backgroundColor:'#009951',
    marginLeft: 30,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  menuXButton: {
    backgroundColor:'#C00F0C',
    marginLeft: 30,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  addMenuButton: {
    width: 150, 
    height:35,
    padding:5,
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    marginTop: 100,
  }
});

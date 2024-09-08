import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EditMenu() {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.title}>{`< ชื่อเมนู`}</Text>
      </TouchableOpacity>

      <View style={{padding:10,justifyContent:'center',alignSelf:'center',backgroundColor: '#EEEEEE',width: 360, height: 40}}>
        <TextInput style={{fontSize: 16}} placeholder='ก๋วยเตี๋ยวน้ำตก'/>
      </View>

      <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginVertical:20,backgroundColor: '#EEEEEE',width: 300, height: 200, borderRadius: 10}}>
        <Text>เพิ่มรูปภาพ</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold',alignSelf: 'flex-start'}}>ราคา</Text>
        <View style={{alignSelf:'center',marginHorizontal:5,backgroundColor: '#EEEEEE',width: 40, height: 20}}>
          <TextInput style={{fontWeight: 'bold', textAlign:'center'}} placeholder='xx.xx'/>
        </View>
        <Text style={{fontWeight: 'bold', alignSelf: 'flex-start'}}>บาท</Text>
      </View>
      


      <View style={{marginVertical: 10}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>Option (เลือกอย่างน้อย 1 อย่าง)</Text>
          <Text>Setting</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text>เนื้อสด</Text>
          <Text>+xx.xx บาท</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text>เนื้อเปื่อย</Text>
          <Text>+xx.xx บาท</Text>
        </View>
      </View>
      
      <View style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>Option (ไม่จำเป็นต้องเลือก)</Text>
          <Text>Setting</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text>เพิ่มเนื้อ</Text>
          <Text>+xx.xx บาท</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text>เพิ่มลูกชิ้น</Text>
          <Text>+xx.xx บาท</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AddOption')} style={styles.addButton}>
        <Text style={{color:'white'}}>เพิ่ม Option</Text>
      </TouchableOpacity>

      <Text style={{fontWeight: 'bold',alignSelf: 'flex-start'}}>คำอธิบาย</Text>

      <View style={{alignSelf:'center',marginVertical:20,padding:10,borderRadius:10, backgroundColor: '#EEEEEE',width: 360, height: 150}}>
        <TextInput 
        placeholder='มัสมั่นแกงแก้วตา หอมยี่หร่ารสร้อนแรง ชายใดได้กลืน
แกง แรงอยากให้ใฝ่ฝันหา ยำใหญ่ใส่สารพัด วางจานจัด
หลายเหลือตรา รสดีด้วยน้าปลา ญี่ปุ่นเล้าย้ายวนใจ 
ตับเหล็กลวกหล่อนต้ม เจือน้ำาส้มโรยพริกไทย โอชาจะ
หาไหน ไม่มีเทียบเปรียบมือนาง หมูแนมแหลมเลิศรส'/>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white'}}>ลบเมนู</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white'}}>บันทึกเมนู</Text>
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 36,
    fontWeight: 'bold',
    // borderBottomColor: 'green',
    // borderBottomWidth: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
    marginVertical: 50,
    padding: 10,
    width: 130,
    borderRadius: 10
  },
  addButton: {
    backgroundColor: '#2C2C2C',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    bottom: 0,
    alignSelf: 'flex-end',
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

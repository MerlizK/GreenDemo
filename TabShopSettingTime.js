import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Daybutton = ({day,onPress}) => {
  const [showDay,setshowDay] = useState(true);
  const toggleshowDay = () => setshowDay(!showDay);

  return (
  <TouchableOpacity 
  style={showDay? ({margin: 5,borderRadius: 50,justifyContent: 'center',backgroundColor: '#009951', width: 35,height: 35 }) :
  ({margin: 5,borderRadius: 50,justifyContent: 'center',backgroundColor: '#D9D9D9', width: 35,height: 35 })  }
  onPress={() => { onPress(); toggleshowDay();}}
  >
    <Text style={showDay? ({fontSize: 16,color:'white',textAlign: 'center'}) :
    ({fontSize: 16,color:'#767676',textAlign: 'center'}) }>
    {day}
    </Text>
  </TouchableOpacity>

)};

const Showday = ({day}) => {
  return (
  <View style= {{width: 200,justifyContent:'space-between',flexDirection: 'row', marginVertical: 8}}>
        <View>
          <Text>
          {day}
          </Text>
        </View>
        <View>
          <TouchableOpacity style ={{alignItems:'center',paddingHorizontal: 5,backgroundColor: '#D9D9D9',width: 100}}>
            <Text>
            9.00 to 17.00
            </Text>
          </TouchableOpacity>
        </View>
      </View> 
)};

export default function TabTime() {

  const [showMonday,setShowMonday] = useState(true);
  const [showTuesday,setShowTuesday] = useState(true);
  const [showWednesday,setShowWednesday] = useState(true);
  const [showThursday,setShowThursday] = useState(true);
  const [showFriday,setShowFriday] = useState(true);
  const [showSaturday,setShowSaturday] = useState(true);
  const [showSunday,setShowSunday] = useState(true);

  const onPressMonday = () => setShowMonday(!showMonday)
  const onPressTuesday = () => setShowTuesday(!showTuesday)
  const onPressWednesday = () => setShowWednesday(!showWednesday)
  const onPressThursday = () => setShowThursday(!showThursday)
  const onPressFriday = () => setShowFriday(!showFriday)
  const onPressSaturday = () => setShowSaturday(!showSaturday)
  const onPressSunday = () => setShowSunday(!showSunday)

  const [showSchedule,setshowSchedule] = useState(true);
  const [showCalendar,setshowCalendar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ร้านที่ 1</Text>
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center',}}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{color:'white'}}>ตั้งเวลา</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{color:'white'}}>ปฏิทิน</Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style= {{flexDirection: 'row', marginVertical: 60}}>
        <Daybutton onPress={onPressSunday} day = 'S'/>
        <Daybutton onPress={onPressMonday} day = 'M'/>
        <Daybutton onPress={onPressTuesday} day = 'T'/>
        <Daybutton onPress={onPressWednesday} day = 'W'/>
        <Daybutton onPress={onPressThursday} day = 'T'/>
        <Daybutton onPress={onPressFriday} day = 'F'/>
        <Daybutton onPress={onPressSaturday} day = 'S'/>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          { showSunday ? <Showday day = 'Sunday'/> : null}
          { showMonday ? <Showday day = 'Monday'/> : null}
          { showTuesday ? <Showday day = 'Tuesday'/> : null}
          { showWednesday ? <Showday day = 'Wednesday'/> : null}
          { showThursday ? <Showday day = 'Thursday'/> : null}
          { showFriday ? <Showday day = 'Friday'/> : null}
          { showSaturday ? <Showday day = 'Saturday'/> : null}
        </View>
        <TouchableOpacity style={{width: 70 ,marginHorizontal:10 ,marginVertical: 7, backgroundColor:'black', height:28, alignItems:'center',justifyContent: 'center',borderRadius: 10}}>
          <Text style={{color:'white'}}>Apply All</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={{color:'white'}}>ยืนยันการตั้งเวลา</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 5
  },
  confirmButton: {
    backgroundColor: '#009951',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    position: 'absolute',
    bottom: 100,
  },
});

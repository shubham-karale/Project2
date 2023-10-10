import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import CustomList from './components/CustomList';
import FlatListPractice2 from './components/FlatListPractice2';
import GridLayout from './components/GridLayout';
import FlatListFetch from './components/FlatListFetch';
import SectionTest from './components/SectionTest';

export default function App() {

  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
    },
    {
      id: 2,
      name: 'Ervin Howell',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
    }

  ]


  return (
    <View>
      {/* <Text style = {styles.heading}>FlatList Tutorial</Text>

      <FlatList data={users} renderItem={({item}) => <Text style = {styles.listText}>{item.name}</Text> }  /> */}

      {/* <CustomList/> */}
{/* 
      <FlatListPractice2/> */}

      {/* <GridLayout /> */}

      {/* <FlatListFetch props = {item} /> */}

      <SectionTest />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText : {
    fontSize : 20,
    color : 'red',
    padding : 10,
    margin : 10,
    backgroundColor : 'yellow',
  },
  heading : {
    fontSize : 30,
    color : 'blue',
    padding : 10,
    marginTop : 30,
    textAlign : 'center',
    marginHorizontal : 20,
    backgroundColor : 'pink',
  }
});

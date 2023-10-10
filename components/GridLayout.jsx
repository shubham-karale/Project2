import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GridLayout = () => {

    const users = [
        { name: 'Lucifer', id: 1 },
        { name: 'Amygdil', id: 2 },
        { name: 'Chloe', id: 3 },
        { name: 'Espaniazola', id: 4 },
        { name: 'Linda', id: 5 },
        { name: 'Mez', id: 6 },
        { name: 'John Dekker', id: 7 },
        { name: 'Charolette', id: 8 },
        { name: 'Lucifer', id: 9 },
        { name: 'Amygdil', id: 10 },
        { name: 'Chloe', id: 11 },
        { name: 'Espaniazola', id: 12 },
        { name: 'Linda', id: 13 },
        { name: 'Mez', id: 14 },
        { name: 'John Dekker', id: 15 },
        { name: 'Charolette', id: 16 },
        
    ]

  return (
    <View>
      <Text style={styles.heading}>GridLayout</Text>

      <View style={styles.gridBox}>
         {
                users.map((user) => {
                    return (
                        <Text style={styles.item} key={user.id}>{user.name}</Text>
                    )
                })
         }
      </View>
    </View>
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  gridBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5c5b5b",
    marginLeft: 10,
    marginTop: 30,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#219ebc",
    textAlign: "center",
    margin: 5,
    padding: 5,
    color: "#fff",
    width: 100,
    height: 100,
    textAlignVertical: "center",
    fontSize: 20,
  },
});

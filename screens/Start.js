import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Start() {
  const navigation = useNavigation(); 
  const titlePress = () => {
    console.log("Click on titel -> start app");
    navigation.navigate('Login'); // Start App -> navigation to main page
  };

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);


  return (
    <View style={styles.container}>
        
        <View>
          <Text style={styles.title}>To Do </Text>
          <Text style={styles.title}>Manager </Text>
          <View style={styles.rectangle} />
        </View>

      <View style={[styles.loadContainer, styles.horizontal]}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <TouchableOpacity onPress={titlePress} style={styles.startButton}>
        <Text style={styles.startButtonText}>Click here to start creating</Text>
      </TouchableOpacity>
    )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c3b2e",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 56,
    fontFamily: "times new roman",
    color: "white",
  },

  rectangle: {
    marginTop: 10,
    width: 300,
    height: 40,
    backgroundColor: "#b46617",
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 40,
  },

  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },

  loadContainer: 
  {
    padding: 30,
  }

});
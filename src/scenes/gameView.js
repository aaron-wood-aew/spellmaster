import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Moment from 'react-moment'
import { Text } from "react-native-web";

export default function homeView() {
  const [state, setState] = useState({
    activeGame: false,
    letter: '',
    word: '',
    gameOver: false,
    activePlayer: 0,
    prevPlayer: 0,
    turnCounter: 0,
    clockReset: false
  })

  //may not need this one if I am getting info from Firebase
  // const [playerList, setPlayerList] = useState([])
  const [timerDone, setTimerDone] = useState(false)
  const [show, setShow] = useState(false)
  const [challenge, setChallenge] = useState(false)
  const [winChallenge, setWinChallenge] = useState("")

  const getWordsFromDictionary = () => {
    if (word.length >= 4) {
      //insert logic to grab the available words from the google firebase storage bucket.  Ensure an empty result is returned as a result.
    }
  }

  const 
  return (
    <View style={styles.container}>
      
    </View>
  )
}
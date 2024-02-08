import { StatusBar } from 'expo-status-bar';
import { Greetings } from "./Greeting.js"
import { Text } from "react-native";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useColorValue } from './CounterProvider.js';
import { useSetColorValue} from './CounterProvider.js';

export function HomeScreen() {
  const colors = ["red", "blue"]
  const color = useColorValue()
  const setColor = useSetColorValue()
  
  // const [count, incrCount] = useState(0)

  return (
    <View style={styles.container} onTouchEnd={() => {
      setColor(color+1)}
    }>

      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.conter} >{color}</Text>
      <Greetings name="test" color={colors[color%2]} count={color} />
      <Greetings name="test" color={colors[(color+1)%2]} count={color} />

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  conter: {
    // flexWrap: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 200,
  },
});

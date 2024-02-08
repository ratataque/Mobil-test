import { View } from 'react-native';
import { Text } from "react-native";
import { useColorValue, useSetColorValue } from './CounterProvider';

export function DetailsScreen() {
  const color = useColorValue()
  const setColor = useSetColorValue()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onTouchEnd={() => {setColor(color+1)}}>
      <Text>Details Screen {color}</Text>
    </View>
  );
};

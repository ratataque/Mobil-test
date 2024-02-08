import { Text } from "react-native";

export function Greetings({name, color, count}) {
  return (
    <Text style={ {color} }>Hello {name} {count}</Text>
  );
};

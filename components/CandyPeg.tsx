import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  candy: string;
}

export const CandyPeg = (props: Props) => {
  const { candy } = props;
  const [color, setColor] = useState<string>("#E7E9EB");

  useEffect(() => {
    switch (candy) {
      case "yellow":
        setColor("yellow");
        break;
      case "red":
        setColor("red");
        break;
      case "green":
        setColor("green");
        break;
      case "orange":
        setColor("orange");
        break;
      case "blue":
        setColor("blue");
        break;
      case "purple":
        setColor("purple");
        break;
      default:
        setColor("#E7E9EB");
        break;
    }
  }, []);
  return (
    <View
      style={{
        height: 40,
        width: 40,
        backgroundColor: color,
        borderRadius: 100,
        marginHorizontal: 5,
      }}
    ></View>
  );
};

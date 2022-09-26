import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useBoardContext } from "../contexts/BoardContext";

interface Props {
  candy: string;
}

export const CandySlot = (props: Props) => {
  const { candy } = props;
  // const [color, setColor] = useState<string>("#E7E9EB");

  // useEffect(() => {
  //   // console.log(candy);

  //   switch (candy) {
  //     case "yellow":
  //       console.log("yellow");
  //       setColor("yellow");
  //       break;
  //     case "red":
  //       console.log("red");
  //       setColor("red");
  //       break;
  //     case "green":
  //       console.log("green");
  //       setColor("green");
  //       break;
  //     case "orange":
  //       console.log("orange");
  //       setColor("orange");
  //       break;
  //     case "blue":
  //       console.log("blue");
  //       setColor("blue");
  //       break;
  //     case "purple":
  //       console.log("purple");
  //       setColor("purple");
  //       break;
  //     default:
  //       setColor("#E7E9EB");
  //       break;
  //   }
  // }, [refetch]);
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: candy,
        borderRadius: 100,
        marginHorizontal: 10,
      }}
    ></View>
  );
};

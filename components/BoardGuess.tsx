import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Guess, useBoardContext } from "../contexts/BoardContext";
import { CandySlot } from "./CandySlot";
import { ScorePegs } from "./ScorePegs";

interface Props {
  guess: Guess;
}

export const BoardGuess = (props: Props) => {
  const { guess } = props;
  const { refetch } = useBoardContext();
  const [candies, setCandies] = useState<any>(null);
  const [pegs, setPegs] = useState<string[]>([]);

  useEffect(() => {
    const candies = guess.candySlots.map((candy, index) => (
      <CandySlot key={index} candy={candy} />
    ));
    setCandies(candies);
    setPegs(guess.scorePegs);
  }, [refetch]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginHorizontal: guess.id === 9 ? 9 : 12,
        }}
      >
        {guess.id + 1}
      </Text>
      {candies}
      <View>
        <ScorePegs color={pegs} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

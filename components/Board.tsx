import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useBoardContext } from "../contexts/BoardContext";
import { BoardGuess } from "./BoardGuess";

export const Board = () => {
  const { board, refetch } = useBoardContext();
  const [guessList, setGuessList] = useState(null);

  useEffect(() => {
    const guessList = board.map((guess) => (
      <BoardGuess key={guess.id} guess={guess} />
    ));
    setGuessList(guessList);
  }, [refetch]);

  return <View style={styles.container}>{guessList}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: "#fff",
    width: "100%",
    height: "67%",
  },
});

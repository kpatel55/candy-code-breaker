import { Button, Icon, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { candyList, useBoardContext } from "../contexts/BoardContext";
import { CandyPeg } from "./CandyPeg";
import { LoserModal } from "./LoserModal";
import { WinnersModal } from "./WinnersModal";

export const Selection = () => {
  const [counter, setCounter] = useState<number>(0);
  const { board, setBoard, turn, setTurn, refetch, setRefetch, compGuess } =
    useBoardContext();
  const [winVisible, setWinVisible] = useState<boolean>(false);
  const [loseVisible, setLoseVisible] = useState<boolean>(false);

  const handleWinner = () => {
    setRefetch(!refetch);
    compGuess.current = [...Array(4).keys()].map(
      () => candyList[Math.floor(Math.random() * 4)]
    );
    setWinVisible(!winVisible);
  };
  const handleLoser = () => {
    setRefetch(!refetch);
    compGuess.current = [...Array(4).keys()].map(
      () => candyList[Math.floor(Math.random() * 4)]
    );
    setLoseVisible(!loseVisible);
  };

  const handleBack = () => {
    if (counter > 0) {
      const currentBoard = board;
      currentBoard[turn].candySlots[counter - 1] = "#E7E9EB";
      setBoard(currentBoard);
      setCounter(counter - 1);
      setRefetch(!refetch);
    }
  };

  const handlePress = (candy) => {
    if (counter < 4) {
      const currentBoard = board;
      currentBoard[turn].candySlots[counter] = candy;
      setBoard(currentBoard);
      setCounter(counter + 1);
      setRefetch(!refetch);
    }
  };

  const handleCheck = () => {
    if (counter === 4) {
      let currentBoard = board;
      let currentTurn = turn;

      if (
        JSON.stringify(currentBoard[turn].candySlots) ===
        JSON.stringify(compGuess.current)
      ) {
        currentBoard = [...Array(10).keys()].map((el) => ({
          id: el,
          candySlots: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
          scorePegs: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
        }));
        currentTurn = 0;
        setWinVisible(true);
      } else if (turn + 1 === 10) {
        currentBoard = [...Array(10).keys()].map((el) => ({
          id: el,
          candySlots: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
          scorePegs: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
        }));
        currentTurn = 0;
        setLoseVisible(true);
      } else {
        let copyComp = [];
        let scorePegs = currentBoard[turn].candySlots.flatMap(
          (candy, index) => {
            if (candy === compGuess.current[index]) {
              return "black";
            }
            copyComp = [...copyComp, compGuess.current[index]];
            return "#E7E9EB";
          }
        );

        currentBoard[turn].candySlots.forEach((candy, index) => {
          if (copyComp.includes(candy)) {
            copyComp.splice(copyComp.indexOf(candy), 1);

            // @ts-ignore
            scorePegs[index] = "red";
          }
        });
        currentBoard[turn].scorePegs = scorePegs;
        currentTurn += 1;
      }

      setBoard(currentBoard);
      setTurn(currentTurn);
      setCounter(0);
      setRefetch(!refetch);
    }
  };

  const allCandies = candyList.map((candy) => (
    <Pressable key={candy} onPress={handlePress.bind(this, candy)}>
      <CandyPeg candy={candy} />
    </Pressable>
  ));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          {allCandies}
          <Button
            onPress={handleBack}
            disabled={counter === 0 ? true : false}
            buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
            containerStyle={{
              // width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Icon name="back" type="antdesign" color="white" />
          </Button>
        </View>
        <Button
          title="Check Guess"
          onPress={handleCheck}
          disabled={counter === 4 ? false : true}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={{
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      </View>
      <WinnersModal visible={winVisible} handleClose={handleWinner} />
      <LoserModal visible={loseVisible} handleClose={handleLoser} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  row: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Dialog, Divider, Text } from "@rneui/themed";
import { StyleSheet } from "react-native";

interface Props {
  visible: boolean;
  handleClose: () => void;
}

export const RulesModal = (props: Props) => {
  const { visible, handleClose } = props;
  return (
    <Dialog isVisible={visible} onBackdropPress={handleClose}>
      <Dialog.Title title="Rules" />
      <Divider />
      <Text style={styles.heading}>Goal</Text>
      <Text>
        The computer has selected a secret combination of 4 candies, and you
        have to guess that combination in 10 or fewer tries to win!
      </Text>
      <Text style={styles.heading}>Instructions</Text>
      <Text style={styles.paragraph}>
        To create your guess, press each candy until you've filled the row with
        your combination. Once you're happy with your combination, press the
        "Guess" button.
      </Text>
      <Text style={styles.paragraph}>
        Each time you guess, the computer will use score pegs to let you know
        how close that guess is.
      </Text>
      <Text style={styles.paragraph}>
        A black score peg indicates that one of your pegs is the right color in
        the right position, whereas a red score peg indicates that one of your
        pegs is the right color in the wrong position.
      </Text>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
    paddingVertical: 10,
  },
  paragraph: {
    paddingVertical: 5,
  },
});

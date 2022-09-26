import { Dialog, Divider } from "@rneui/themed";
import { Text } from "react-native";

interface Props {
  visible: boolean;
  handleClose: () => void;
}

export const WinnersModal = (props: Props) => {
  const { visible, handleClose } = props;

  return (
    <Dialog isVisible={visible} onBackdropPress={handleClose}>
      <Dialog.Title
        title="Congragulations!"
        titleStyle={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Divider />
      <Text
        style={{ paddingVertical: 10, marginLeft: "auto", marginRight: "auto" }}
      >
        You Win!
      </Text>
    </Dialog>
  );
};

import { Button, Header, Icon } from "@rneui/themed";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RulesModal } from "./RulesModal";

export const Nav = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        backgroundColor="#fff"
        leftComponent={{
          text: "CCB",
          style: styles.heading,
        }}
        rightComponent={
          <Button
            onPress={handleVisible}
            size="sm"
            title="Rules"
            type="clear"
          />
        }
      />
      <RulesModal visible={visible} handleClose={handleVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

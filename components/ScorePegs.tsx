import { StyleSheet, View } from "react-native";

interface Props {
  color: string[];
}

export const ScorePegs = (props: Props) => {
  const { color } = props;
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: color[0],
            borderRadius: 100,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: color[1],
            borderRadius: 100,
            marginHorizontal: 5,
          }}
        ></View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: color[2],
            borderRadius: 100,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            height: 12,
            width: 12,
            backgroundColor: color[3],
            borderRadius: 100,
            marginHorizontal: 5,
          }}
        ></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

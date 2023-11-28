import React, { FC } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import { PostImage as PostImageType, RootStackParams } from "../../types";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

const PostImage: FC<PostImageType> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewPress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
  },
  button: {
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginTop: 8,
  },
  buttonText: {
    color: "#8a9bdb",
    fontSize: 16,
  },
});

export default PostImage;

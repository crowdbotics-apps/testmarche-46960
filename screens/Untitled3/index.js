import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.XlsdaPdh}></View><ImageBackground style={styles.ENGEKpuX} source={{
        uri: "https://dk381fmjr1u8j.cloudfront.net/d59b13402879b40555645880a461f2976f5e2bf1/studio/static/media/cb-symbol-new-black.e6c007698becdbf89c08.png"
      }} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  XlsdaPdh: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  ENGEKpuX: {
    width: 107,
    height: 62
  }
});
export default Untitled3;
import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

interface ScreensProps {
  children: ReactNode;
}

const Screens = ({ children }: ScreensProps) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  );
};

export default Screens;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainer:{
    flexGrow: 1,
  }
});
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      <ScrollView>
        <Body />
      </ScrollView>
      {
        //<Footer />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

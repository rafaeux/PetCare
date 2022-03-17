import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      { //<Body />
        //<Footer />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d4e1'
  }
});

export default App;

import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import Body from './components/Body';

const New = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Header />
        <ScrollView>
          <Body />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7a1745'
    }
  });
  
  export default New;
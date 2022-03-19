import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';

const New = () => {
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
  
  export default New;
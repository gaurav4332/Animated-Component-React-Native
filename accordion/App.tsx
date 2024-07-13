import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import { faqs } from './src/constants/data'
import { Accordion } from './src/components/Accordion'


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor="#61dafb" 
      barStyle='light-content' />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header />
        {faqs.map((item) => {
          return (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: "#151515",
  },
  contentContainer: {
    paddingTop: 40,
    gap: 10,
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  subTitle: {
    color: "#585c5c",
  },
})
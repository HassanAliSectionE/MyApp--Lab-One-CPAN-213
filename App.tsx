import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>Hello, I'm [Hassan Ali]!</Text>
        <Text style={styles.info}>Student ID: [n10728997]</Text>
        <Text style={styles.info}>Program: [Computer Programming]</Text>

        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <Text style={styles.goal}>• Learn React Native fundamentals</Text>
          <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
          <Text style={styles.goal}>• To improve in the field of making application</Text>
          <Text style={styles.goal}>• Deploy apps to app stores</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',  
  },
  header: {
    backgroundColor: '#3498db',  
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',  // fixed color
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#8e44ad',  // fixed color
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',  // fixed color
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: '#34495e',  // fixed color
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default App;


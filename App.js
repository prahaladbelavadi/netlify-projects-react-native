import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfProjects from './components/ListOfProjects';

export default function App() {
  return (
    <View style={styles.container}>
      <ListOfProjects />


      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

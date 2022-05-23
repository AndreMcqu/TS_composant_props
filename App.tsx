import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formater from './composent/formater';


const App = (props: firstprops) => {
  return (
    <View style={styles.container}>
      <Formater title='The Begining' text='it was a good day' />  
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

export default App;
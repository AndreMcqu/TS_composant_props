import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface firstprops {
    title: string;
    text: string;
}


const Formater = ({ title, text }: firstprops) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{text}</Text>
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


export default Formater;
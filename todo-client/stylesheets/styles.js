import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1032',
        paddingTop: StatusBar.currentHeight || 50,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
    welcomeTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "#F5FFFA",
        marginTop: 20,
    },
    innerText: {
        color: "#FFD700",
        textDecorationLine: 'underline',
        padding: 100,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    welcomeImage: {
        marginTop: 60,
        marginVertical: 50,
        width: 300,
        height: 300,
        resizeMode: 'cover',
        borderColor: "#F5FFFA",
    },
    bottomWelcomeView: {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    bottomWelcomeText: {
        fontSize: 13,
        color: "#F5FFFA",
        // textAlign: 'center',
    },

    // todo page styles
    todoTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#F4D35E',
    },
    belowTitle: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 16,
        color: '#F5FFFA',
    },
    todoView: {
        borderWidth: 1,
        borderColor: '#F5FFFA',
        color: '#F5FFFA',
        borderRadius: 5,
        padding: 5gst,
    },

});

export default styles;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginView from './src/scenes/loginView';
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginView />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class ModalBackground extends Component {
    render() {
        return (
            <View
                style={ styles.container }
            >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        height: 100 + '%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
});

export default ModalBackground;
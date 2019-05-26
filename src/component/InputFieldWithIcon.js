import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {  Icon } from 'react-native-elements';

class InputFieldWithIcon extends Component{
    render() {
        const {fieldName, iconName} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.iconArea}>
                    <Icon 
                        name={iconName}
                        size={40}
                        color='#1c388c'
                    />
                </View>
                <View style={styles.inputArea}>
                    <TextField
                        label={fieldName}
                        value=''
                        labelHeight={28}
                        containerStyle={{ position: 'absolute', top: 0, bottom: 0, left: 10, right: 0, }}
                    />
                </View>
            </View>
        );
    }
}

InputFieldWithIcon.prototypes = {
    fieldName: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
    },
    iconArea: {
        width: 20 + "%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputArea: {
        width: 70 + "%",
    },
});

export default InputFieldWithIcon;
import React , { Component } from 'react';
import { Dimensions, Modal, StyleSheet, Text, TextInput,  View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import ModalBackground from './ModalBackground';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const SCRENN_WIDTH = Dimensions.get('window').width;
const SCRENN_HEIGHT = Dimensions.get('window').height;

@observer
class ToDoItemUpdateModal extends Component {

    @observable editingToDoItemTitle = '';

    componentDidUpdate() {
        if(this.editingToDoItemTitle || !this.props.isShow) return;
        this.editingToDoItemTitle = this.props.selectedToDoItem.title;
    }

    onChangeText = ( text ) => {
        this.editingToDoItemTitle = text;
    }

    updateToDoItemHandler = () => {
        this.props.updateToDoItem(this.props.selectedToDoItem.id, this.editingToDoItemTitle);
        this.closeModal();
    }

    closeModal = () => {
        this.props.closeModal();
        this.editingToDoItemTitle = '';
    }

    render() {
        return(
            <Modal
                visible={this.props.isShow}
                transparent={true}
            >
                <ModalBackground/>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitleArea}>
                        <Text style={[{color: '#ffffff'}, {fontWeight: 'bold'}]}>UPDATE ITEM</Text>
                    </View>
                    <View style={styles.textInputArea}>
                        <TextInput
                            value={this.editingToDoItemTitle}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                    <View style={styles.buttonGroupArea}>
                        <View style={[styles.buttonArea, {borderRightWidth: 1}, {borderRightColor: '#1c388c'}]}>
                            <Button
                                title="CANCEL"
                                type="clear"
                                titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                buttonStyle={styles.button}
                                onPress={() => this.closeModal()}
                            />
                        </View>
                        <View style={styles.buttonArea}>
                            <Button
                                title="UPDATE"
                                type="clear"
                                titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                buttonStyle={styles.button}
                                onPress={() => this.updateToDoItemHandler()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

ToDoItemUpdateModal.prototypes = {
    isShow: PropTypes.bool.isRequired,
    closeModal:PropTypes.bool.isRequired,
    selectedToDoItem: PropTypes.object.isRequired,
    updateToDoItem: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 20,
        width: 80 + "%",
        height: SCRENN_HEIGHT*0.3,
        marginTop: SCRENN_HEIGHT*0.15,
        marginLeft: SCRENN_WIDTH*0.1,
        position:'absolute',
        backgroundColor: '#ffffff'
    },
    modalTitleArea: {
        width: 100 + "%",
        height: 20 + " %",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c388c',
    },
    textInputArea: {
        height: 60 + "%",
        borderBottomWidth: 1,
        borderBottomColor: '#1c388c',
        padding: 10,
    },
    buttonGroupArea: {
        flexDirection: 'row',
        width: 100 + "%",
        height: 20 + " %",
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    buttonArea: {
        width: 50 + "%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainerLeft: {
        width: 100 + "%",
        backgroundColor: 'red',
    },

});

export default ToDoItemUpdateModal;
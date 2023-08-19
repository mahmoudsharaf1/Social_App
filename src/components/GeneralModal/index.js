import { Modal, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';

const GeneralModal = ({
    children,
    visible,
    onRequestClose
}) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.container}>
                {children}
            </View>

        </Modal>
    )
}

export default GeneralModal;
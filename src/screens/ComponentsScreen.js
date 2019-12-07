import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const saludo = <Text style={styles.saludoStyle} >Ola k ase</Text>;
    const nombre = 'Juan';
    return (
        <View>
            <Text style={styles.textStyle}>Empezando con React Native</Text>
            <Text style={styles.subHeaderStyle}>Mi nombre es {nombre}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentScreen;
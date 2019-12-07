import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    const [name, setName] = useState("");

    return (
        <View>
            <Text>Text Screen</Text>
            <TextInput
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => { setName(newValue) }}
            />
            <Text style={style.texto}>Texto Ingresado : {name}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    texto:{
        justifyContent: 'center'
    }
});

export default TextScreen;
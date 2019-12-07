import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
    <View>
        <Button title='Incrementar' onPress={() => {
            setCounter(counter + 1);
        }}/>
        <Button title='Decrementar'onPress={() => {
            setCounter(counter - 1);
        }}/>
        <Text>Contador : {counter} </Text>
    </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={()=> onIncrease()} title={`Incrementar ${color}`}/>
            <Button onPress={()=> onDecrease()} title={`Decrementar ${color}`}/>
        </View>
    );
};

const style = StyleSheet.create({});

export default ColorCounter;
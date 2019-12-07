import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FlexboxScreen = () => {
    return (
        <View style = { style.viewStyle }>
            <Text style= {style.textStyle}>Child #1</Text>
            <Text style= {style.textStyle}>Child #2</Text>
            <Text style= {style.textStyle}>Child #3</Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',   
        flexDirection: 'row',
        height: 200,
        alignItems: 'center'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        
    }
});

export default FlexboxScreen;
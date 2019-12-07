import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload }
        break;
      case 'decrement':
          return { ...state, count: state.count - action.payload }
          break;
      default:
        break;
    }
  };

const CounterReducerScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
    <View>
        <Button title='Incrementar' 
        onPress={() => {
            dispatch({ type: 'increment', payload: 1 })
        }}/>
        <Button title='Decrementar'
        onPress={() => {
            dispatch({ type: 'decrement', payload: 1 })
        }}/>
        <Text>Contador : {state.count} </Text>
    </View>
    );
};

const style = StyleSheet.create({});

export default CounterReducerScreen;
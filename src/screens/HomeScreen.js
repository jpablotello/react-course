import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text, styles.boton}>Test Hola</Text>
      <Button color="#000000" style={styles.boton}
        title="Ir al Demo Components"
        onPress={() => navigation.navigate("Componente")}
      />
      <Button style={styles.boton}
        title="Ir a la Lista"
        onPress={() => navigation.navigate("List")}
      />
      <Button style={styles.boton}
        title="Ir a la Imagen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button style={styles.boton}
        title="Ir al Demo Contador"
        onPress={() => navigation.navigate("Contador")}
      />
      <Button style={styles.boton}
        title="Ir al Demo Contador con Reducer"
        onPress={() => navigation.navigate("ContadorReducer")}
      />
      <Button style={styles.boton}
        title="Ir al Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button style={styles.boton}
        title="Ir al Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button style={styles.boton}
        title="Ir al Square Demo con Reducer"
        onPress={() => navigation.navigate("SquareReducer")}
      />
      <Button style={styles.boton}
        title="Ir al Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button style={styles.boton}
        title="Ir al Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
      <Button style={styles.boton}
        title="Ir al FlexBox Demo"
        onPress={() => navigation.navigate("Flex")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 5
  },
  boton: {
    marginVertical: 5
  }
});

export default HomeScreen;

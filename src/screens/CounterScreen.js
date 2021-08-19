import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    let [counter, setCounter] = useState(0);

    return <View>
        <Button
            onPress={() => {
                setCounter(counter++)
            }}
            title="Increment" />
        <Button
            onPress={() => {
                setCounter(counter--)
            }}
            title="Decremment" />
        <Text>Counter - {counter}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default CounterScreen;
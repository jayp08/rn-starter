import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friends #1' },
        { name: 'Friends #2' },
        { name: 'Friends #3' },
        { name: 'Friends #4' },
        { name: 'Friends #5' },
        { name: 'Friends #6' },
        { name: 'Friends #7' },
        { name: 'Friends #8' },
        { name: 'Friends #9' },
    ];

    return (
        <FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;
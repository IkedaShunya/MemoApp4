import { View, StyleSheet } from 'react-native'
import React from 'react';

import Header from '../../components/Header';
import MemoListItem from '../../components/MemoListItem';
import CircleButton from '../../components/CircleButton';

const List = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <MemoListItem />
            <MemoListItem />
            <MemoListItem />
            <CircleButton>+</CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})

export default List

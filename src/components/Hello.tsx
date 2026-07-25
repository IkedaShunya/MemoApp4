import { View, Text, StyleSheet, type TextStyle } from 'react-native'
import React from 'react';

interface Props {
    children: string
    bang: boolean
    style?: TextStyle
}

const Hello = (props: Props): React.JSX.Element => {
    const { children, bang, style } = props
    return (
        <View>
            <Text style={[sytle.text, style]}>
                Hello {children}{bang ? '!' : ''}
            </Text>
        </View>
    )
}

const sytle = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})

export default Hello

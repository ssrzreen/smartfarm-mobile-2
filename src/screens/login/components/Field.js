import {TextInput } from 'react-native'
import React from 'react'

const Field = (props) => {
    return (
        <TextInput
            {...props}
            style={{
                borderRadius: 100,
                color: 'black',
                paddingHorizontal: 10,
                width: 300,
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                marginVertical: 10
            }}
            placeholderTextColor={'black'}></TextInput>
    )
}

export default Field
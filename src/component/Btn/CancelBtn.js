import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CancelBtn = ({ Press ,bgColor, btnLabel, textColor }) => {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                flex: 1,
                backgroundColor: bgColor,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 50,
                width: 150,
                marginRight: 10,
                borderRadius: 100
            }}>

            <Text style={{
                color: textColor,
                fontSize: 20,
                fontWeight: 'bold'
            }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default CancelBtn
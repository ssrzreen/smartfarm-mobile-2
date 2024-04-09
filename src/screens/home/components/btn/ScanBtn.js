import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '../../../../Image/Vector.png'

const ScanBtn = ({ Press }) => {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                flex: 1,
                backgroundColor: "#008807",
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 100,
                width: 150,
                marginLeft: 40,
                marginHorizontal: 10,
                borderRadius: 30
            }}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={Icon}
                    style={{
                        height: 60,
                        width: 60,
                        marginVertical: 5
                    }} />

                <Text style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>สแกน</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ScanBtn
// import * as React from 'react';

// import { StyleSheet, Text } from 'react-native';
// import { useCameraDevice, useCameraDevices, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
// import { Camera } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

// export default function Scanner() {
//     const { hasPermission, requestPermission } = useCameraPermission()
//     const device = useCameraDevice('back')
//     const codeScanner = useCodeScanner({
//         codeTypes: ['qr', 'ean-13'],
//         onCodeScanned: (codes) => {
//             console.log(`Scanned ${codes.value} codes!`)
//         }
//     })

//     React.useEffect(() => {
//         requestPermission();
//     }, [])


//     if (device == null) {
//         return (
//             <View>
//                 <Text>
//                     Device not Found!!!
//                 </Text>
//             </View>
//         )
//     }
//     return (
//         <Camera
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             codeScanner={codeScanner}
//         />
//     )
// }

// const styles = StyleSheet.create({
//     barcodeTextURL: {
//         fontSize: 20,
//         color: 'white',
//         fontWeight: 'bold',
//     },
// });

import { View, Text } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import React, { useEffect, useState } from 'react'

const Scanner = ({ navigation }) => {
    const [list, setList] = useState([])
    const dataURL = "https://api.ckc.or.th/tracking/"

    // const getListTracking = () => {
    //     {
    //         fetch("https://localhost/api/readdata.php")
    //     }
    // }
    const [data, Setdata] = useState('scan something')

    useEffect(() => {
        getListTracking();
    }, [])


    const getListTracking = () => {
        {
            fetch("https://api.ckc.or.th/tracking/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                if (res) {
                    setList(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    // const itemData = (item , index) => {
    //     key = {index}
    //     item
    //     console.log(item.id)
    // }

    const onSuccess = (e) => {
        const check = e.data
        // itemData()
        { data } Setdata(e.data)
        if (check != null) {
            console.log(check)
            navigation.navigate('TestTables' , {
                dataProps: check
            })
            // Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            // this.setState({
            //     result: e,
            //     scan: false,
            //     ScanResult: true
            // })
        }
    }

    return (
        <QRCodeScanner
            onRead={onSuccess}
            reactivate={true}
            reactivateTimeout={500}
            showMarker={true}
            topContent={
                <View>
                    <Text
                        style={{
                            color: 'black',
                            padding: 20,
                            fontSize: 20,
                            backgroundColor: 'grey',
                            margin: 10,
                        }}>{data}
                    </Text>
                </View>
            }
        // flashMode={RNCamera.Constants.FlashMode.torch}
        />
    )
}

export default Scanner
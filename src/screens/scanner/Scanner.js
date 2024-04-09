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

import { View, Text, Alert } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'

const Scanner = () => {
    return (
        <QRCodeScanner
            onRead={({data}) => Alert(data)}
            flashMode={RNCamera.Constants.FlashMode.torch}
            
        />
    )
}

export default Scanner
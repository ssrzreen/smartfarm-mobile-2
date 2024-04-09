// import { StatusBar } from 'react-native';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import React, { useEffect } from 'react';
// import { BarCodeScanner } from 'react-native-qrcode-scanner';

// export default function App() {
//     const [hasPermission, setHasPermission] = React.useState(false);
//     const [scanData, setScanData] = React.useState();

//     useEffect(() => {
//         (async () => {
//             const { status } = await BarCodeScanner.requestPermissionsAsync();
//             setHasPermission(status === "granted");
//         })();
//     }, []);

//     if (!hasPermission) {
//         return (
//             <View style={styles.container}>
//                 <Text>Please grant camera permissions to app.</Text>
//             </View>
//         );
//     }

//     const handleBarCodeScanned = ({ type, data }) => {
//         setScanData(data);
//         console.log(`Data: ${data}`);
//         console.log(`Type: ${type}`);
//     };

//     return (
//         <View style={styles.container}>
//             <BarCodeScanner
//                 style={StyleSheet.absoluteFillObject}
//                 onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
//             />
//             {scanData && <Button title='Scan Again?' onPress={() => setScanData(undefined)} />}
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });


import { View, Text, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import React, { useState } from 'react'

const testScanner = () => {
  const [data ,Setdata] = useState('scan something')
  return (
    <QRCodeScanner
      onRead={({ data }) => Setdata(data)}
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

export default testScanner


// import React, { Component, Fragment } from 'react';
// import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle';

// class Scan extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scan: false,
//       ScanResult: false,
//       result: null
//     };
//   }
//   onSuccess = (e) => {
//     const check = e.data.substring(0, 4);
//     console.log('scanned data' + check);
//     this.setState({
//       result: e,
//       scan: false,
//       ScanResult: true
//     })
//     if (check === 'http') {
//       Linking.openURL(e.data).catch(err => console.error('An error occured', err));
//     } else {
//       this.setState({
//         result: e,
//         scan: false,
//         ScanResult: true
//       })
//     }
//   }
//   activeQR = () => {
//     this.setState({ scan: true })
//   }
//   scanAgain = () => {
//     this.setState({ scan: true, ScanResult: false })
//   }
//   render() {
//     const { scan, ScanResult, result } = this.state
//     return (
//       <View style={styles.scrollViewStyle}>
//         <Fragment>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => BackHandler.exitApp()}>
//               <Image source={require('./assets/back.jpg')} style={{ height: 36, width: 36 }}></Image>
//             </TouchableOpacity>
//             <Text style={styles.textTitle}>Scan QR Code</Text>
//           </View>
//           {!scan && !ScanResult &&
//             <View style={styles.cardView} >
//               <Image source={require('./assets/camera.png')} style={{ height: 36, width: 36 }}></Image>
//               <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
//               <Image source={require('./assets/qr-code.png')} style={{ margin: 20 }}></Image>
//               <TouchableOpacity onPress={this.activeQR} style={styles.buttonScan}>
//                 <View style={styles.buttonWrapper}>
//                   <Image source={require('./assets/camera.png')} style={{ height: 36, width: 36 }}></Image>
//                   <Text style={{ ...styles.buttonTextStyle, color: '#2196f3' }}>Scan QR Code</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           }
//           {ScanResult &&
//             <Fragment>
//               <Text style={styles.textTitle1}>Result</Text>
//               <View style={ScanResult ? styles.scanCardView : styles.cardView}>
//                 <Text>Type : {result.type}</Text>
//                 <Text>Result : {result.data}</Text>
//                 <Text numberOfLines={1}>RawData: {result.rawData}</Text>
//                 <TouchableOpacity onPress={this.scanAgain} style={styles.buttonScan}>
//                   <View style={styles.buttonWrapper}>
//                     <Image source={require('./assets/camera.png')} style={{ height: 36, width: 36 }}></Image>
//                     <Text style={{ ...styles.buttonTextStyle, color: '#2196f3' }}>Click to scan again</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </Fragment>
//           }
//           {scan &&
//             <QRCodeScanner
//               reactivate={true}
//               showMarker={true}
//               ref={(node) => { this.scanner = node }}
//               onRead={this.onSuccess}
//               topContent={
//                 <Text style={styles.centerText}>
//                   Please move your camera {"\n"} over the QR Code
//                 </Text>
//               }
//               bottomContent={
//                 <View>
//                   {/* <ImageBackground source={require('./assets/bottom-panel.png')} style={styles.bottomContent}> */}
//                     <TouchableOpacity style={styles.buttonScan2}
//                       onPress={() => this.scanner.reactivate()}
//                       onLongPress={() => this.setState({ scan: false })}>
//                       {/* <Image source={require('./assets/camera2.png')}></Image> */}
//                     </TouchableOpacity>
//                   {/* </ImageBackground> */}
//                 </View>
//               }
//             />
//           }
//         </Fragment>
//       </View>
//     );
//   }
// }
// export default Scan;
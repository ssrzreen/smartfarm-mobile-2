import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'


import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;
const Imageupload = props => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [data, setData] = useState('')

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, handleResponse);
    };

    const handleResponse = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            setData(imageUri)
        }
    };


    // const upload = () => {
    //   RNFetchBlob.fetch('POST', 'http://10.0.2.2:80/api/uploadimage.php', {
    //     Authorization: "Bearer access-token",
    //     otherHeader: "foo",
    //     'Content-Type': 'multipart/form-data',
    //   }, [
    //     // custom content type
    //     console.log(data),
    //     { name: 'image', filename: 'image.png', type: 'image/png', data: data }
    //   ]).then((resp) => {
    //     // ...
    //   }).catch((err) => {
    //     // ...
    //   })
    // };


    return (
        <View style={style.container}>
            {selectedImage && (
                <Image
                    source={{ uri: selectedImage }}
                    style={{ width: "90%", height: "50%" }}
                // resizeMode="contain"
                />
            )}
            <View style={{ marginTop: 20 }}>
                <Button title="Choose from Device" onPress={openImagePicker} />
            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
                <Button title="Open Camera" onPress={handleCameraLaunch} />
            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
                {/* <Button style={style.button} onPress={upload}>
                    <Text>Upload</Text>
                </Button> */}
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 25,
        padding: 15,
        color: '#F9F9CF9'
    }
})

export default Imageupload
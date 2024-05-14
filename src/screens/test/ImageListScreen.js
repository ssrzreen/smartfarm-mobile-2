import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const ImageListScreen = () => {
    const [image, setImage] = useState([])
    const [text, setText] = useState('')
    const [tree, setTree] = useState('')

    useEffect(() => {
        getImage();
        // getListTree()
    }, [])

    const getImage = () => {
        const URL = "https://fakestoreapi.com/products"
        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setImage(data)
                setText(data)
                console.log(data)
            })
    }

    // const getListTree = () => {
    //     {
    //         // this is for test URL image "https://fakestoreapi.com/products" 
    //         fetch("https://fakestoreapi.com/products", {
    //             method: 'GET'
    //         }).then(res => {
    //             return res.json()
    //         }).then(res => {
    //             // console.log("this is tree data : " + res.data)
    //             setTree(res)
    //             // setfilterData(res.data)
    //             // setmasterData(res.data)
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }
    return (
        <View>
            <Text>ImageListScreen</Text>
            <FlatList
                data={image}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.image }} style={styles.image}/>
                        <Text>{item.price}</Text>
                    </View>
                )}
            />
            {/* <FlatList
                style={{ flex: 1 }}
                data={tree}
                keyExtractor={(item, index) => index.toString()} /> */}
        </View>
    )
}

export default ImageListScreen

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    image: {
        height: 100,
        width: 100
    },
    errorStyle: {
        color: 'red',
        fontSize: 18
    }
})
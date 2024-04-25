import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Table, Row, TableWrapper, Rows } from 'react-native-table-component'

const TestTree = ({ route }) => {
    const [tree, setTree] = useState('')

    useEffect(() => {
        getListTree();
        // console.log("this is data tree : " + tree)
    }, [])
    const getListTree = () => {
        {
            // this is for test URL image "https://fakestoreapi.com/products" 
            fetch("https://api.ckc.or.th/tree/", {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(res => {
                // console.log("this is tree data : " + res.data)
                // setfilterData(res.data)
                // setmasterData(res.data)
                if (res) {
                    setTree(res)

                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const ItemTreeView = ({ item }) => {
        const headers = ['id', 'date', 'status', 'details', 'note', 'temperature', 'plant_status', 'grower_id']
        const rows = [
            [item.id, item.date_time, item.seedling_status, item.details, item.note, item.temperature, item.plant_status, item.grower_id],
        ]

        // if (check == item.id) {
        console.log("this is a id: " + item.id)
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Row data={headers} style={{ backgroundColor: '#FFFFFF' }}
                            height={40}
                            flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                            textStyle={{
                                textAlign: 'center'
                            }} />
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Rows data={rows} heightArr={[100]} flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                                textStyle={{ textAlign: 'center' }} />
                        </TableWrapper>
                    </Table>
                    {/* <Image source={Logo} style={{ height: '35%', width: '100%', position: 'center' }} /> */}
                    <View style={styles.header}>
                        <Text style={styles.heading}>id</Text>
                        <Text style={styles.heading}>date</Text>
                        <Text style={styles.heading}>status</Text>
                        <Text style={styles.heading}>details</Text>
                        <Text style={styles.heading}>note</Text>
                        <Text style={styles.heading}>temperature</Text>
                        <Text style={styles.heading}>plant_status</Text>
                        <Text style={styles.heading}>grower_id</Text>

                    </View>

                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.id}</Text>
                        <Text style={styles.cell}>{item.date_time}</Text>
                        <Text style={styles.cell}>{item.seedling_status}</Text>
                        <Text style={styles.cell}>{item.details}</Text>
                        <Text style={styles.cell}>{item.note}</Text>
                        <Text style={styles.cell}>{item.temperature}</Text>
                        <Text style={styles.cell}>{item.plant_status}</Text>
                        <Text style={styles.cell}>{item.grower_id}</Text>
                    </View>

                    {/* <Image source={{ uri : item.path_img}} style={styles.image}/> */}
                    {/* <Image source={{ uri : item.image}} style={styles.image}/> */}
                    {/* { item.path_img !== '' ? <Image source={item.path_img} /> :null} */}

                </View>
            </View>
        )
        // } else {
        //     return (
        //         null
        //     )
        // }

    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: -10, width: '100%' }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Text>test</Text>
            <FlatList
                style={{ flex: 1 }}
                data={tree}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemTreeView}
            />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -10,
        right: 100
    },
    detailsContainer: {
        top: -30,
        paddingVertical: -50,
        paddingHorizontal: 20,
        flex: 0.3
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20
    },
    image: {
        height: 200,
        width: 200
    },
    errorStyle: {
        color: 'red',
        fontSize: 18
    },
    con: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: "100",
        paddingHorizontal: 'auto',
        height: 200
    },
    headerTopBar: {
        backgroundColor: '#6AB7E2',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 2,
        marginBottom: 15
    },
    headerTopBarText: {
        color: '#fff',
        fontSize: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0.1,
        alignContent: 'center'
    },
    heading: {
        flex: 0.5,
        padding: 1,
        fontSize: 15
    },

    itemStyle: {
        padding: 15
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        // borderColor: '#00968',
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems : 'center',
        marginVertical: '8',
        marginHorizontal: -10,
        elevation: 10,
        borderRadius: 3,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff'
    },
    cell: {
        fontSize: 15,
        textAlign: 'center',
        flex: 1
    }

})
export default TestTree
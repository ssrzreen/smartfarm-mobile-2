import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Table, Row, TableWrapper, Rows } from 'react-native-table-component'

const headers = ['Header1', 'Header2', 'Header3', 'Header4']
const rows = [
    ['Row11', 'Row11', 'Row11', 'Row11'],
    ['Row21', 'Row21', 'Row21', 'Row21'],
    ['Row31', 'Row31', 'Row31', 'Row31'],
    ['Row41', 'Row41', 'Row41', 'Row41'],


]
const DataTables = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 10 }}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row data={headers} style={{
                        backgroundColor: 'lightgray'
                    }}
                        height={40}
                        flexArr={[1, 1, 1, 1]}
                        textStyle={{
                            textAlign: 'center'
                        }} />
                    <TableWrapper style={{flexDirection: 'row'}}>
                        <Rows data={rows} heightArr={[28, 28, 28, 28]} flexArr={[1, 1, 1, 1]}
                            textStyle={{ textAlign: 'left' }} />
                    </TableWrapper>
                </Table>
            </View>
        </SafeAreaView>
    )
}

export default DataTables
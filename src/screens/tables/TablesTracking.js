import { View, Text, ScrollView, Alert, FlatList, SafeAreaView, ViewPropTypes, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Table, Row, TableWrapper, Rows } from 'react-native-table-component'

const headers = ['Header1', 'Header2', 'Header3', 'Header4']
const rows = [
  ['Row11', 'Row11', 'Row11', 'Row11'],
  ['Row21', 'Row21', 'Row21', 'Row21'],
  ['Row31', 'Row31', 'Row31', 'Row31'],
  ['Row41', 'Row41', 'Row41', 'Row41'],


]

const TablesTracking = () => {
  // https://api.ckc.or.th/tracking/
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(list)

  // const dataURL = "https://jsonplaceholder.typicode.com/users"
  const dataURL = "https://api.ckc.or.th/tracking/"

  ////////////////////////ใช้ได้///////////////////////
  // useEffect(() => {
  //   fetch(dataURL)
  //     .then((response) => response.json())
  //     .then((json) => setList(json.columns))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false))
  // }, [])
  ///////////////////////////////////////////////

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
  return (
    // <View style={styles.container}>
    //   {loading ? <Text>loading...</Text> : (
    //     <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
    //       <FlatList
    //         data={list}
    //         keyExtractor={({ id }, index) => id}
    //         renderItem={({ item }) => (
    //           <Text>
    //             {item.project_code} {"\n"}
    //             {item.email} {"\n"}
    //           </Text>
    //         )}
    //       />
    //     </View>
    //   )}
    // </View>



    // <SafeAreaView>
    //   <ScrollView>
    //     {list.map((item, index) => {
    //       return (
    //         <View key={index}>
    //           <Text>
    //             {/* {item} {'\n'} */}
    //             id:{item.id} {'\n'}
    //             tracking : {item.tracking_number} {'\n'}
    //             licence_number : {item.licence_number} {'\n'}
    //           </Text>
    //         </View>
    //       )
    //     })}
    //   </ScrollView>
    // </SafeAreaView>


    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 10 }}>
          {list.map((item, index) => {
            return (
              <View key={index}>
                <Table borderStyle={{ borderWidth: 1 }}>
                  <Row data={headers} style={{
                    backgroundColor: 'lightgray'
                  }}
                    height={40}
                    flexArr={[1, 1, 1, 1]}
                    textStyle={{
                      textAlign: 'center'
                    }} />
                  <Text>
                    {/* {item} {'\n'} */}
                    id:{item.id} {'\n'}
                    tracking : {item.tracking_number} {'\n'}
                    licence_number : {item.licence_number} {'\n'}
                  </Text>
                </Table>
              </View>
            )
          })}
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row data={headers} style={{
              backgroundColor: 'lightgray'
            }}
              height={40}
              flexArr={[1, 1, 1, 1]}
              textStyle={{
                textAlign: 'center'
              }} />
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Rows data={rows} heightArr={[28, 28, 28, 28]} flexArr={[1, 1, 1, 1]}
                textStyle={{ textAlign: 'left' }} />
            </TableWrapper>
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})

export default TablesTracking
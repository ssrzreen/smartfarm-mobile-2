import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import BackgroundHome from '../../component/Background/BackgroundHome'
import ScanBtn from '../home/components/btn/ScanBtn'
import HistoryBtn from '../home/components/btn/็HistoryBtn'
import CallusBtn from '../../component/Btn/CallusBtn'
import MailBtn from '../home/components/btn/MailBtn'
import Tabs from '../../routes/Tabs'

const TestScreen2 = ({ navigation }) => {
  const route = useRoute()
  return (
    <View>
      <Text>testScreen2</Text>
      <Text>{route.params.name}</Text>

      <BackgroundHome>
        <View style={styles.container}>
          <Text>test</Text>
          <Text>{route.params.name}</Text>
        </View>
        <View style={{ marginVertical: 200 }}>
          <View style={{
            marginHorizontal: 15,
            alignItems: 'center',
            flexDirection: 'row',
            width: 350,
            marginVertical: 20,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <ScanBtn
                Press={() => {
                  navigation.navigate('Scanner')
                }} />
              <HistoryBtn />
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              alignItems: 'center',
              flexDirection: 'row',
              width: 350,
              marginVertical: 20,
            }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <CallusBtn />
              <MailBtn />

            </View>
          </View>
        </View>
      </BackgroundHome>
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '110%',
    top: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    height: 200
  },
})
export default TestScreen2
import { Text, View } from 'react-native'
import React from 'react'
import BackgroundHome from '../../component/Background/BackgroundHome'
import ScanBtn from './components/btn/ScanBtn'
import HistoryBtn from './components/btn/็HistoryBtn'
import CallUsBtn from './components/btn/CallUsBtn'
import MailBtn from './components/btn/MailBtn'
const Home = props => {
  return (
    <BackgroundHome>
      <View style={{ marginVertical: 400 }}>
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
              props.navigation.navigate('Scanner')
            }}/>
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
            <CallUsBtn />
            <MailBtn />

          </View>
        </View>
      </View>
    </BackgroundHome>

  )
}

export default Home
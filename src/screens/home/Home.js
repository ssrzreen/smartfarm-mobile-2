import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import BackgroundHome from '../../component/Background/BackgroundHome'
import ScanBtn from './components/btn/ScanBtn'
import HistoryBtn from './components/btn/็HistoryBtn'
import CallUsBtn from './components/btn/CallUsBtn'
import MailBtn from './components/btn/MailBtn'
import { useNavigation, useRoute } from '@react-navigation/native'
const Home = ({ navigation ,route }) => {
  // const route = useRoute()
  // const param = navigation.dangerouslyGetParent().getParam(name);
  // console.log("this is props home :" + param)
  return (
    <BackgroundHome>
      <View style={styles.container}>
        <Text>test</Text>
        <Text>{route.search}</Text>
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
            <CallUsBtn />
            <MailBtn />

          </View>
        </View>
      </View>
    </BackgroundHome>

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
export default Home
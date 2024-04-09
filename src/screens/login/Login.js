import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Field from './components/Field'
import Background from '../../Image/backgroundlog.png'
import ConfirmBtn from '../../component/Btn/ConfirmBtn'
import CancelBtn from '../../component/Btn/CancelBtn'

const Login = props => {
  return (
    // <BackgroundLogin>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground source={Background} resizeMode='cover' style={styles.image}>
        <View style={{ marginVertical: 150 }}></View>
        <View
          style={{
            width: 200,
            marginHorizontal: 110,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', paddingVertical: 20 }}>
            เข้าสู่ระบบ
          </Text>
          <Field placeholder="ชื่อผู้ใช้" />
          <Field placeholder="รหัสผ่าน" secureTextEntry={true} />

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <ConfirmBtn
              Press={() => {
                props.navigation.navigate('Home')
              }}
              bgColor={"#05770B"}
              textColor={'#FFFFFF'}
              btnLabel="ยืนยัน" />

            <CancelBtn
              bgColor={"#D9D9D9"}
              textColor={'black'}
              btnLabel="ยกเลิก" />
          </View>

          <View
            style={{ alignItems: 'center', width: '78%', marginBottom: 20 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 , padding: 10}}>
              สมัครสมาชิก
            </Text>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
    // </BackgroundLogin>
  )
}
const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default Login
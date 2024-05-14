import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, Alert, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../Image/backgroundlog.png'
import ConfirmBtn from '../../component/Btn/ConfirmBtn'
import CancelBtn from '../../component/Btn/CancelBtn'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [checkEmail, setCheckEmail] = useState('')
  const [check, setCheck] = useState('')

  const [propsData, setPropsData] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    getDataMembers();
  }, [])


  const getDataMembers = () => {
    {
      fetch("https://api.ckc.or.th/member/", {
        method: 'GET'
      }).then(res => {
        return res.json()
      }).then(res => {
        // console.log("this is Tracking data : " + res.data)
        setfilterData(res)
        setmasterData(res)
        if (res) {
          setList(res)
          // console.log(res)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        setCheckEmail(item.email)
        const itemData = item.email ? item.email : " ";
        setCheck(checkEmail)
        // console.log('this is res : ' + item.email)
        // console.log('this is res password : ' + item.password_user)
        const textData = text
        return itemData.indexOf(textData) > -1
      })
      setfilterData(newData)
      setSearch(text)
      // setPropsData(text)
      // console.log("this is filter " + text)
    } else {
      setfilterData(masterData)
      setSearch(text)
    }
  }

  const searchPasswordFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        // setCheckEmail(item.email)
        const itemData = item.password_user ? item.password_user : " ";
        // setCheck(checkEmail)
        // console.log('this is res : ' + item.password_user)
        // console.log('this is res password : ' + item.password_user)
        const textData = text
        return itemData.indexOf(textData) > -1
      })
      setfilterData(newData)
      setPassword(text)
      // console.log("this is filter password " + text)
    } else {
      setfilterData(masterData)
      setPassword(text)
    }
  }

  const sub = () => {
    navigation.navigate('Home', {
      name:name,
    });
  }

  const OnSuccess = () => {
    masterData.filter((item) => {
      const send = search
      // const check = e.data
      const res = item.email
      console.log(search)
      const checkSearch = search

      const resPass = item.password_user
      const checkPassword = password

      // console.log('this is email form res :' + item.email)
      // console.log('this is email form seach :' + search)

      // console.log('this is password form res :' + item.password_user)
      // console.log('this is password form seach :' + password)

      if (res == checkSearch && resPass == checkPassword) {
        // console.log('work')
        // console.log('this is members :' + item.member_type)
        navigation.navigate('Home', {
          name: 'test'
        })
        // console.log(item.email)
      } else {
        // console.log('this logic not work')

      }
    })
  }

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
          <TextInput
            placeholder='Name'
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            placeholder='ผู้ใช้'
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
            // value={name}
            onChangeText={(text) => searchFilter(text, setSearch(text))}
          />

          <TextInput
            placeholder='รหัสผ่าน'
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
            onChangeText={(text) => searchPasswordFilter(text, setPassword(text))}
          />

          {/* <RegisInput
            placeholder="ชื่อผู้ใช้"
            value={Findfirst_name}
            // setValue={setFindFirstName(text)}
            onChangeText={(text) => searchFilter(text)}
          /> */}
          {/* <RegisInput
            placeholder="รหัสผ่าน"
            value={password}
            setValue={setPassword}
            secureTextEntry={true} /> */}

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <ConfirmBtn
              Press={() => {
                // props.navigation.navigate('Home')
                // SearchRecord();
                OnSuccess()
              }}
              bgColor={"#05770B"}
              textColor={'#FFFFFF'}
              btnLabel="ยืนยัน" />

            {/* <TouchableOpacity 
            onPress={() => {
              navigation.navigate('Home' ,{
                dataprops : 'test test'
              })
            }}>
              <Text>Test Props</Text>
            </TouchableOpacity> */}

            <Button
              title="Done"
              onPress={() => {
                navigation.navigate({
                  name: 'Test1',
                  // search: 'name' ,
                });
              }}
              // onPress={sub}
            />

            <CancelBtn
              bgColor={"#D9D9D9"}
              textColor={'black'}
              btnLabel="ยกเลิก" />
          </View>

          <View
            style={{ alignItems: 'center', width: '78%', marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Register')
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, padding: 10 }}>
                สมัครสมาชิก
              </Text>
            </TouchableOpacity>
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
  textInputStyle: {
    // height: 50,
    // borderWidth: 1,
    // paddingLeft: 20,
    // margin: 5,
    // borderColor: '#00968',
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
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
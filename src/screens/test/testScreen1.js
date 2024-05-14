import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ConfirmBtn from '../../component/Btn/ConfirmBtn'
import CancelBtn from '../../component/Btn/CancelBtn'
import ImageListScreen from './ImageListScreen'

const TestScreen1 = ({ navigation }) => {
    // const [name, setName] = useState('')
    // const [pass, setPass] = useState('')

    // const [password, setPassword] = useState('');
    // const [filterData, setfilterData] = useState([]);
    // const [masterData, setmasterData] = useState([]);
    // const [search, setSearch] = useState('');
    // const [list, setList] = useState([]);
    // const [checkEmail, setCheckEmail] = useState('')
    // const [check, setCheck] = useState('')

    // const [propsData, setPropsData] = useState('')
    // // const [name, setName] = useState('')

    // useEffect(() => {
    //     getDataMembers();
    // }, [])


    // const getDataMembers = () => {
    //     {
    //         fetch("https://api.ckc.or.th/member/", {
    //             method: 'GET'
    //         }).then(res => {
    //             return res.json()
    //         }).then(res => {
    //             // console.log("this is Tracking data : " + res.data)
    //             setfilterData(res)
    //             setmasterData(res)
    //             if (res) {
    //                 setList(res)
    //                 // console.log(res)
    //             }
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }

    // const searchFilter = (text) => {
    //     if (text) {
    //         const newData = masterData.filter((item) => {
    //             setCheckEmail(item.email)
    //             const itemData = item.email ? item.email : " ";
    //             setCheck(checkEmail)
    //             // console.log('this is res : ' + item.email)
    //             // console.log('this is res password : ' + item.password_user)
    //             const textData = text
    //             return itemData.indexOf(textData) > -1
    //         })
    //         setfilterData(newData)
    //         setSearch(text)
    //         // setPropsData(text)
    //         // console.log("this is filter " + text)
    //     } else {
    //         setfilterData(masterData)
    //         setSearch(text)
    //     }
    // }

    // const searchPasswordFilter = (text) => {
    //     if (text) {
    //         const newData = masterData.filter((item) => {
    //             // setCheckEmail(item.email)
    //             const itemData = item.password_user ? item.password_user : " ";
    //             // setCheck(checkEmail)
    //             // console.log('this is res : ' + item.password_user)
    //             // console.log('this is res password : ' + item.password_user)
    //             const textData = text
    //             return itemData.indexOf(textData) > -1
    //         })
    //         setfilterData(newData)
    //         setPassword(text)
    //         // console.log("this is filter password " + text)
    //     } else {
    //         setfilterData(masterData)
    //         setPassword(text)
    //     }
    // }


    // const OnSuccess = () => {
    //     masterData.filter((item) => {
    //         const send = search
    //         // const check = e.data
    //         const res = item.email
    //         console.log(search)
    //         const checkSearch = search

    //         const resPass = item.password_user
    //         const checkPassword = password

    //         // console.log('this is email form res :' + item.email)
    //         // console.log('this is email form seach :' + search)

    //         // console.log('this is password form res :' + item.password_user)
    //         // console.log('this is password form seach :' + password)

    //         if (res == checkSearch && resPass == checkPassword) {
    //             // console.log('work')
    //             // console.log('this is members :' + item.member_type)
    //             navigation.navigate('Test2', {
    //                 name: search
    //             })
    //             // console.log(item.email)
    //         } else {
    //             // console.log('this logic not work')

    //         }
    //     })
    // }

    // const sub = () => {
    //     navigation.navigate('Test2', {
    //         name: search,
    //         pass: pass
    //     });
    // }

    // return (
    //     <View>
    //         <TextInput
    //             placeholder='ผู้ใช้'
    //             // style={styles.textInputStyle}
    //             underlineColorAndroid='transparent'
    //             // value={name}
    //             onChangeText={(text) => searchFilter(text, setSearch(text))}
    //         />

    //         <TextInput
    //             placeholder='รหัสผ่าน'
    //             // style={styles.textInputStyle}
    //             underlineColorAndroid='transparent'
    //             onChangeText={(text) => searchPasswordFilter(text, setPassword(text))}
    //         />
    //         {/* <TextInput
    //             placeholder='Name'
    //             value={name}
    //             onChangeText={(text) => setName(text)}
    //         /> */}
    //         <TextInput
    //             placeholder='Pass'
    //             value={pass}
    //             onChangeText={(text) => setPass(text)}
    //         />
    //         <View style={{
    //             flexDirection: 'row',
    //             justifyContent: 'center',
    //         }}>
    //             <ConfirmBtn
    //                 Press={() => {
    //                     // props.navigation.navigate('Home')
    //                     // SearchRecord();
    //                     OnSuccess()
    //                 }}
    //                 bgColor={"#05770B"}
    //                 textColor={'#FFFFFF'}
    //                 btnLabel="ยืนยัน" />

    //             {/* <TouchableOpacity 
    //         onPress={() => {
    //           navigation.navigate('Home' ,{
    //             dataprops : 'test test'
    //           })
    //         }}>
    //           <Text>Test Props</Text>
    //         </TouchableOpacity> */}

    //             <Button
    //                 title="Done"
    //                 onPress={() => {
    //                     navigation.navigate({
    //                         name: 'Test1',
    //                         // search: 'name' ,
    //                     });
    //                 }}
    //             // onPress={sub}
    //             />

    //             <CancelBtn
    //                 bgColor={"#D9D9D9"}
    //                 textColor={'black'}
    //                 btnLabel="ยกเลิก" />
    //         </View>

    //         <Button
    //             title='submit'
    //             onPress={sub}
    //         />
    //     </View>
    // )
    return(
        <SafeAreaView style={styles.container}>
            <ImageListScreen />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default TestScreen1
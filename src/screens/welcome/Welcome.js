import { View, Text, StyleSheet, ImageBackground, Image, Button, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import Background from '../../component/Background/BackgroundWelcome'
import WelcomeBtn from '../../component/Btn/WelcomeBtn'
import CallusBtn from '../../component/Btn/CallusBtn'
import MessageBtn from '../../component/Btn/MessageBtn'
const Welcome = props => {
    return (
        // <SafeAreaView style={{ flex: 1}}>
            <Background>
                <View style={{flex: 1, marginHorizontal: 20, marginVertical: 450 }}>
                    <WelcomeBtn
                        Press={() => {
                            props.navigation.navigate('LoginPage');
                        }}
                        bgColor={"white"}
                        textColor={'black'}
                        btnLabel="เข้าสู่ระบบ"
                    />
                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'center'
                        alignItems: 'center',
                        width: '120%'
                    }}>
                        <CallusBtn
                            bgColor={"white"}
                            textColor={'black'}
                            btnLabel="ติดต่อเรา" />
                        <MessageBtn
                            bgColor={"white"}
                            textColor={'black'}
                            btnLabel="ข้อความ" />

                    </View>

                </View>
            </Background>
        // </SafeAreaView>

    )

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    root: {
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    imagebackground: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
export default Welcome
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/image/logoExpro.jpg'
import AdminInput from '../../component/AdminInput';
import AdminButton from '../../component/AdminButton/AdminButton';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn('Sign in')
    }
    return (
        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain' />

            <AdminInput
                placeholder="Username"
                value={username}
                setValue={setUsername} />

            <AdminInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <AdminButton text="Sign in" onPress={onSignInPressed}/>
        </View>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: "70%",
        maxWidth: 500,
        height: 100,
    }
})

export default SigninScreen;

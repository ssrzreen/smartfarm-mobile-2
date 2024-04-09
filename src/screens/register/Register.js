import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import RegisInput from '../../component/RegisterInput/RegisInput';


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign in')
  }
  return (
    <View style={styles.root}>
      {/* <Image source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode='contain' /> */}

      <RegisInput
        placeholder="Username"
        value={username}
        setValue={setUsername} />

      <RegisInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      {/* <AdminButton text="Sign in" onPress={onSignInPressed} /> */}
      <Text>test</Text>
    </View>

  );
}

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

export default Register
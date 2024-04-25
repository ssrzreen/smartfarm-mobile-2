import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, ImageBackground, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import RegisInput from '../../component/RegisterInput/RegisInput';
import Background from '../../Image/background.png'


const Register = (props) => {

  const [memberId, setMemberId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [memberType, setMemberType] = useState('')
  const [status, setStatus] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign in')
  }

  InsertRecord = () => {
    if (memberId.length == 0 || firstName.length == 0 || lastName.length == 0 || address.length == 0 || phone.length == 0 || email.length == 0 ||
      memberType.length == 0 || status.length == 0 || password.length == 0) {
      Alert.alert("Required Field is missing")
    }
    else {
      // Alert.alert("Fetch API code come here")
      https://10.0.2.2/phpmyadmin/index.php?route=/sql&pos=0&db=ckcorth_rg&table=members
      InsertAPIURL = "http://10.0.2.2:80/api/reg.php"
      headers = {
        'Accept': 'application/json',
        'Content-Type': 'application.json'
      }
      Data = {
        memberId: memberId,
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
        email: email,
        memberType: memberType,
        status: status,
        password: password
      }
      fetch(InsertAPIURL,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data)
        })
        .then((respone) => respone.json())
        .then((respone) => {
          Alert.alert(respone[0].Message)
        })
        .catch((error) => {
          Alert.alert("Error" + error)
        })
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground source={Background} resizeMode='cover' style={styles.image}>


        <View style={styles.root}>
          {/* <Image source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode='contain' /> */}

          {/* <RegisInput
            placeholder="Username"
            value={username}
            setValue={setUsername} /> */}

          <RegisInput
            placeholder="MemberId"
            value={memberId}
            setValue={setMemberId} />

          <RegisInput
            placeholder="FirstName"
            value={firstName}
            setValue={setFirstName} />

          <RegisInput
            placeholder="LastName"
            value={lastName}
            setValue={setLastName} />

          <RegisInput
            placeholder="Address"
            value={address}
            setValue={setAddress} />

          <RegisInput
            placeholder="Phone"
            value={phone}
            setValue={setPhone} />

          <RegisInput
            placeholder="Email"
            value={email}
            setValue={setEmail} />

          <RegisInput
            placeholder="MemberType"
            value={memberType}
            setValue={setMemberType} />

          <RegisInput
            placeholder="Status"
            value={status}
            setValue={setStatus} />


          <RegisInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />


          {/* <AdminButton text="Sign in" onPress={onSignInPressed} /> */}
          <Text>test</Text>
          <Button
            onPress={() => InsertRecord()}
            title='บันทึก'
          />
        </View>
      </ImageBackground>

    </SafeAreaView>


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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default Register
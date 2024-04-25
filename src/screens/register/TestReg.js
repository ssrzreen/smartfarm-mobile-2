/* eslint-disable prettier/prettier */
import React, { Component, memo } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class Reg extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     MemberId: '', FirstName: '', LastName: '', Address: '', Phone: '', Email: '',
        //     MemberType: '', Status: '', Password: ''
        // };
        this.state = {
            first_name: '', last_name: '', email: '',
            member_type: '', password: ''
        };
    }

    InsertRecord = () => {
        // var MemberId = this.state.MemberId;
        var first_name = this.state.first_name;
        var last_name = this.state.last_name;
        // var Address = this.state.Address;
        // var Phone = this.state.Phone;
        var email = this.state.email;
        var member_type = this.state.member_type;
        // var Status = this.state.Status;
        var password = this.state.password;

        if (
            // MemberId.length == 0 || 
            first_name.length == 0
            // || LastName.length == 0 || Address.length == 0 || Phone.length == 0 || Email.length == 0 ||
            // MemberType.length == 0 || Status.length == 0 || Password.length == 0
        ) {
            Alert.alert("Required field is Missing")
        }
        else {

            var InsertAPIURL = "http://10.0.2.2:80/api/testreg.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                // MemberId: MemberId,
                first_name: first_name,
                last_name: last_name,
                // Address: Address,
                // Phone: Phone,
                email: email,
                member_type: member_type,
                // Status: Status,
                password: password
            };

            fetch(InsertAPIURL,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
            )
                .then((response) => response.json())
                .then((response) => {
                    Alert.alert(response[0].Message);
                    console.log(Data)
                    this.props.navigation.navigate('Login')

                })
                .catch((error) => {
                    Alert.alert("Error" + error);
                    console.log('error' + error)
                })
        }
    }

    render() {

        return (
            <View style={styles.ViewStyle}>
                {/* <TextInput
                    placeholder={'memberId'}
                    placeholderTextColor={"#FF0000"}
                    keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={MemberId => this.setState({ MemberId })}
                /> */}

                <TextInput
                    placeholder={'First Name'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={first_name => this.setState({ first_name })}
                />

                <TextInput
                    placeholder={'Last Name'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={last_name => this.setState({ last_name })}
                />

                {/* <TextInput
                    placeholder={'Address'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={Address => this.setState({ Address })}
                /> */}

                {/* <TextInput
                    placeholder={'Phone'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={Phone => this.setState({ Phone })}
                /> */}

                <TextInput
                    placeholder={'Email'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    placeholder={'MemberType'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={member_type => this.setState({ member_type })}
                />

                {/* <TextInput
                    placeholder={'Status'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={Status => this.setState({ Status })}
                /> */}

                <TextInput
                    placeholder={'Password'}
                    placeholderTextColor={"#FF0000"}
                    // keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={password => this.setState({ password })}
                />

                <Button
                    title={'Save'}
                    onPress={
                        this.InsertRecord
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
        marginTop: 10,
    },

    textStyle:
    {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20,
    },
});

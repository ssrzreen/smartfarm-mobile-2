/* eslint-disable prettier/prettier */
import React, { Component, memo } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class TestLogin extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     MemberId: '', FirstName: '', LastName: '', Address: '', Phone: '', Email: '',
        //     MemberType: '', Status: '', Password: ''
        // };
        this.state = {
            FindName: ''
        };
    }

    SearchRecord = () => {
        var FindName = this.state.FindName;

        if (
            FindName.length == 0
        ) {
            Alert.alert("Required field is Missing")
        }
        else {

            var SearchAPIURL = "http://10.0.2.2:80/api/search.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                FindName:FindName
            };

            fetch(SearchAPIURL,
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
                    // this.props.navigation.navigate('Login')

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

                <TextInput
                    placeholder={'First Name'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={FindName => this.setState({FindName})}
                />
                {/* 
                <TextInput
                    placeholder={'Password'}
                    placeholderTextColor={"#FF0000"}
                    // keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={password => this.setState({ password })}
                /> */}

                <Button
                    title={'Login'}
                    onPress={
                        this.SearchRecord
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

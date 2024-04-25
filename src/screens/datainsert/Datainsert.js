/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class DataInsert extends Component {
    constructor(props) {
        super(props);
        this.state = { RollNo: '', UserName: '', DataTree: '' };
    }

    InsertRecord = () => {
        var RollNo = this.state.RollNo;
        var UserName = this.state.UserName;
        var DataTree = this.state.DataTree;

        if (RollNo.length == 0 || UserName.length == 0 || DataTree.length == 0) {
            Alert.alert("Required field is Missing")
        }
        else {

            var InsertAPIURL = "http://10.0.2.2:80/api/insert.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application.json'
            };

            var Data = {
                RollNo: RollNo,
                UserName: UserName,
                DataTree: DataTree,
            };

            fetch(InsertAPIURL,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
            )
                .then((response)=>response.json())
                .then((response)=>
                {
                    Alert.alert(response[0].Message);
                })
                .catch((error)=>{
                    Alert.alert("Error" + error);
                })
        }
    }

    render() {

        return (
            <View style={styles.ViewStyle}>
                <TextInput
                    placeholder={'RollNo'}
                    placeholderTextColor={"#FF0000"}
                    keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={RollNo => this.setState({ RollNo })}
                />

                <TextInput
                    placeholder={'User Name'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={UserName => this.setState({ UserName })}

                />

                <TextInput
                    placeholder={'Data Tree'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={DataTree => this.setState({ DataTree })}
                />

                <Button
                    title={'Save'}
                    onPress={this.InsertRecord}
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

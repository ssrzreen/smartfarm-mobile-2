/* eslint-disable prettier/prettier */
import React, { Component, memo } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class DataTreeInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seedling_status: '', details: '', note: '', plant_status: '', grower_id: ''
        };
    }

    InsertRecord = () => {
        // var MemberId = this.state.MemberId;
        var seedling_status = this.state.seedling_status;
        var details = this.state.details;
        // var Address = this.state.Address;
        // var Phone = this.state.Phone;
        var note = this.state.note;
        var plant_status = this.state.plant_status;
        // var Status = this.state.Status;
        var grower_id = this.state.grower_id;

        if (
            // MemberId.length == 0 || 
            seedling_status.length == 0
            // || LastName.length == 0 || Address.length == 0 || Phone.length == 0 || Email.length == 0 ||
            // MemberType.length == 0 || Status.length == 0 || Password.length == 0
        ) {
            Alert.alert("Required field is Missing")
        }
        else {

            var InsertAPIURL = "http://10.0.2.2:80/api/insertdatatree.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                // MemberId: MemberId,
                seedling_status: seedling_status,
                details: details,
                // Address: Address,
                // Phone: Phone,
                note: note,
                plant_status: plant_status,
                // Status: Status,
                grower_id: grower_id
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
                {/* <TextInput
                    placeholder={'memberId'}
                    placeholderTextColor={"#FF0000"}
                    keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={MemberId => this.setState({ MemberId })}
                /> */}

                <TextInput
                    placeholder={'Seed'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={seedling_status => this.setState({ seedling_status })}
                />

                <TextInput
                    placeholder={'Details'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={details => this.setState({ details })}
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
                    placeholder={'Note'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={note => this.setState({ note })}
                />

                <TextInput
                    placeholder={'Plant'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={plant_status => this.setState({ plant_status })}
                />

                {/* <TextInput
                    placeholder={'Status'}
                    placeholderTextColor={"#FF0000"}
                    style={styles.textStyle}
                    onChangeText={Status => this.setState({ Status })}
                /> */}

                <TextInput
                    placeholder={'Grower'}
                    placeholderTextColor={"#FF0000"}
                    // keyboardType={'numeric'}
                    style={styles.textStyle}
                    onChangeText={grower_id => this.setState({ grower_id })}
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

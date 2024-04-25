import { View, Text, Alert, TextInput, StyleSheet, Button, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Background from '../../Image/background.png';
import RegisInput from '../../component/RegisterInput/RegisInput';
import CancelBtn from '../../component/Btn/CancelBtn';
import ConfirmBtn from '../../component/Btn/ConfirmBtn';

const DataTree = ({ navigation, route }) => {
    console.log("this is props form testTables :" + route.params.dataProps)
    const [licence_id, setLicence_id] = useState(route.params.dataProps)
    const [seedling_status, setSeedling_status] = useState('');
    const [details, setDetails] = useState('');
    const [note, setNote] = useState('');
    const [plant_status, setPlant_status] = useState('');
    const [grower_id, setGrower_id] = useState('')

    const noHandler = () => {
        setSeedling_status('')
        setDetails('')
        setNote('')
        setPlant_status('')
        setGrower_id('')
    }


    const InsertRecord = () => {
        if (seedling_status.length == 0) {
            Alert.alert("Required field is Missing")
        } else {
            InsertAPIURL = "http://10.0.2.2:80/api/insertdatatree.php";

            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            Data = {
                licence_id: licence_id,
                seedling_status: seedling_status,
                details: details,
                note: note,
                plant_status: plant_status,
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
                    Alert.alert(
                        'ยืนยันบันทึกข้อมูลต้นกล้า',
                        licence_id,
                        [
                            { text: 'ยืนยัน', onPress: () => console.log('บันทึกเรียบร้อย') },
                            { text: 'ยกเลิก', onPress: () => noHandler() }
                        ]
                    );
                    console.log(Data)
                })
                .catch((error) => {
                    Alert.alert("Error" + error);
                    console.log('error' + error)
                })
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ImageBackground source={Background} resizeMode='cover' style={styles.image}>

                <RegisInput
                    placeholder={'licence_id'}
                    value={licence_id}
                    setValue={setLicence_id}
                />

                <RegisInput
                    placeholder={'Seed'}
                    value={seedling_status}
                    setValue={setSeedling_status}
                />

                <RegisInput
                    placeholder={'Details'}
                    value={details}
                    setValue={setDetails} />

                <RegisInput
                    placeholder={'Note'}
                    value={note}
                    setValue={setNote}
                />

                <RegisInput
                    placeholder={'Plant'}
                    value={plant_status}
                    setValue={setPlant_status}
                />
                <RegisInput
                    placeholder={'Grower'}
                    value={grower_id}
                    setValue={setGrower_id}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                    marginVertical: 10
                }}>
                    <ConfirmBtn
                        Press={InsertRecord}
                        bgColor={"#05770B"}
                        textColor={'#FFFFFF'}
                        btnLabel="ยืนยัน" />

                    <CancelBtn
                        // Press={route.navigate('TestTables')}
                        bgColor={"#D9D9D9"}
                        textColor={'black'}
                        btnLabel="ยกเลิก" />
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
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
});
export default DataTree
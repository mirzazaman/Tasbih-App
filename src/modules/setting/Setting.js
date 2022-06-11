import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Action from '../../store/action/Action';


export default function Setting({ navigation }) {

    const dispatch = useDispatch();

    const state = useSelector(store => store.state);

    return (
        <View style={styles.settingMain}>
            <View style={styles.settingHeader} onPress={() => { navigation.goBack() }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text style={styles.headerText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

                <View style={styles.vibrationBtn}>
                    <Text style={styles.vibrationText}>Vibration is {state ? "Enabled" : "Disabled"}</Text>
                    <TouchableOpacity style={styles.changeBtn} onPress={() => { dispatch(Action(state)) }}>
                        <Text style={styles.changeText}>{state ? "Disable" : "Enable"}</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.waterMark}>
                <Text style={{ textAlign: "center" }}>Developed by ZAMAN</Text>
                <Text style={{ textAlign: "center" }}>mirzazaman828@gmail.com</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    settingMain: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#435261"
    },
    settingHeader: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#2F3945"

    },
    headerText: {
        color: "#70BDC3",
        fontSize: 25,
        margin: 8
    },
    container: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: 20
    },
    vibrationText: {
        color: "#70BDC3",
        fontSize: 20,
        margin: 7,
    },
    vibrationBtn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    changeBtn: {
        padding: 10,
        backgroundColor: "#2F3945",
        borderRadius: 5
    },
    changeText: {
        color: "#70BDC3",
        textAlign: "center",
    },
    waterMark: {
        flex: 1,
        padding: 5,
        justifyContent: "flex-end"
    }
})
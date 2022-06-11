import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import useHome from './useHome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Setting from "../../assets/Setting.png";


export default function Home({ navigation }) {

    const [count, increament, initial] = useHome();

    return (
        <View style={styles.mainBack}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tasbih</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Setting') }}>
                    <Image style={styles.setting} source={Setting}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={styles.count}> {count} </Text>

                <TouchableOpacity style={styles.countBtn} onPress={increament}>
                    <Text style={styles.btnText}>Click</Text>
                </TouchableOpacity>
                <Button color="#2F3945" style={styles.reset} title="Reset" onPress={initial} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBack: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#435261",
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#2F3945",
        justifyContent: "space-between"
    },
    headerText: {
        color: "#70BDC3",
        fontSize: 25,
        margin: 5
    },
    setting: {
        width: 20,
        height: 20,
        margin: 15
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "88%",
    },
    count: {
        marginTop: 10,
        width: "70%",
        textAlign: "center",
        fontSize: 40,
        borderWidth: 1,
        borderColor: "#70BDC3",
        color: "#70BDC3",
        backgroundColor: "#2F3945",
    },
    countBtn: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 5,
        borderColor: "#70BDC3",
        backgroundColor: "#2F3945",
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        fontSize: 50,
        color: "#70BDC3"
    },
    reset: {
        margin: 10
    }
})
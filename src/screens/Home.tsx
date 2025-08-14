import { StyleSheet, Text, View } from "react-native";


export default function Home(){

    return(
        <View style={styles.containerHome}>
            <Text>Home works!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
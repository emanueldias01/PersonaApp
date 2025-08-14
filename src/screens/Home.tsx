import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import me from '../../assets/me.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Home(){

    return(
        <View style={styles.containerHome}>

            
            <Image style={styles.image} source={me}/>
            <Pressable style={[styles.pressSocial, {backgroundColor: '#0A66C2'}]}>
                <Text style={styles.text}>Linkedin</Text>
                <AntDesign name="linkedin-square" size={24} color="white" />
            </Pressable>

            <Pressable  style={[styles.pressSocial, {backgroundColor: 'black'}]}>
                <Text style={styles.text}>GitHub</Text>
                <AntDesign name="github" size={24} color="white" />
            </Pressable>

            <Pressable  style={[styles.pressSocial, {backgroundColor: '#D93025'}]}>
                <Text style={styles.text}>Gmail</Text>
                <MaterialCommunityIcons name="gmail" size={24} color="white" />
            </Pressable>

            <Pressable style={styles.pressSkills}>
                <Text>Skills</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        paddingTop: 220
    },
    image: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        borderWidth: 2,
        borderRadius: 9999
    },
    pressSocial: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderWidth: 2,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 15,
        width: '40%'
    },
    pressSkills:{
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginTop: 70
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})
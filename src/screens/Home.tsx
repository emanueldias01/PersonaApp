import { Image, Linking, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import me from '../../assets/me.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Home({navigation} : any){

    const handleLinkedin = () => {
        Linking.openURL('https://www.linkedin.com/in/emanueldias01/');
    }

    const handleGitHub = () => {
        Linking.openURL('https://github.com/emanueldias01');
    }

    const handleEmail = () => {
        const email = 'emanueldias01dev@gmail.com';
        const assunto = 'Hello World!';
        const corpo = 'Olá, estou entrando em contato...';
        const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        Linking.openURL(url);
    }

    const navigateSkills = () => {
        navigation.navigate('Skills');
    }

    return(
        <ScrollView contentContainerStyle={styles.containerHome}>


            
            <Image style={styles.image} source={me}/>
            <Pressable style={[styles.pressSocial, {backgroundColor: '#0A66C2'}]} onPress={handleLinkedin}>
                <Text style={styles.text}>Linkedin</Text>
                <AntDesign name="linkedin-square" size={24} color="white" />
            </Pressable>

            <Pressable  style={[styles.pressSocial, {backgroundColor: 'black'}]} onPress={handleGitHub}>
                <Text style={styles.text}>GitHub</Text>
                <AntDesign name="github" size={24} color="white" />
            </Pressable>

            <Pressable  style={[styles.pressSocial, {backgroundColor: '#D93025'}]} onPress={handleEmail}>
                <Text style={styles.text}>Gmail</Text>
                <MaterialCommunityIcons name="gmail" size={24} color="white" />
            </Pressable>

            <Pressable style={styles.pressSkills} onPress={navigateSkills}>
                <Text>Skills</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerHome : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
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
        marginTop: 50
        
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})
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

            <Text style={styles.greeting}>Hello! 👋</Text>
            <Text style={styles.name}>I'm <Text style={styles.highlight}>Emanuel Dias 💻</Text></Text>
            <Text style={styles.description}>
                I'm a <Text style={styles.highlight}>Backend Developer</Text> exploring the world of <Text style={styles.mobile}>Mobile Development 📱</Text>
            </Text>
            
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
        gap: 20,
    },
    greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B9CD3",
    marginBottom: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        color: "#333",
        marginBottom: 8,
    },
    highlight: {
        color: "#4B9CD3",
        fontWeight: "bold",
    },
    mobile: {
        color: "#27ae60",
        fontWeight: "bold",
    },
    description: {
        fontSize: 18,
        textAlign: "center",
        color: "#555",
        lineHeight: 26,
        maxWidth: 300,
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
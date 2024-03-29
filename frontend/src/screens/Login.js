import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { button1 } from '../common/button';
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from '../common/formcss';
import AuthenticationAPI from '../userContext/AuthenticationContext'
const Login = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })
    const [errormsg, setEroormsg] = useState(null);
    const { setLogin, setUserDbId } = React.useContext(AuthenticationAPI)

    const Sendtobackend = () => {
        console.log(fdata);
        if (fdata.email == '' || fdata.password == '') {
            setEroormsg('All fields are required');
            return;
        }
        else {
            fetch('http://172.17.13.131:3333/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        console.log(data);
                        if (data.error) {
                            setEroormsg(data.error);
                        }
                        else {
                            console.log('a')
                            setUserDbId(data.userDbId)
                            alert('Login successfully');
                            setLogin(true)
                        }
                    }
                )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.s1}>
                    <Text style={styles.h1}>TCN</Text>
                    <Text style={styles.small1}>SmartHome</Text>
                </View>
                <View style={styles.s2}>
                    <Text style={head1}>Login</Text>
                    <Text style={head2}>Sign in to continue</Text>
                    {
                        errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                    }
                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your Email"
                            onPressIn={() => setEroormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your Password"
                            onPressIn={() => setEroormsg(null)}
                            secureTextEntry={true}
                            onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        />
                    </View>
                    <View style={styles.fp}>
                        <Text style={link}>Forgot Password?</Text>
                    </View>
                    <Text style={button1}
                        onPress={() => Sendtobackend()}
                    >Login</Text>
                    <Text style={link2}>Don't have an account? &nbsp;
                        <Text style={link}
                            onPress={() => navigation.navigate('signup')}>
                            Create a new account</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'black',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    s1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
    },
    small1: {
        color: '#f0f',
        fontSize: 17,
    },
    h1: {
        fontSize: 30,
        color: '#f0f',
    },
    s2: {
        display: 'flex',
        backgroundColor: 'white',
        height: '60%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 17,
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#FFB0CC',
        borderRadius: 20,
        padding: 10,
    },
    fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 5,
    }
})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { button1 } from '../../common/button';
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from '../../common/formcss';

const SignUp = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        number: '',
    })

    const [errormsg, setEroormsg] = useState(null);

    const Sendtobackend = () => {
        console.log(fdata);
        if (fdata.name == '' ||
            fdata.email == '' ||
            fdata.number == '' ||
            fdata.password == '' ||
            fdata.cpassword == '') {
            setEroormsg('All fields are required');
            return;
        }
        else {
            if (fdata.password != fdata.cpassword) {
                setEroormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                fetch('http://192.168.1.106:3333/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata)
                })
                    .then(res => res.json()).then(
                        data => {
                            // console.log(data);
                            if (data.error) {
                                setEroormsg(data.error);
                            }
                            else {
                                alert('Account created successfully');
                                navigation.navigate('login');
                            }
                        }
                    )
            }
        }
    }
    return (
        <View style={styles.container1}>
            <View style={styles.s1}>
                {/*  */}
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Create a New Account</Text>
                <Text style={link2}>Already Registered?&nbsp;
                    <Text style={link}
                        onPress={() => navigation.navigate('login')}>
                        Login here
                    </Text>
                </Text>
                {
                    errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                }
                <View style={formgroup}>
                    <Text style={label}>Name</Text>
                    <TextInput style={input} placeholder="Enter your Name"
                        onPressIn={() => setEroormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, name: text })}
                    />
                </View>
                <View style={formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput style={input} placeholder="Enter your Email"
                        onPressIn={() => setEroormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                    />
                </View>
                <View style={formgroup}>
                    <Text style={label}>Number</Text>
                    <TextInput style={input} placeholder="Enter your Number"
                        onPressIn={() => setEroormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, number: text })}
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
                <View style={formgroup}>
                    <Text style={label}>Confirm Password</Text>
                    <TextInput style={input} placeholder="Comfirm your Password"
                        onPressIn={() => setEroormsg(null)}
                        secureTextEntry={true}
                        onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        Sendtobackend();
                    }}
                >
                    <Text style={button1}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

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
        height: '10%',
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
        height: '90%',
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
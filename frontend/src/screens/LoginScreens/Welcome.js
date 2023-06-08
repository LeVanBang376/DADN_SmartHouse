import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { button1 } from '../common/button';
import { formgroup, head1, head2, input, label, link, link2 } from '../common/formcss';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.s1}>
                    {/*  */}
                </View>
                <View style={styles.s2}>
                    <Text style={head1}>Create a New Account</Text>
                    <Text style={link2}>Already Registered?&nbsp;
                        <Text style={link}>
                            Login here
                        </Text>
                    </Text>
                    <View style={formgroup}>
                        <Text style={label}>Name</Text>
                        <TextInput style={input} placeholder="Enter your Name"/>
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your Email"/>
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Number</Text>
                        <TextInput style={input} placeholder="Enter your Number"/>
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your Password"/>
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Confirm Password</Text>
                        <TextInput style={input} placeholder="Comfirm your Password"/>
                    </View>
        
                    <Text style={button1}>Signup</Text>
                </View>
            </View>
        </View>
    )
}

export default Welcome

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
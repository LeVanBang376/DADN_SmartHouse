import React from 'react'
import { Text } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
export default function GradientText(props) {
    return (
        <MaskedView maskElement={<Text style={[props.style]}>{props.text}</Text>}>
            <LinearGradient
                colors={props.type == 'cold' ? ['#011CFF', '#0011A1'] : ['#EC1212', '#FFD028']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <Text style={[props.style, { opacity: 0 }]}>{props.text}</Text>
            </LinearGradient>
        </MaskedView>
    )
}

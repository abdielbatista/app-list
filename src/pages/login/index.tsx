import React from "react";

import {
    Text,
    View
} from 'react-native';

import { style } from "./styles";

export default function Login() {
    return(
        <View style={style.container}>
                <View style={style.boxTop}>
                    <Text>top</Text>
                </View>

                <View style={style.boxMid}>
                    <Text>mind</Text>
                </View>

                <View style={style.boxBottom}>
                    <Text>bootoom</Text>
                </View>
        </View>
    )
}

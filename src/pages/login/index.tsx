import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'

export default function Login() {
    return(
        <View style={style.container}>

                <View style={style.boxTop}>
                    <Image 
                        source={Logo}
                        style={style.logo} // chamar o style da imagem
                        resizeMode="contain"
                    />
                    <Text style={style.text}>Bem vindo de volta !</Text>
                </View>

                <View style={style.boxMid}>
                    <Text>Endereço de e-mail</Text>
                    <TextInput></TextInput>

                    <Text>Senha</Text>
                    <TextInput></TextInput>
                </View>

                <View style={style.boxBottom}>
                    
                </View>
        </View>
    )
}

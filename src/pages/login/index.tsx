import React, { useState } from "react";

// npx expo start --tunnel -- executar o app via expo

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true)
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == "abdielb@yahoo.com" && password == '12345'){

                    navigation.navigate("BottomRoutes")

                    Alert.alert('Logado com sucesso!')
                }else{
                    Alert.alert('Usuario não encontrado')
                }
                setLoading(false)
            },3000)
            
        } catch (error){
            console.log(error)
        }
    }

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

                    <Input 
                        value={email}
                        onChangeText={setEmail}
                        title="ENDEREÇO DE E-MAIL"
                        IconRigth={MaterialIcons}
                        iconRightName="email"
                    />

                    <Input 
                        value={password}
                        onChangeText={setPassword}
                        title="SENHA"
                        IconRigth={MaterialIcons}
                        iconRightName="remove-red-eye"
                        secureTextEntry={showPassword}
                        onIconRigthPress={()=>setShowPassword(!showPassword)}
                    />
                    

                </View>

                <View style={style.boxBottom}>

                    <Button text="ENTRAR" loading={loading} onPress={()=>getLogin()}></Button>

                </View>

                <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text></Text>
        </View>
    )
}

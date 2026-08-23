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

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == "abdielb@yahoo.com" && password == '12345'){
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
                    <Input></Input>
                    {/* <Text style={style.titleInput}>Endereço de e-mail</Text>

                    <View style={style.BoxInput}>

                        <TextInput style={style.Input}
                                    value={email}
                                    onChangeText={setEmail}
                        ></TextInput>
                        
                        <MaterialIcons name='email' size={20} color={themas.Colors.gray}></MaterialIcons>

                    </View>
                    

                    <Text style={style.titleInput}>Senha</Text>
                  
                    <View style={style.BoxInput}>

                        <TextInput style={style.Input}
                                    value={password}      
                                    onChangeText={setPassword}
                        ></TextInput>
                        
                        <MaterialIcons name='lock' size={20} color={themas.Colors.gray}></MaterialIcons>

                    </View> */}

                </View>

                <View style={style.boxBottom}>
                    
                    <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                        {
                            loading?
                                <ActivityIndicator color={'#FFFF'} size={'small'}/>
                                :
                                <Text style={style.textButton}>Entrar</Text>
                        }   

                    
                    </TouchableOpacity>

                </View>

                <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text></Text>
        </View>
    )
}

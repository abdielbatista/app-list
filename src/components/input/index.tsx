import React, { forwardRef,Fragment } from "react";

import {View, Text, TextInput} from 'react-native';
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export const Input = forwardRef(()=>{
    return(
        <Fragment>

            <Text style={style.titleInput}>Endereço de e-mail</Text>

            <View style={style.BoxInput}>

                <TextInput style={style.Input}></TextInput>
                
                <MaterialIcons name='email' size={20} color={themas.Colors.gray}></MaterialIcons>

            </View>
        </Fragment>

    )
})

import React, { forwardRef,Fragment } from "react";

import {View, Text, TextInput, TextInputProps} from 'react-native';
import { style } from "./styles";
import { themas } from "../../global/themes";

import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,  
    iconRightName?: string, 
    title?: string,
    onIconLeftPress?: () => void, 
    onIconRigthPress?: () => void ,
}

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

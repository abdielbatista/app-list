import React, { forwardRef,Fragment, LegacyRef } from "react";

import {View, Text, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
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

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{

    const {IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPress, ...rest} = Props


    return(
        <Fragment>

            <Text style={style.titleInput}>{title}</Text>

            <View style={style.BoxInput}>

                {IconLeft && iconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.Colors.gray} style={style.icon} />
                    </TouchableOpacity>
                )}

                <TextInput 
                    style={style.Input}
                    {...rest}
                />

                {IconRigth && iconRightName &&(
                    <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
                        <IconRigth name={iconRightName as any} size={20} color={themas.Colors.gray} style={style.icon} />
                    </TouchableOpacity>
                )}
                

            </View>

        </Fragment>

    )
})

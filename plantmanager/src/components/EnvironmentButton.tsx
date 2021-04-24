import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {
    RectButton, 
    RectButtonProperties
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProperties{
    title: string;
    active?: boolean; //? significa que não é obrigatório
}

export function EnvironmentButton({
    title, 
    active = false, // como ele não é obrigatório, foi definido esse valor default
    ...rest
} : EnvironmentButtonProps){

    return (
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text style={[
                    styles.text,
                    active && styles.textActive
                ]}>
                {title}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal:5
    },
    containerActive:{
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive:{
        color: colors.green_dark,
        fontFamily: fonts.heading
    }
})
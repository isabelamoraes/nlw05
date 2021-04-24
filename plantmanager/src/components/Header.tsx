import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';

import userImg from '../assets/icon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    }, [isFocused])

    async function handleRemoveUserName() {
        await AsyncStorage.removeItem('@plantmanager:user');

        navigation.navigate('UserIdentification');
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Swipeable
                    overshootRight={false}
                    renderRightActions={() => (
                        <Animated.View>
                            <View>
                                <RectButton
                                    style={styles.buttonLogout}
                                    onPress={handleRemoveUserName}
                                >

                                    <Feather name="x-circle" color={colors.red} size={24}/>

                                </RectButton>
                            </View>
                        </Animated.View>
                    )}
                >
                    <Text style={styles.userName}>{userName}</Text>
                </Swipeable>
            </View>

            <Image source={userImg} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingVertical: 20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: colors.green_light
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
        backgroundColor: colors.white,
        paddingRight:10
    },
    logout: {
        fontFamily: fonts.complement,
        color: colors.red,
    },
    buttonLogout: {
        width: 40,
        height: 30,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection:'row',
        right: 10,
        paddingLeft: 10
    },
});
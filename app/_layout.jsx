import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../stores/reducers'

const store = configureStore({ reducer })

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [loaded, error] = useFonts({
        'PlusJakartaSans-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
        SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='(auth)'
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='(user)'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='(dashboard)'
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </Provider>
    )
}

export default RootLayout
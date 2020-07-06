import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Details } from '../screens';
import { Header } from '../components';
import { BottomTabs } from './BottomTabs';

const Stack = createStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <Header scene={scene} previous={previous} navigation={navigation} />
                ),
                gestureEnabled: true,
            }}
        >
            <Stack.Screen
                name="Home"
                component={BottomTabs}
                options={{ headerTitle: '' }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerTitle: 'Details' }}
            />
        </Stack.Navigator>
    );
};
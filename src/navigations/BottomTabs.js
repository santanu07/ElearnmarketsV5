import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { useTheme, Portal, FAB } from 'react-native-paper';
// import { useIsFocused } from '@react-navigation/native';

import { Home, Courses, Account, Events, Settings } from '../screens';


const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = (props) => {
    // const theme = useTheme();
    // const routeName = props.route.state
    //     ? props.route.state.routes[props.route.state.index].name
    //     : 'Feed';

    // const isFocused = useIsFocused();

    // let icon = 'feather';

    // switch (routeName) {
    //     case 'Messages':
    //         icon = 'email-plus-outline';
    //         break;
    //     case 'Notifications':
    //         icon = 'bell';
    //         break;
    //     default:
    //         icon = 'feather';
    //         break;
    // }

    return (
        <React.Fragment>
            <Tab.Navigator
                initialRouteName="Home"
                backBehavior="initialRoute"
                shifting={true}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: 'home',
                    }}
                />
                <Tab.Screen
                    name="Courses"
                    component={Courses}
                    options={{
                        tabBarIcon: 'book',
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                        tabBarIcon: 'account-circle',
                    }}
                />
                <Tab.Screen
                    name="Events"
                    component={Events}
                    options={{
                        tabBarIcon: 'calendar-blank',
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Settings}
                    options={{
                        tabBarIcon: 'cog',
                    }}
                />
            </Tab.Navigator>
            {/* <Portal>
                <FAB
                    visible={isFocused}
                    icon={icon}
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 16,
                    }}
                    color="white"
                    theme={{
                        colors: {
                            accent: theme.colors.primary,
                        },
                    }}
                    onPress={() => { }}
                />
            </Portal> */}
        </React.Fragment>
    );
};
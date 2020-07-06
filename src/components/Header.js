import React from 'react';
import { TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Feed } from './feed';
// import { Details } from './details';

const Header = ({ scene, previous, navigation }) => {
    const theme = useTheme();
    const { options } = scene.descriptor;
    console.log(options)
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
                ? options.title
                : scene.route.name;

    return (
        <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
            {previous ? (
                <Appbar.BackAction
                    onPress={() => navigation.pop()}
                    color={theme.colors.primary}
                />
            ) : (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.openDrawer();
                        }}
                    >
                        <Avatar.Image
                            size={40}
                            source={{
                                uri:
                                    'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                            }}
                        />
                    </TouchableOpacity>
                )}
            <Appbar.Content
                title={
                    title === 'Feed' ? (
                        <MaterialCommunityIcons
                            style={{ marginRight: 10 }}
                            name="twitter"
                            size={40}
                            color={theme.colors.primary}
                        />
                    ) : (
                            title
                        )
                }
                titleStyle={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.colors.primary,
                }}
            />
        </Appbar.Header>
    );
};

export default Header
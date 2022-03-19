import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';

import ButtonNew from './components/ButtonNew';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#331436',
                    borderTopColor: 'transparent',
                    paddingTop: 5,
                    paddingBottom: 5
                },
                tabBarActiveTintColor: '#fcf4b6'
            }}
        >
            <Tab.Screen 
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Procurar"
                component={Search}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Adicionar"
                component={New}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonNew focused={focused} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Notificações"
                component={Notification}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="notification" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Routes;

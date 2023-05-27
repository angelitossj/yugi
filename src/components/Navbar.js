import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import InicioScreen from '../view/InicioScreen';
import CartasScreen from '../view/CartasScreen';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen 
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Yugioh"
        component={CartasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="game-controller-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navbar;

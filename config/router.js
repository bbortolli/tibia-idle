import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Character from '../screens/Character';
import Hunt from '../screens/Hunt';
import Inventory from '../screens/Inventory';
import Friends from '../screens/Friends';
import Shop from '../screens/Shop';
import Maps from '../screens/Maps';

const Tabs = createBottomTabNavigator(
    {
        char: {screen: Character},
        hunt: {screen: Hunt},
        inventory: {screen: Inventory},
        friends: {screen: Friends},
        shop: {screen: Shop},
        map: {screen: Maps},
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
              const { routeName } = navigation.state;
              
              var icon;

              switch(routeName){
                case 'char':
                  icon = navigation.isFocused() ? require('../assets/icons/char.png') : require('../assets/icons/no-char.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
                case 'map':
                  icon = navigation.isFocused() ? require('../assets/icons/map.png') : require('../assets/icons/no-map.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
                case 'hunt':
                  icon = navigation.isFocused() ? require('../assets/icons/hunt.png') : require('../assets/icons/no-hunt.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
                case 'inventory':
                  icon = navigation.isFocused() ? require('../assets/icons/inventory.png') : require('../assets/icons/no-inventory.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
                case 'friends':
                  icon = navigation.isFocused() ? require('../assets/icons/friends.png') : require('../assets/icons/no-friends.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
                case 'shop':
                  icon = navigation.isFocused() ? require('../assets/icons/shop.png') : require('../assets/icons/no-shop.png');
                  return <Image source={icon} style={{width: 48, height: 48}} />;
              }              
            },
        }),
        tabBarOptions: {
            showLabel: false,
            inactiveBackgroundColor: '#204969',
            activeBackgroundColor: '#527289',   
        },
  },
  
);

export default createAppContainer(Tabs);
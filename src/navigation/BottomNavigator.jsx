import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PhotosScreen from '../screens/PhotosScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Photos" 
          component={PhotosScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="photo" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
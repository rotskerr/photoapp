import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/redux/FavoritesContext';
import store, { persistor } from './src/redux/store';
import BottomNavigator from './src/navigation/BottomNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FavoritesProvider>
          <NavigationContainer>
            <BottomNavigator />
          </NavigationContainer>
        </FavoritesProvider>
      </PersistGate>
    </Provider>
  );
}

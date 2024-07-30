import { combineReducers } from 'redux';

const initialFavoritesState = [];

const favoritesReducer = (state = initialFavoritesState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(photo => photo.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;

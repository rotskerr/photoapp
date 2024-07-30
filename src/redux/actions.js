export const addFavorite = (photo) => ({
    type: 'ADD_FAVORITE',
    payload: photo,
  });
  
  export const removeFavorite = (photo) => ({
    type: 'REMOVE_FAVORITE',
    payload: photo,
  });
  
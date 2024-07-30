import axios from 'axios';

export async function fetchPhotos() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
    return response.data;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
}
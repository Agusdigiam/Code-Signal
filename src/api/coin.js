import axios from 'axios';

export async function getCoin() {
  try {
    return await axios.get('http://localhost:3000/api/coin');
  } catch (error) {
    console.log(error);
  }
}

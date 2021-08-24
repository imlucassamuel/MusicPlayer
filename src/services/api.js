import axios from 'axios';
import { getTokenFromUrl } from '../spotify';

const hash = getTokenFromUrl();

const api = axios.create({
  method: 'GET',
  baseURL: "https://api.spotify.com/v1",
  headers: { 
    
    'Authorization' : 'Bearer ' + hash.access_token,
    'Content-Type': 'application/json'
  }
})



export default api;

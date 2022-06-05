import axios from 'axios';

const proyeksi = 'http://localhost:1337/api/jabatans';
export const Proyeksi = () => axios.get(proyeksi);
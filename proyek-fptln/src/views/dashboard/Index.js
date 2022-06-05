import axios from 'axios';

const urlpeserta = 'http://localhost:1337/api/pendaftars?populate[0]=data_pegawai.jabatan';
export const UrlPeserta = () => axios.get(urlpeserta);
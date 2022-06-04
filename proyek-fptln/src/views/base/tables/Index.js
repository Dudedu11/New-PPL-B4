import axios from 'axios';

const urlpenguji = 'http://localhost:1337/api/pengujis?populate[0]=data_pegawai.jabatan';
export const UrlPenguji = () => axios.get(urlpenguji);

const urlpeserta = 'localhost:1337/api/agoys';
export const UrlPeserta = () => axios.get(urlpeserta);

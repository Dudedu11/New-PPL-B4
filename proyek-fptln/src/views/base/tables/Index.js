import axios from 'axios';

const urlpenguji = 'localhost:1337/api/pengujis?populate=*';
export const UrlPenguji = () => axios.get(urlpenguji);

const urlpeserta = 'http://192.168.100.3:1337/api/pesertas?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang';
export const UrlPeserta = () => axios.get(urlpeserta)
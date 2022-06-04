import axios from 'axios';

const urlpenguji = 'localhost:1337/api/pengujis?populate=*';
export const UrlPenguji = () => axios.get(urlpenguji);

const urlpeserta = 'http://localhost:1337/api/awdawdwas';
export const UrlPeserta = () => axios.get(urlpeserta)
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.106:3333',
});

export default api;

//rodar o servidor através do arquivo JSON
//json-server ./src/services/server.json --host 192.168.0.106 --port 3333

//acrescentar delay (no final do script acima) para simular carregamento e mostrar animação
//--delay 5000
import axios from 'axios'
import { languages } from 'eslint-plugin-prettier'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: 'db7f7d59d705ae38bb40a5db27ddc769',
        language: 'pt-BR',
        page: 1
    }
})

export default api
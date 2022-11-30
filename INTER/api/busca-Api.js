import axios from "axios";

const api=axios.create({
    baseURL:'http://localhost:3081/peoples/Doguinho-Ong/cadastros'
})

export default api;
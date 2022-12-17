import axios from "axios";

const api=axios.create({
    baseURL:'http://localhost:3080/peoples/auth/login'
})

export default api;
import axios from "axios";

const apiCodeBurger = axios.create({
    baseURL: 'https://devburger-api.onrender.com/'
})

apiCodeBurger.interceptors.request.use(async config => {
    const userData = await localStorage.getItem("codeburger:userData")
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `bearer ${token}`
    return config

})

export default apiCodeBurger
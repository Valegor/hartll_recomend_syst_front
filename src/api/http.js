import Axios from 'axios'
import router from '@/router/index'
import { VUE_APP_ROOT_API } from '@/const'

const baseURL = VUE_APP_ROOT_API

const http = Axios.create({
	baseURL,
	timeout: 50000,
})

http.defaults.withCredentials = true;
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

http.interceptors.response.use({}, err => {

	if(err.response.status === 401 || err.response.status === 419){
        const token = localStorage.getItem('x_xsrf_token')
        if(token){
            localStorage.removeItem('x_xsrf_token')
        }
		return err
    }
})


export default http


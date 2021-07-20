import { http } from './config.js'

export default {

    getProdutcs:() => {
        return http.get('produtos')
    }
}
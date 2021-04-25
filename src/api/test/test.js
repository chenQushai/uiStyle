import {axios} from '../axios/index'

export const test = () => {
    return axios.getData('/patInfo/1')
}
import { axios } from '../utils/request'

export function test() {
  return axios({
    url: 'https://api.julym.com/163/rand.php',
    method: 'get',
    params: { id: '2223747711' }
  })
}

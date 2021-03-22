import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(
  config => { return config },
  error => Promise.reject(error)
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => { return Promise.reject(error) }
)

export { service as axios }

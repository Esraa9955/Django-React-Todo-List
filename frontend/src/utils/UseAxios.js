import axios from 'axios'
import jwt_decode from 'jwt_decode'
import dayjs from 'dayjs'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const baseURL ='http://127.0.0.1:8000/api'

const UseAxios = () =>{
  const {authTokens, setUser, setAuthtokens} = useContext(AuthContext)
  const axiosInstance = axios.create({
    baseURL,
    headers: {Authorization: `Bearer ${authTokens?.access} `}
  }).access

  axiosInstance.interceptors.request.use(async req => {
    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
    if (isExpired) return req

    const response = await axios.post(`${baseURL}/token/refresh/`, {
      refresh: authTokens.refresh    })
    localStorage.setItem("authToken",JSON.stringify(response.data))
    // localStorage.setItem("authToken",JSON.stringify(response.data))

    setAuthtokens(response.data)
    setUser(jwt_decode(response.data.access))
    req.headers.Authorization = `Beare ${response.data.access}`
    return req
  })
  return axiosInstance
}

export default UseAxios
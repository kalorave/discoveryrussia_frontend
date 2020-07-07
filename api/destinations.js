import axios from 'axios'

const HEADERS = {
  Accept: 'application/json'
}

export default {
  get() {
    return axios.get(`${ process.env.apiUrl }tours/destinations_list/`, {
      headers: HEADERS
    })
  }
}

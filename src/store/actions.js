import axios from 'axios'

export const getJsonData = ({commit}) => {
  axios.get('data.json').then((response) => {
    commit('GET_INFO', response.data.Elements)
  })
}

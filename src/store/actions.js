import axios from 'axios'

export const getDocuments = ({commit}) => {
  axios.get('data.json').then((response) => {
    commit('GET_INFO', response.data.Elements)
  })
}







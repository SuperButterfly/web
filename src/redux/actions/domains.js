import axios from 'axios'
import { setResultantDomains } from '../slices/domainsSlices'

export const searchDomain = (searchTerm) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/domain', { searchTerm })
      const { results } = response.data
      dispatch(setResultantDomains(results))
      console.log(results)
    } catch (error) {
      console.error('Error searching for domains:', error)
    }
  }
}

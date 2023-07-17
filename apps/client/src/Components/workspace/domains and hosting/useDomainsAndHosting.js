import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchDomain, resetDomains } from '@/redux/actions/domains'

const useDomainsAndHosting = () => {
  const { resultantDomains } = useSelector((state) => state.domains)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const executeSearch = (ev) => {
    ev.preventDefault()
    handleSearch(searchTerm)
  }
  const handleSearch = async (domain) => {
    try {
      setLoading(true)
      await dispatch(searchDomain(domain))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const reset = async (domain) => {
    try {
      setSearchTerm('')
      dispatch(resetDomains())
    } catch (error) {}
  }

  return {
    resultantDomains,
    loading,
    searchTerm,
    setSearchTerm,
    executeSearch,
    reset,
    handleSearch
  }
}

export default useDomainsAndHosting

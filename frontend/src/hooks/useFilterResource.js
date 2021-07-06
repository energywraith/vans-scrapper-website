import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { filterChange, filterClear } from '../reducers/filterReducer'

const useFilterResource = () => {
  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)
  
  useEffect(() => {
    const filtersJSON = window.localStorage.getItem('filters')
    if (filtersJSON) {
      const storedFilter = JSON.parse(filtersJSON)
      dispatch(filterChange(storedFilter))
    }
  }, [dispatch])

  const changeFilter = ( filterKey, value ) => {
    dispatch(filterChange({ [filterKey]: value }))
    window.localStorage.setItem(
      'filters', 
      JSON.stringify({ ...filter, ...[{ [filterKey]: value }][0] })
    )
  }

  const clearFilter = () => {
    dispatch(filterClear())
    window.localStorage.setItem(
      'filters', 
      JSON.stringify({ size: [], type: null, model: null })
    )
  }

  const services = {
    changeFilter,
    clearFilter
  }

  return {
    value: filter, 
    ...services
  }
}

export default useFilterResource
import Select from 'react-select'
import { customStyles } from './SelectFilter.style'
import useFilterResource from '../../hooks/useFilterResource'

const SelectFilter = ({ placeholderText, filterKey, options, isMulti, isSearchable }) => {
  const filterService = useFilterResource()

  const handleFilterChange = (event) => {
    let value = Array.isArray(event)
      ? event.map(each => each.value) 
      : event.value

    filterService.changeFilter(filterKey, value)
  }

  return <Select
    styles={customStyles}
    placeholder={placeholderText ? placeholderText : "Select"}
    value={
      Array.isArray(filterService.value[filterKey])
        ? filterService.value[filterKey].map(t => { return { value: t, label: t } })
        : filterService.value[filterKey] !== null && { value: filterService.value[filterKey], label: filterService.value[filterKey] }
    }
    onChange={handleFilterChange}
    options={options}
    isMulti={isMulti}
    isSearchable={isSearchable}
  />
}

export default SelectFilter
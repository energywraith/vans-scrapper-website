const useFilterResource = () => {
  const isSizeFilterSet = (filter) => (
    filter.size === null || filter.size.includes(null) || filter.size.length === 0
      ? false
      : true
  )

  const getType = (name) => (
    name.includes("Pro") 
      ? 'Pro'
      : name.includes("ComfyCush")
        ? "ComfyCush"
        : "Other"
  )

  const SortList = (list, sortType) => {
    if (!sortType) return list
  
    const [sortBy, sortOrder] = sortType.split('-')
  
    if (sortBy === 'date') {
      list.sort((a, b) => sortOrder === 'asc'
        ? new Date(a.lastUpdated) - new Date(b.lastUpdated)
        : new Date(b.lastUpdated) - new Date(a.lastUpdated)
      )
    } else if (sortBy === 'price') {
      list.sort((a, b) => sortOrder === 'asc'
        ? a.price - b.price
        : b.price - a.price
      )
    }
  
    return list
  }
  
  const filterList = (list, filter) => (
    list
      .filter(model => isSizeFilterSet(filter) ? model.sizes.some(size => filter.size.includes(size)) : true)
      .filter(model => filter.type ? getType(model.name) === filter.type : true)
      .filter(model => filter.model ? model.name.includes(filter.model) : true)
  )
  
  const prepareList = (list, filter) => {
    let availableModels = list.filter(model => model.sizes.length > 0);
    let notAvailableModels = list.filter(model => model.sizes.length === 0);
    // First filter and sort available shoes 
    // Then do the same for the not available shoes and put them on the end of the list
    return SortList(filterList(availableModels, filter), filter.sort).concat(
      SortList(filterList(notAvailableModels, filter), filter.sort)
    )
  }

  return {
    isSizeFilterSet,
    prepareList
  }
}

export default useFilterResource
const defaultFilter = { size: [], type: null, model: null, sort: null }

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, ...[action.filter][0] }
    case 'CLEAR_FILTER':
      return defaultFilter
    default:
      return state
  }
}

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter // example: { size: 34 }
  }
}

export const filterClear = () => {
  return {
    type: 'CLEAR_FILTER'
  }
}

export default reducer
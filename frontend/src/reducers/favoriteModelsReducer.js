const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITE_MODEL':
      return action.data
    case 'ADD_FAVORITE_MODEL':
      return [ ...state, action.id ]
    case 'REMOVE_FAVORITE_MODEL':
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

export const setFavoriteModels = (data) => {
  return {
    type: 'SET_FAVORITE_MODEL',
    data
  }
}

export const addFavoriteModel = (id) => {
  return {
    type: 'ADD_FAVORITE_MODEL',
    id
  }
}

export const removeFavoriteModel = (id) => {
  return {
    type: 'REMOVE_FAVORITE_MODEL',
    id
  }
}

export default reducer
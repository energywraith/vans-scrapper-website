const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOES_DATA':
      return action.data
    default:
      return state
  }
}

export const setShoesData = (data) => {
  return {
    type: 'SET_SHOES_DATA',
    data
  }
}

export default reducer
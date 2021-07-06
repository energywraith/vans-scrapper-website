import { createStore, combineReducers } from 'redux'
import shoesDataReducer from './reducers/shoesDataReducer'
import filterReducer from './reducers/filterReducer'
import favoriteModelsReducer from './reducers/favoriteModelsReducer'

// Need thunk middleware for async functions 
const reducer = combineReducers({
  shoesData: shoesDataReducer,
  filter: filterReducer,
  favoriteModels: favoriteModelsReducer
})

const store = createStore(
  reducer
)

export default store
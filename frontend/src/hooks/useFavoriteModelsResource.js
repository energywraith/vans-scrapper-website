import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteModels, addFavoriteModel, removeFavoriteModel } from '../reducers/favoriteModelsReducer'

const useFavoriteModelsResource = () => {
  const dispatch = useDispatch()

  const favoriteModels = useSelector(state => state.favoriteModels)
  
  useEffect(() => {
    const favoriteModelsJSON = window.localStorage.getItem('favoriteModels')
    if (favoriteModelsJSON) {
      const storedData = JSON.parse(favoriteModelsJSON)
      dispatch(setFavoriteModels(storedData))
    }
  }, [dispatch])

  const addModelToFavorite = (idToAdd) => {
    dispatch(addFavoriteModel(idToAdd))
    window.localStorage.setItem(
      'favoriteModels', 
      JSON.stringify([ ...favoriteModels, idToAdd ])
    )
  }

  const removeModelFromFavorite = (idToRemove) => {
    dispatch(removeFavoriteModel(idToRemove))
    window.localStorage.setItem(
      'favoriteModels',
      JSON.stringify(favoriteModels.filter(id => id !== idToRemove))
    )
  }

  return {
    favoriteModels, 
    addModelToFavorite,
    removeModelFromFavorite
  }
}

export default useFavoriteModelsResource
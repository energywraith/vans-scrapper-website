import React from 'react'
import useDataResource from '../../hooks/useDataResource'
import useFavoriteModelsResource from '../../hooks/useFavoriteModelsResource'

import ShoesListElement from '../ShoesList/ShoesListElement'
import { ToggleFavoriteButton } from '../ShoesList/ShoesListElement.style'
import { NoFavorites } from './index.style'
import favoriteSVG from '../../images/favorite.svg'

const Favorites = () => {
  const models = useDataResource()
  const { favoriteModels } = useFavoriteModelsResource()

  const modelsToShow = models.filter(model => favoriteModels.includes(model.id))

  const isSizeFilterSet = (filter) => (
    filter.size === null || filter.size.includes(null) || filter.size.length === 0
      ? false
      : true
  )

  return (
    <ul>
      {modelsToShow.length > 0
        ? modelsToShow.map(model =>
            <ShoesListElement
              key={model.id}
              model={model}
              isSizeFilterSet={isSizeFilterSet}
              isFavorite={favoriteModels.includes(model.id) ? true : false}
            />
          )
        : <NoFavorites>
            You dont have any favorites yet, add the model you like by clicking
            <ToggleFavoriteButton>
              <img src={favoriteSVG} alt="toggleFavorite" />
            </ToggleFavoriteButton>
            in models section.
          </NoFavorites>
      }
    </ul>
  )
}

export default Favorites
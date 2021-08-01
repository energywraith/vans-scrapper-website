import React from 'react'
import useDataResource from '../../hooks/useDataResource'
import useFavoriteModelsResource from '../../hooks/useFavoriteModelsResource'

import ShoesListElement from '../ShoesList/ShoesListElement'
import { FavouritesButton } from '../ShoesList/ShoesListElement.style'
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
              isFavourite={favoriteModels.includes(model.id) ? true : false}
              onRemoveVanish
            />
          )
        : <NoFavorites>
            You dont have any favorites yet, add the model you like by clicking
            <FavouritesButton>
              <img src={favoriteSVG} alt="toggleFavorite" />
            </FavouritesButton>
            in models section.
          </NoFavorites>
      }
    </ul>
  )
}

export default Favorites
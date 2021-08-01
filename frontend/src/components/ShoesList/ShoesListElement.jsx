import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import useFavoriteModelsResource from '../../hooks/useFavoriteModelsResource';
import useSortResource from '../../hooks/useSortResource'
import { 
  ListElement,
  Thumbnail,
  ThumbnailImage,
  Name,
  SizeList,
  Price,
  FavouritesButton
} from './ShoesListElement.style'
import favoriteSVG from '../../images/favorite.svg'

const ShoesListElement = ({ model, isFavourite, onRemoveVanish }) => {
  const { addModelToFavorite, removeModelFromFavorite } = useFavoriteModelsResource()
  const { isSizeFilterSet } = useSortResource()
  const filter = useSelector(state => state.filter)
  const containerRef = useRef()

  const handleRemoveVanish = (e, id) => {
    containerRef.current.style.opacity = 0

    setTimeout(() => {
      removeModelFromFavorite(id)
    }, 300)
  }

  const handleFavoriteButton = (e, id) => {
    isFavourite
      ? onRemoveVanish ? handleRemoveVanish(e, id) : removeModelFromFavorite(id)
      : addModelToFavorite(id)
  }

  return (
    <ListElement ref={containerRef}>
      <Thumbnail href={model.url}>
        <ThumbnailImage src={model.img} alt='Thumbnail' />
      </Thumbnail>
      <FavouritesButton onClick={(e) => handleFavoriteButton(e, model.id)} isFavourite={isFavourite}>
        <img src={favoriteSVG} alt='add to favourites' />
      </FavouritesButton>
      <Name href={model.url}> {model.name} </Name>
      <SizeList>
        {model.sizes.length > 0
          ? model.sizes
              .filter(size => isSizeFilterSet(filter) ? filter.size.includes(size) : true)
              .map(size => (
                <li key={size}> {size} </li>
              ))
          : <li> Not available </li>
        }
      </SizeList>
      <Price> Price: <b> {model.price} zł </b> </Price>
    </ListElement>
  )
}

export default ShoesListElement
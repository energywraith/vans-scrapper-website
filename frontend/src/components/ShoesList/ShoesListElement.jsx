import React from 'react'
import { useSelector } from 'react-redux';
import useFavoriteModelsResource from '../../hooks/useFavoriteModelsResource';
import useSortResource from '../../hooks/useSortResource'
import { 
  ListElement,
  PreviewImageContainer,
  InfoGroup,
  Header,
  ToggleFavoriteButton,
  SizeList,
  PriceTag,
  UpdateDate
} from './ShoesListElement.style'
import favoriteSVG from '../../images/favorite.svg'

const ShoesListElement = ({ model, isFavorite }) => {
  const { addModelToFavorite, removeModelFromFavorite } = useFavoriteModelsResource()
  const { isSizeFilterSet } = useSortResource()
  const filter = useSelector(state => state.filter)

  const handleFavoriteButton = (id) => {
    isFavorite
    ? removeModelFromFavorite(id)
    : addModelToFavorite(id)
  }

  return (
    <ListElement>
      <PreviewImageContainer href={model.url}> 
        <img src={model.img} alt="preview" />
      </PreviewImageContainer>
      <InfoGroup>
        <Header> 
          <ToggleFavoriteButton 
            isFavorite={isFavorite} 
            onClick={() => handleFavoriteButton(model.id)}
          > 
            <img src={favoriteSVG} alt="toggleFavorite" /> 
          </ToggleFavoriteButton>
          <a href={model.url}> {model.name} </a>
        </Header>
        <SizeList>
          {model.sizes.length > 0 
            ? model.sizes
              .filter(size => isSizeFilterSet(filter) ? filter.size.includes(size) : true)
              .map(size => 
              <li key={size}> {size} </li>
              )
            : <span> Unavailable </span>
          }
        </SizeList>
        <PriceTag> {model.price} zł </PriceTag>
        <UpdateDate> {model.lastUpdated} </UpdateDate>
      </InfoGroup>
    </ListElement>
  )
}

export default ShoesListElement
import React from 'react'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import useDataResource from '../../hooks/useDataResource'
import useFavoriteModelsResource from '../../hooks/useFavoriteModelsResource';
import useInfiniteLoading from '../../hooks/useInfiniteLoading';
import useSortResource from '../../hooks/useSortResource'

import Loader from '../Loader'
import ShoesListElement from './ShoesListElement';
import { ListContainer, CountInfo } from './index.style';
import SortFilter from './SortFilter';

const ShoesList = () => {
  const models = useDataResource()
  const { favoriteModels } = useFavoriteModelsResource()
  const { prepareList } = useSortResource()
  const filter = useSelector(state => state.filter)

  const vansShoesFiltered = prepareList(models, filter)
  const infiniteLoading = useInfiniteLoading(vansShoesFiltered, filter)

  return (
    <ListContainer>
      <CountInfo> {vansShoesFiltered.length} models match the following filters </CountInfo>
      <SortFilter />
      <InfiniteScroll
        dataLength={infiniteLoading.current.length}
        next={infiniteLoading.getMoreData}
        hasMore={infiniteLoading.hasMore}
        loader={<Loader />}
      >
        <ul>
          {infiniteLoading.current && infiniteLoading.current.map(model => 
            <ShoesListElement 
              key={model.id}
              model={model}
              isFavorite={favoriteModels.includes(model.id) ? true : false}
            />
          )}
        </ul>
      </InfiniteScroll>
    </ListContainer>
  )
}

export default ShoesList
import React from 'react'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import useDataResource from '../hooks/useDataResource'
import useFavoriteModelsResource from '../hooks/useFavoriteModelsResource';
import useInfiniteLoadingResource from '../hooks/useInfiniteLoadingResource';

import Loader from './Loader'
import ShoesListElement from './ShoesListElement';
import { ListContainer, CountInfo } from './ShoesList.style';

const isSizeFilterSet = (filter) => (
  (filter.size === null || filter.size.includes(null) || filter.size.length === 0) 
    ? false
    : true
)

const ShoesList = () => {
  const models = useDataResource()
  const { favoriteModels } = useFavoriteModelsResource()
  const filter = useSelector(state => state.filter)

  const vansShoesFiltered = 
    filterList(
      models
        .filter(model => model.sizes.length > 0)
        .sort((a, b) => a.price - b.price),
      filter
    ).concat(
      filterList(
        models
          .filter(model => model.sizes.length === 0)
          .sort((a, b) => a.price - b.price), 
        filter
    ))

  const infiniteLoading = useInfiniteLoadingResource(vansShoesFiltered, filter)

  return (
    <ListContainer>
      <CountInfo> {vansShoesFiltered.length} models match the following filters </CountInfo>
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
              isSizeFilterSet={isSizeFilterSet}
              isFavorite={favoriteModels.includes(model.id) ? true : false}
            />
          )}
        </ul>
      </InfiniteScroll>
    </ListContainer>
  )
}

const getType = (name) => (
  name.includes("Pro")
    ? "Pro"
    : name.includes("ComfyCush")
      ? "ComfyCush"
      : "Other"
)

const filterList = (list, filter) => (
  list
    .filter(model => isSizeFilterSet(filter) ? model.sizes.some(size => filter.size.includes(size)) : true)
    .filter(model => filter.type ? getType(model.name) === filter.type : true)
    .filter(model => filter.model ? model.name.includes(filter.model) : true)
)

export default ShoesList
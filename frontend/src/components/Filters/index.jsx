import { Container, ClearFilter } from './index.style'
import SelectFilter from './SelectFilter'
import useFilterResource from '../../hooks/useFilterResource'
import clearFilterSvg from '../../images/filter-remove.svg'
import { sizeOptions, typeOptions, modelOptions } from './filters'

const Filters = () => {
  const filterService = useFilterResource()

  return (
    <Container>
      <SelectFilter
        placeholderText={"Select size"}
        filterKey={"size"}
        options={sizeOptions}
        isMulti={true}
      />
      <SelectFilter
        placeholderText={"Select type"}
        filterKey={"type"}
        options={typeOptions}
        isMulti={false}
      />
      <SelectFilter
        placeholderText={"Select silhouette"}
        filterKey={"model"}
        options={modelOptions}
        isMulti={false}
      />
      <ClearFilter onClick={filterService.clearFilter} title="Clear filter">
        <img src={clearFilterSvg} alt="clear filter" />
      </ClearFilter>
    </Container>
  )
}

export default Filters
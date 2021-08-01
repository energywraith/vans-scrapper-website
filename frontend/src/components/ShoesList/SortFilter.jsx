import SelectFilter from '../Filters/SelectFilter'
import { Wrapper } from './SortFilter.style'

const SortFilter = () => {
  return (
    <Wrapper>
      <SelectFilter
        options={[
          { value: 'price-asc', label: 'price ascending' },
          { value: 'price-desc', label: 'price descending' },
          { value: 'date-asc', label: 'date ascending', isDisabled: true },
          { value: 'date-desc', label: 'date descending', isDisabled: true }
        ]}
        placeholderText={"Select size"}
        filterKey={"sort"}
        isMulti={false}
        isSearchable={false}
      />
    </Wrapper>
  )
}

export default SortFilter
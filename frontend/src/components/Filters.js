import { Container, ClearFilter } from './Filters.style'
import SelectFilter from '../components/SelectFilter'
import useFilterResource from '../hooks/useFilterResource'
import clearFilterSvg from '../images/filter-remove.svg'

const sizeOptions = [
  { value: '34.5', label: '34.5' },
  { value: '35', label: '35' },
  { value: '36', label: '36' },
  { value: '36.5', label: '36.5' },
  { value: '37', label: '37' },
  { value: '38', label: '38' },
  { value: '38.5', label: '38.5' },
  { value: '39', label: '39' },
  { value: '40', label: '40' },
  { value: '40.5', label: '40.5' },
  { value: '41', label: '41' },
  { value: '42', label: '42' },
  { value: '42.5', label: '42.5' },
  { value: '43', label: '43' },
  { value: '44', label: '44' },
  { value: '44.5', label: '44.5' },
  { value: '45', label: '45' }
]

const typeOptions = [
  { value: null, label: 'all' },
  { value: 'Pro', label: 'Pro' },
  { value: 'ComfyCush', label: 'ComfyCush' },
  { value: 'Other', label: 'Other' },
]

const modelOptions = [
  { value: null, label: 'all' },
  { value: 'Old Skool', label: 'Old Skool' },
  { value: 'Authentic', label: 'Authentic' },
  { value: 'Era', label: 'Era' },
  { value: 'MTE', label: 'MTE' },
  { value: 'Slip-On', label: 'Slip-On' },
  { value: 'UltraRange', label: 'UltraRange' },
  { value: 'Sk8-Hi', label: 'Sk8-Hi' }
]

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
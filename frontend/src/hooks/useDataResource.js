import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAll } from '../services/vansData'
import { setShoesData } from '../reducers/shoesDataReducer'

const useDataResource = () => {
  const dispatch = useDispatch()

  const shoesData = useSelector(state => state.shoesData)

  useEffect(() => {
    getAll()
      .then((res) => dispatch(setShoesData(res)))
      .catch((error) => console.log(error))
  }, [dispatch])

  return shoesData
}

export default useDataResource
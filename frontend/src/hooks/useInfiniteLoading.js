import { useState, useEffect } from 'react'

const useInfiniteLoading = ( items, additionalProps ) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(items.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === items.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(items.slice(count.prev + 10, count.next + 10)))
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }

  // Before data get request end, page renders the component with no data which results in InfiniteLoadingComponent not working properly
  useEffect(() => {
    if (current.length === 0 && items.length !== 0) {
      setCurrent(items.slice(count.prev, count.next))
      if(items.length > 10) {
        setHasMore(true)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Everytime additional prop changes, reset the values
  // ex. everytime filter changes
  useEffect(() => {
    setCurrent(items.slice(0, 10))
    setHasMore(false)
    if(items.length > 10) {
      setCount({
        prev: 0,
        next: 10
      })
      setHasMore(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [additionalProps])
  
  
  return {
    current,
    getMoreData,
    hasMore
  }
}

export default useInfiniteLoading
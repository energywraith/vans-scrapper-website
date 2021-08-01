import { useState, useEffect } from 'react'

const useInfiniteLoading = ( items, additionalProps ) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 16
  })

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(items.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === items.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(items.slice(count.prev + 16, count.next + 16)))
    }, 1000)
    setCount((prevState) => ({ prev: prevState.prev + 16, next: prevState.next + 16 }))
  }

  // Before data get request end, page renders the component with no data which results in InfiniteLoadingComponent not working properly
  useEffect(() => {
    if (current.length === 0 && items.length !== 0) {
      setCurrent(items.slice(count.prev, count.next))
      if(items.length > 16) {
        setHasMore(true)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Everytime additional prop changes, reset the values
  // ex. everytime filter changes
  useEffect(() => {
    setCurrent(items.slice(0, 16))
    setHasMore(false)
    if(items.length > 16) {
      setCount({
        prev: 0,
        next: 16
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
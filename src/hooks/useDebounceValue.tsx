import { useEffect, useState } from "react"

export const useDebounceValue = (input: string = '', time: number = 500) => {

  const [debounceValue, setDevounceValue] = useState(input);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setDevounceValue(input)
    }, time);

    return () => {
      clearTimeout(timeout)
    }
  }, [input])

  return debounceValue

}
import { useState, useEffect } from "react"

export default function useViewport() {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useEffect(() => {
    setWidth(window?.innerWidth)
    setHeight(window?.innerHeight)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return { width, height }
}

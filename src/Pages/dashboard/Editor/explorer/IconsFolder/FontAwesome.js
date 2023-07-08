/* global localStorage */
import './Iconox.css'
import { useState, useEffect, useRef } from 'react'

const FontAwesome = ({ iconElementRef }) => {
  const apiUrl =
    'https://api-web.aythen.com/api/resources/icons?source=fontawesome&page='

  const [icons, setIcons] = useState([])
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [draggingIcon, setDraggingIcon] = useState(null)

  const iconsContainerRef = useRef(null)

  useEffect(() => {
    loadIcons()
  }, [])

  const handleDrag = (name) => {
    localStorage.setItem('text', `fontawesome/${name}`)
  }

  const handleDragOver = (e) => {
    // Allow dropping
    e.preventDefault()
  }

  const handleDrop = (e) => {
    // Get the index of the dropped icon
    const index = e.dataTransfer.getData('text/plain')

    // Clone the dragging icon and add it to the editor component
    const iconClone = draggingIcon.cloneNode(true)
    e.target.appendChild(iconClone)

    // Remove the dragging icon from the container
    draggingIcon.parentNode.removeChild(draggingIcon)
    setDraggingIcon(null)
  }

  function loadIcons() {
    setIsLoading(true)
    fetch(apiUrl + page)
      .then((response) => response.json())
      .then((data) => {
        const newIcons = data.svgs
        setIcons((prevIcons) => [...prevIcons, ...newIcons])
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar los íconos:', error)
        setIsLoading(false)
      })
  }

  function handleScroll() {
    if (isLoading) {
      return
    }

    const scrollTop = iconElementRef.current.scrollTop
    const scrollHeight = iconElementRef.current.scrollHeight
    const clientHeight = iconElementRef.current.clientHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    iconElementRef.current.addEventListener('scroll', handleScroll)
    return () =>
      iconElementRef && iconElementRef.current
        ? iconElementRef.current.removeEventListener('scroll', handleScroll)
        : null
  }, [])

  useEffect(() => {
    if (page > 0) {
      loadIcons()
    }
  }, [page])

  return (
    <div className="icons-container">
      {icons.map((icon, index) => (
        <span
          key={index}
          className="icon-wrapper"
          draggable
          onDrag={() => handleDrag(icon.name)}
        >
          <div
            height="24"
            width="24"
            viewBox="0 0 1024 1024"
            fill="#262626"
            className="jsx-3323936745"
            dangerouslySetInnerHTML={{ __html: icon.data }}
          ></div>
        </span>
      ))}
      {isLoading && <div>Cargando...</div>}
    </div>
  )
}

export default FontAwesome

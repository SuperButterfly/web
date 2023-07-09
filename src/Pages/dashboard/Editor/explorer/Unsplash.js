import './unsplash.css'
import { useRef } from 'react'
import ImageGallery from './ImageGallery'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1681335035247-29a201823863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHwxfHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'zGw5LqvpHQI'
  },
  {
    src: 'https://images.unsplash.com/photo-1681210974423-89e86024f27a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'qt82DHalt50M'
  },
  {
    src: 'https://images.unsplash.com/photo-1679941734238-56628f5991f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'FVGT82dkh7A'
  },
  {
    src: 'https://images.unsplash.com/photo-1681502015056-e2ba87b61102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'uIaBQPvRox0'
  },
  {
    src: 'https://images.unsplash.com/photo-1581088577147-42d9fef8fc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'X2pmQKJjCaQ'
  },
  {
    src: 'https://images.unsplash.com/photo-1681697390349-ce67ad7014e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw2fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'cIED8mVpyTY'
  },
  {
    src: 'https://images.unsplash.com/photo-1681814305569-c7b872ec051b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'EuNZ5G5yGUY'
  },
  {
    src: 'https://images.unsplash.com/photo-1681385936857-d7bd675a9057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'D_TnI7MW0lk'
  },
  {
    src: 'https://images.unsplash.com/photo-1681158200230-39fd79b125f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4MTgyNTgwOQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'JlRUdWLHdSI'
  },
  {
    src: 'https://images.unsplash.com/photo-1681776650206-9e13ecc237b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODE4MjU4MDk&ixlib=rb-4.0.3&q=80&w=200',
    alt: '36r9ykzBPFc'
  },
  {
    src: 'https://images.unsplash.com/photo-1561651188-d207bbec4ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHwxfHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: '-gG86PdIzUA'
  },
  {
    src: 'https://images.unsplash.com/photo-1592431913823-7af6b323da9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHwyfHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'C5SUkYZT7nU'
  },
  {
    src: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHwzfHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'POMpXtcVYHo'
  },
  {
    src: 'https://images.unsplash.com/photo-1560390591-15ee5df86045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw0fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'u29A-hrVgJU'
  },
  {
    src: 'https://images.unsplash.com/photo-1597392582469-a697322d5c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw1fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'oHoBIbDj7lo'
  },
  {
    src: 'https://images.unsplash.com/photo-1529254479751-faeedc59e78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw2fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'gD62YSirxaU'
  },
  {
    src: 'https://images.unsplash.com/photo-1586084531149-373985a4478e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw3fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: '9zaC1lxwPrE'
  },
  {
    src: 'https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw4fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'YPgTovTiUv4'
  },
  {
    src: 'https://images.unsplash.com/photo-1562776903-cc60d622df72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHw5fHx3b3JkfGVufDB8fHx8MTY4MTc0NTIyNA&ixlib=rb-4.0.3&q=80&w=200',
    alt: 'oHVdj31R3F4'
  },
  {
    src: 'https://images.unsplash.com/photo-1555323912-3526a765162b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixalt=Mnw0MzIzNzR8MHwxfHNlYXJjaHwxMHx8d29yZHxlbnwwfHx8fDE2ODE3NDUyMjQ&ixlib=rb-4.0.3&q=80&w=200',
    alt: '_wZaegHzdQc'
  }
]

const Unsplash = () => {
  const usplashRef = useRef(null)
  return (
    <div className="unsplash-container" ref={usplashRef}>
      <div className="unsplash-container01">
        <span>Preview at Hover</span>
        <div className="unsplash-container02">
          <div className="unsplash-container03"></div>
        </div>
      </div>

      <ImageGallery usplashRef={usplashRef} images={images} />
    </div>
  )
}

export default Unsplash

import { useContext, createContext, useState, useMemo } from 'react'

const AlbumContext = createContext()

const AlbumProvider = ({ children }) => {
  const [album, setAlbum] = useState({})

  const value = useMemo(() => ({ album, setAlbum }), [album])
  return <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>

}

const useAlbum = () => {
  const context = useContext(AlbumContext)
  if (context === undefined) {
    throw new Error('useAlbum needs to be defined within the AlbumContext Provider')
  }
  return context
}

export { AlbumContext, AlbumProvider, useAlbum }

// Inside any component that is wrapped in your <AlbumProvider>:
// import useAlbum from './hooks/useContext' << or something
// const [album, setAlbum] = useAlbum()

// setAlbum(newAlbumFromTheForm)
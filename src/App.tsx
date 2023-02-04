import { useEffect, useState } from 'react'

import { fetchAPI } from './fetch'

import { Navigation } from '@/components'
import VideosProvider from './context/Videos'

//https://rapidapi.com/Glavier/api/youtube138/
//https://rapidapi.com/ytdlfree/api/youtube-v31/

function App() {
  /* const [category, setCategory] = useState('New')

  useEffect(() => {
    fetchAPI(`search/?q=asmr`)
      .then((data) => { console.log(data) })
  }, [category]) */

  return (
    <VideosProvider>
      <Navigation />
    </VideosProvider>
  )
}

export default App

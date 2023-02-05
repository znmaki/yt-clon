import { Navigation } from '@/components'
import VideosProvider from './context/Videos'

function App() {
  return (
    <VideosProvider>
      <Navigation />
    </VideosProvider>
  )
}

export default App

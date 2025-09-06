import { useState } from 'react'
import Navigation from './components/Navigation'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import WeddingCrew from './components/WeddingCrew'
import Gallery from './components/Gallery'
import SpecialThanks from './components/SpecialThanks'
import Footer from './components/footer'
import WeddingMusic from './components/WeddingMusic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <WeddingMusic musicUrl="/music/weddingMusic.mp3" />
      <OurStory />
      <EventDetails />
      <WeddingCrew />
      <Gallery />
      <SpecialThanks />
      <Footer />
    </>
  )
}

export default App

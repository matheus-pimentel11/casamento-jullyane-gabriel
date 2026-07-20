import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Gallery from "./components/Gallery"
import RSVP from "./components/RSVP"
import GiftList from "./components/GiftList"
import Footer from "./components/Footer"
import Location from "./components/Location"

function App() {
  return (
    <div className="w-full min-h-screen bg-white">

      <Navbar />

      <Hero />

      <Story />

      <Gallery />

      <Location />

      <GiftList />

      <RSVP />
      
      <Footer />

    </div>
  )
}

export default App

import './App.css'
import Header from './Home/Header'
import Hero from './Home/Hero'
import TopCreators from './Home/TopCreators'
import Trending from './Home/Trending'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Trending/>
      <TopCreators/>
    </div>
  )
}

export default App

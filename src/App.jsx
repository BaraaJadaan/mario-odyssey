import './App.scss'
import Categories from './Home/Categories'
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
      <Categories/>
    </div>
  )
}

export default App

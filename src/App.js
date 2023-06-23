import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPage />
      <Footer />
    </div>
  )
}

export default App

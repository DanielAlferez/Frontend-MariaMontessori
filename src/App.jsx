import { Fragment } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Posts/Post'
import Posts from './components/Posts/Posts'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='*' element={<>Error 404</>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/post/:id' element={<Post/>}/>
          <Route exact path='/posts' element={<Posts/>}/>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App

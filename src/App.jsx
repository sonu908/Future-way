import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Landing from './Home/Landing'
import NotFound from './Home/NotFound'

function App() {

  return (
    <>
      <Routes>
      {/* <Route path='/' element={<Landing />} />      */}
      <Route path='/' element={<NotFound />} />     
       </Routes>

    </>
  )
}

export default App

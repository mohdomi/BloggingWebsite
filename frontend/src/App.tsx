import { BrowserRouter  ,Route , Routes } from 'react-router-dom'
import Signup from "./routes/Signup"
import Signin from './routes/Signin'
import Blog from './routes/Blog'
import Blogs from './routes/Blogs'
import Create from './routes/Create'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/create-blog' element={<Create/>}></Route>
        <Route path='/' element={<Navigate to="/signup" replace/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

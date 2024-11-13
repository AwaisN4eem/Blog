
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/P_Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import {  UserContextProvider } from './context/UserContext'
import MyBlogs from './pages/MyBlogs'
import ContestCard from '../src/pages/ContestCard'
import Blogs from './pages/Blogs'
import LoginPage from './pages/LoginPage'
import Submittable from './pages/Submittabel'
import SignUp from './pages/Signup'
import GuidelineAndSubmission from './pages/GuidelinesAndSumission'


const App = () => {

  return (
      <UserContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contest" element={<ContestCard/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/submittable" element={<Submittable/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/guidelines" element={<GuidelineAndSubmission/>}/>

      {/* <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/> */}
      </Routes>
    
      </UserContextProvider>
  )
}

export default App
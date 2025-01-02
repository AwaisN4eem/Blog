
import {Route, Routes} from 'react-router-dom'
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import MyBlogs from './pages/MyBlogs'


import Home from "./pages/P_Home"
import {  UserContextProvider } from './context/UserContext'
import ContestCard from '../src/pages/ContestCard'
import Blogs from './pages/Blogs'
import LoginPage from './pages/LoginPage'
import Submittable from './pages/Submittabel'
import SignUp from './pages/Signup'
import GuidelineAndSubmission from './pages/GuidelinesAndSumission'
import Blog from './pages/Blog'
import AdminDashboard from './pages/AdminDashboard'


const App = () => {

  return (
      <UserContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contest" element={<ContestCard/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/submittable" element={<Submittable/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/guidelines" element={<GuidelineAndSubmission/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/admindashboard" element={<AdminDashboard/>}/>



      {/* previous version */}
      {/* <Route exact path="/createpost" element={<CreatePost/>}/> 
      <Route exact path="/login" element={<Login/>}/>
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
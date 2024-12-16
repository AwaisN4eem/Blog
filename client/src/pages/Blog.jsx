import React from "react";
import BlogContent from "../pages/BlogContent"
import Nav from '../components/Nav'
import Footer from '../components/P_Footer'


const Blog = ()=>{
    return(<>
    <Nav bgColor='bg-[#E5E4E2]' ItemsColor='black'/>
    <div className="flex justify-center items-center min-h-screen bg-white text-white py-10 px-6">
        <BlogContent/>
    </div>
        <Footer/>
    </>
    );
}

export default Blog;
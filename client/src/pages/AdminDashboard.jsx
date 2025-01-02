import React from 'react';
import Footer from '../components/P_Footer'
import Nav from '../components/Nav'

const AdminDashboard = () => {
  // Hard-coded data for dashboard cards
  const totalBlogs = 120;
  const totalRequests = 15;

  // Hard-coded data for requested blogs
  const requestedBlogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      datetime: '2025-01-01 10:30 AM',
      author: 'John Doe',
      category: 'React',
    },
    {
      id: 2,
      title: 'Tailwind CSS Best Practices',
      datetime: '2025-01-02 09:15 AM',
      author: 'Jane Smith',
      category: 'CSS',
    },
    {
      id: 3,
      title: 'State Management with Redux',
      datetime: '2025-01-03 02:45 PM',
      author: 'Alice Johnson',
      category: 'Redux',
    },
    // Add more blog entries as needed
  ];

  return (
    <>
    <div className="flex min-h-screen bg-[#E5E4E2]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-20 bg-[#BF0000]">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <nav className="mt-10 ">
          <a
            href="#"
            className="flex items-center rounded-md py-2 px-8 text-gray-700 hover:bg-gray-200"
          >
            Add New Posts
          </a>

          <a
            href="#"
            className="flex items-center rounded-md py-2 px-8 text-gray-700 hover:bg-gray-200"
          >
           
            Categories
          </a>
          <a
            href="#"
            className="flex items-center rounded-md py-2 px-8 bg-gray-200 text-gray-900"
          >

            Manage Admins
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Live Blogs
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200"
          >
            
            Logout
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
      <div className=''>
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <h1 className="text-xl font-normal mb-8">Welcome back Admin</h1>
      </div>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500 text-white rounded-full">
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Blogs</p>
                <p className="text-2xl font-semibold">{totalBlogs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-500 text-white rounded-full">

              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Requests in Pending</p>
                <p className="text-2xl font-semibold">{totalRequests}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requested Blogs Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Requested Blogs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-base">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No</th>
                  <th className="py-2 px-4 border-b">Post Title</th>
                  <th className="py-2 px-4 border-b">Date & Time</th>
                  <th className="py-2 px-4 border-b">Author</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                  <th className="py-2 px-4 border-b">Preview</th>
                  <th className="py-2 px-4 border-b">Approve</th>
                </tr>
              </thead>
              <tbody>
              {requestedBlogs.map((blog, index) => (
                <tr key={blog.id} className="text-center">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-left">{blog.title}</td>
                  <td className="py-2 px-4 border-b">{blog.datetime}</td>
                  <td className="py-2 px-4 border-b">{blog.author}</td>
                  <td className="py-2 px-4 border-b">{blog.category}</td>
                  <td className="py-2 px-4 border-b">
                    {/* Flex container for Edit and Delete buttons */}
                    <div className="flex justify-center space-x-2">
                      <button className="bg-green-500 text-white text-xs px-2 py-0.5 rounded hover:bg-green-600">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white text-xs px-2 py-0.5 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>

                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Preview
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
              {requestedBlogs.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-4">
                    No requested blogs available.
                  </td>
                </tr>
              )}
            </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );

};

export default AdminDashboard;

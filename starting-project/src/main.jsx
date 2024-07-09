import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import Posts, {loader as postsLoader} from './routes/Posts'
import PostDetails, {loader as postDetailLoader} from './routes/PostDetail'

const router = createBrowserRouter([
  {path: '/', 
  element: <RootLayout />, 
  children: [
    {path: '/', element: <Posts />,
    loader: postsLoader,
    children: 
    [
      {path: '/add-post', element: <NewPost />, action: newPostAction },
      {path: '/:id', element: <PostDetails /> ,loader: postDetailLoader}
    ]
  }  
]},
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

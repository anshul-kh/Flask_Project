import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Home, Features, About, Auth} from './pages'

//Routing
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/feature',
    element:<Features/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/auth',
    element:<Auth/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

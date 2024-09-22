import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import UserScreenPage from './pages/UserScreenPage.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'check',
      element: <UserScreenPage />,
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)

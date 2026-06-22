import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PropertyList from './pages/PropertyList.jsx';
import Dashboard from './pages/Dashboard.jsx'
import AddProperty from './pages/AddProperty.jsx';
import PropertyDetail from './pages/PropertyDetail.jsx';
import SideBar from './admin/SideBar.jsx';
import DashboardView from './admin/DashboardView.jsx';
import AdminLayout from "./admin/AdminLayout";
import PropertiesView from './admin/PropertiesView.jsx'
import UsersView from './admin/UsersView.jsx';
import AdminLogin from './pages/AdminLogin.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children:[
      {
        path: '/', element: <Home/>
      },
      {
        path:'/register', element: <Register/>
      },
      {
        path:'/login', element: <Login/>
      },
      {
        path:'/about', element: <About/>
      },
      {
        path:'/contact', element: <Contact/>
      },
      {
        path: '/property', element: <PropertyList/>
      },
      {
        path: '/dashboard', element: <Dashboard/>
      },
      {
        path: '/addProperty', element: <AddProperty/>
      },
      {
        path: '/propertyDetail/:id', element: <PropertyDetail/>
      },
      {
        path: '/SideBar', element: <SideBar/>
      },
      {
        path: '/adminLogin', element: <AdminLogin/>
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <DashboardView />
          },
          {
            path: "property",
            element: <PropertiesView />
          },
          {
            path: "user",
            element: <UsersView />
          },
          
        ]
      }
          ]
        }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)

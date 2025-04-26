import React from 'react'
import "./App.css"
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ViewAllPage from './pages/ViewAllPage';
import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/view_all' element={<ViewAllPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <div> 
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

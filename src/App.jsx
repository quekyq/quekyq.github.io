import './App.css'
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Art from './pages/art';
import Project from './pages/project';
import ProjectDetail from './pages/ProjectDetail';
import MainLayout from './components/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>    
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/art" element={<Art/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/project/:id" element={<ProjectDetail/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App

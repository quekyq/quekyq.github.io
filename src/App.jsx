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
import AnimationDetail from './pages/AnimationDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>    
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="art" element={<Art/>}>
        <Route path="illustration" element={<Art/>} />
        <Route path="animation" element={<Art/>} />
      </Route>
      <Route path="art/animation/:slug" element={<AnimationDetail/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/project/:id" element={<ProjectDetail/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App

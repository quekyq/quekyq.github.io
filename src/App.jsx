import './App.css'
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  useLocation
} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Art from './pages/art';
import Projects from './pages/Projects';
import MainLayout from './components/MainLayout';
import AnimationDetail from './pages/AnimationDetail';

// Import individual project pages
import MinecraftProject from './pages/project/minecraft';
import ChartifyProject from './pages/project/chartify';
import MayaProject from './pages/project/maya';
import ShadersProject from './pages/project/shaders';
import StudyWithMeProject from './pages/project/studywithme';
import PostShadersProject from './pages/project/postshader';
import PortfolioProject from './pages/project/portfolio';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrap MainLayout with ScrollToTop
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <MainLayout />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>    
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="resume" element={<Resume/>} />
      <Route path="art" element={<Art/>}>
        <Route path="illustration" element={<Art/>} />
        <Route path="animation" element={<Art/>} />
      </Route>
      <Route path="art/animation/:slug" element={<AnimationDetail/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="projects/minecraft" element={<MinecraftProject/>} />
      <Route path="projects/chartify" element={<ChartifyProject/>} />
      <Route path="projects/maya" element={<MayaProject/>} />
      <Route path="projects/shaders" element={<ShadersProject/>} />
      <Route path="projects/studywithme" element={<StudyWithMeProject/>} />
      <Route path="projects/surface-post-shaders" element={<PostShadersProject/>} />
      <Route path="projects/personalsite" element={<PortfolioProject/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App

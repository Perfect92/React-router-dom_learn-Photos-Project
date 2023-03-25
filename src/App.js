import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import PostInfo from './components/PostInfo';
import MainPage from './pages/mainPage/MainPage';
import PostsPage from './pages/PostsPage/PostsPage'
import Layout from './components/hoc/Layout';
import LayoutGoToBack from './components/hoc/LayoutGoToBack';


function App() {

  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Layout/>}>

      <Route index element={<MainPage/>}/>
      <Route path='posts' element={<PostsPage/>}/>
      </Route>
      <Route path='/' element={<LayoutGoToBack/>}>
      <Route path='posts/:id' element={<PostInfo/>}/>
  
      </Route>

      <Route path='*' element={<h1 className='found'>404 not found</h1>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

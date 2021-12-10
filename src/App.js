import './sass/index.scss'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Addnew from './pages/Addnew';
import Edit from './pages/Edit';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<Addnew/>}/>
          <Route path='/edit/*' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Search } from './Components/Search/Search';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/detail' element={<Search />} />
        <Route path='/' element={<Search />} />
      </Routes>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Count from './Count';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Count/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

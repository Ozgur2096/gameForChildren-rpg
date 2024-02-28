import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterCreation from './CharacterCreation';
import Dice from './Dice';

function App() {
  return (
    <Router className='App'>
      <Routes>
        <Route path='/' element={<CharacterCreation />} />
        <Route path='/dice' element={<Dice />} />
      </Routes>
    </Router>
  );
}

export default App;

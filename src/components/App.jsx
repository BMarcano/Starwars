import Character from '../containers/Characters/Character';
import Details from '../containers/Characters/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Character />} />
        <Route path='/Details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

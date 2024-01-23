import './App.css'
import Home from './components/Home/Home'
import GameSelect from './components/Game/GameSelect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stage1 from './components/Game/Stage1/Stage1';
import Stage2 from './components/Game/Stage2/Stage2';
import Stage3 from './components/Game/Stage3/Stage3';
import Stage4 from './components/Game/Stage4/Stage4';
import Stage5 from './components/Game/Stage5/Stage5';

function App() {




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path='/game-select' Component={GameSelect} />
        <Route path='/stage1' Component={Stage1} />
        <Route path='/stage2' Component={Stage2} />
        <Route path='/stage3' Component={Stage3} />
        <Route path='/stage4' Component={Stage4} />
        <Route path='/stage5' Component={Stage5} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

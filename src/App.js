import './App.css';
import {Routes, Route} from 'react-router-dom'
import Exchanges from './components/exchanges/Exchanges';
import Coins from './components/coins/Coins';
import CoinDetails from './components/coindetail/CoinDetails';
function App() {
  return (
    <div>
      <Routes>
     <Route path='/' element={<Exchanges/>}/>
     <Route path='/coins' element={<Coins/>}/>
     <Route path='/coins/:id' element={<CoinDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;

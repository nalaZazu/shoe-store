import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Head from './components/Navbar/Navbar';
import Launch from './components/Launch/Launch';
import LaunchShoes from './components/LaunchShoe/LaunchShoes';
import LaunchIndex from './components/LaunchIndex/LaunchIndex';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="launch" element={<Launch />}>
            <Route path="/launch" element={<LaunchIndex />} />
            <Route path=':id' element={<LaunchShoes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

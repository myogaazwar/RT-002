import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

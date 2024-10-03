import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import NotFound from './pages/NotFound';
import { Navbar } from './components/navbar/Navbar';
import KegiatanPage from './pages/Kegiatan';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/kegiatan'
            element={
              <MainLayout>
                <KegiatanPage />
              </MainLayout>
            }
          ></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

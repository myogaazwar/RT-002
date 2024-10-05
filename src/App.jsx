import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import NotFound from './pages/NotFound';
import { Navbar } from './components/navbar/Navbar';
import KegiatanPage from './pages/Kegiatan';
import StrukturRtPage from './pages/StrukturRt';
import Footer from './components/footer/Footer';
import PrestasiPage from './pages/Prestasi';

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
          />
          <Route
            path='/kegiatan'
            element={
              <MainLayout>
                <KegiatanPage />
                <Footer />
              </MainLayout>
            }
          />
          <Route
            path='/struktur-rt'
            element={
              <MainLayout>
                <StrukturRtPage />
                <Footer />
              </MainLayout>
            }
          />

          <Route
            path='/prestasi'
            element={
              <MainLayout>
                <PrestasiPage />
                <Footer />
              </MainLayout>
            }
          />

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

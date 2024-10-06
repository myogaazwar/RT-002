import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { HomePage } from './pages/Home';
import NotFound from './pages/NotFound';
import { Navbar } from './components/navbar/Navbar';
import KegiatanPage from './pages/Kegiatan';
import StrukturRtPage from './pages/StrukturRt';
import Footer from './components/footer/Footer';
import PrestasiPage from './pages/Prestasi';
import { createContext, useContext, useEffect, useState } from 'react';
import GaleriPage from './pages/Galeri';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={` ${theme ? 'dark' : 'light'}`}>
      <Navbar />
      <main className='dark:bg-dark-mode'>{children}</main>
    </div>
  );
};

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <Router>
        <ScrollToTop />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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

            <Route
              path='/galeri'
              element={
                <MainLayout>
                  <GaleriPage />
                  <Footer />
                </MainLayout>
              }
            />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;

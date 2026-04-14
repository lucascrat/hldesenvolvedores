import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Privacy from './pages/Privacy';
import Artigos from './pages/Artigos';
import ArtigoDetalhe from './pages/ArtigoDetalhe';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/artigos" element={<Artigos />} />
                        <Route path="/artigo/:slug" element={<ArtigoDetalhe />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Routes>
                </main>
                <Footer />
                <CookieBanner />
            </div>
        </Router>
    );
}

export default App;

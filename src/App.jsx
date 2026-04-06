import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChegoJaPolicy from './pages/ChegoJaPolicy';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import StartflixPolicy from './pages/StartflixPolicy';
import Blog from './pages/Blog';
import Cripto from './pages/Cripto';
import AppsEmAlta from './pages/AppsEmAlta';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/policy" element={<ChegoJaPolicy />} />
                        <Route path="/startflix-policy" element={<StartflixPolicy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/cripto" element={<Cripto />} />
                        <Route path="/apps" element={<AppsEmAlta />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

import { Link } from 'react-router-dom';
import { Menu, X, Code2, Bitcoin, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '80px'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.25rem' }}>
                    <Code2 size={32} color="var(--accent)" />
                    <span>HL DESENVOLVEDOR</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/">Início</Link>
                    <a href="/#portfolio">Portfólio</a>
                    <Link to="/blog">Blog</Link>
                    <Link to="/cripto" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Bitcoin size={15} color="#f7931a" /> Cripto
                    </Link>
                    <Link to="/apps" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Smartphone size={15} color="var(--accent)" /> Apps
                    </Link>
                    <a href="/#contact">Contato</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
                }}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Início</Link>
                    <a href="/#portfolio" onClick={() => setIsOpen(false)}>Portfólio</a>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/cripto" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Bitcoin size={16} color="#f7931a" /> Cripto
                    </Link>
                    <Link to="/apps" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Smartphone size={16} color="var(--accent)" /> Apps em Alta
                    </Link>
                    <a href="/#contact" onClick={() => setIsOpen(false)}>Contato</a>
                </div>
            )}

            <style>{`
        .mobile-toggle { display: none; }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
        </nav>
    );
}

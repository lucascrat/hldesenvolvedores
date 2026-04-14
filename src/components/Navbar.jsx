import { Link } from 'react-router-dom';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.15rem', flexShrink: 0 }}>
                    <TrendingUp size={28} color="var(--accent)" />
                    <span>FINANÇAS</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu">
                    <Link to="/">Início</Link>
                    <Link to="/artigos">Artigos</Link>
                    <Link to="/sobre">Sobre</Link>

                    {/* Dropdown Links */}
                    <div
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setDropOpen(true)}
                        onMouseLeave={() => setDropOpen(false)}
                    >
                        <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1rem', fontFamily: 'inherit' }}>
                            Legais <ChevronDown size={14} />
                        </button>
                        {dropOpen && (
                            <div style={{
                                position: 'absolute', top: '100%', right: 0,
                                background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                                borderRadius: '10px', padding: '0.5rem', minWidth: '200px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
                            }}>
                                {[
                                    { to: '/privacy', label: '🔒 Política de Privacidade' },
                                    { to: '/contato', label: '✉️ Contato' },
                                ].map(item => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setDropOpen(false)}
                                        style={{ display: 'block', padding: '0.6rem 1rem', borderRadius: '6px', fontSize: '0.9rem', transition: 'background 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.1)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/contato" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                        Contato
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} className="mobile-toggle">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute', top: '72px', left: 0, right: 0,
                    background: 'rgba(17,17,17,0.98)', backdropFilter: 'blur(12px)',
                    padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)',
                    display: 'flex', flexDirection: 'column', gap: '1rem'
                }}>
                    {[
                        { to: '/', label: '🏠 Início' },
                        { to: '/artigos', label: '📚 Artigos' },
                        { to: '/sobre', label: '👤 Sobre' },
                        { to: '/contato', label: '✉️ Contato' },
                        { to: '/privacy', label: '🔒 Privacidade' },
                    ].map(item => (
                        <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)} style={{ fontSize: '1rem', padding: '0.25rem 0' }}>
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/contato" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                        Contato
                    </Link>
                </div>
            )}

            <style>{`
                .mobile-toggle { display: none; }
                @media (max-width: 900px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block; }
                }
            `}</style>
        </nav>
    );
}

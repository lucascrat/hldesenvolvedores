import { useState, useEffect } from 'react';
import { Cookie, X, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const [visivel, setVisivel] = useState(false);
    const [detalhes, setDetalhes] = useState(false);

    useEffect(() => {
        const consentimento = localStorage.getItem('hl_cookie_consent');
        if (!consentimento) {
            const timer = setTimeout(() => setVisivel(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const aceitar = () => {
        localStorage.setItem('hl_cookie_consent', 'accepted');
        localStorage.setItem('hl_cookie_date', new Date().toISOString());
        setVisivel(false);
        // Ativa adsbygoogle após consentimento
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
    };

    const recusar = () => {
        localStorage.setItem('hl_cookie_consent', 'rejected');
        localStorage.setItem('hl_cookie_date', new Date().toISOString());
        setVisivel(false);
    };

    if (!visivel) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            padding: '0 1rem 1rem',
            pointerEvents: 'none'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                background: 'rgba(17,17,17,0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 -4px 40px rgba(0,0,0,0.5)',
                pointerEvents: 'all',
                animation: 'slideUp 0.4s ease'
            }}>
                <style>{`
                    @keyframes slideUp {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                `}</style>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Cookie size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: 0 }}>
                                Usamos Cookies 🍪
                            </h3>
                            <button onClick={recusar} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0' }}>
                                <X size={18} />
                            </button>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                            Utilizamos cookies e tecnologias similares para melhorar sua experiência, personalizar conteúdo e exibir anúncios relevantes via <strong style={{ color: 'var(--text-primary)' }}>Google AdSense</strong>.
                            Ao continuar navegando, você concorda com nossa{' '}
                            <Link to="/privacy" style={{ color: 'var(--accent)' }} onClick={aceitar}>
                                Política de Privacidade
                            </Link>.
                        </p>

                        {detalhes && (
                            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                                    {[
                                        { icon: '✅', nome: 'Essenciais', desc: 'Sempre ativos — necessários para o site funcionar' },
                                        { icon: '📊', nome: 'Desempenho', desc: 'Google Analytics — análise anônima de tráfego' },
                                        { icon: '📢', nome: 'Publicidade', desc: 'Google AdSense — anúncios personalizados' },
                                    ].map((c, i) => (
                                        <div key={i}>
                                            <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{c.icon} {c.nome}</div>
                                            <div>{c.desc}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Shield size={13} color="var(--accent)" />
                                    <span>Em conformidade com a <strong style={{ color: 'var(--text-primary)' }}>LGPD (Lei 13.709/2018)</strong></span>
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <button
                                onClick={aceitar}
                                className="btn btn-primary"
                                style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                            >
                                Aceitar Todos
                            </button>
                            <button
                                onClick={recusar}
                                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)', padding: '0.6rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600' }}
                            >
                                Recusar
                            </button>
                            <button
                                onClick={() => setDetalhes(!detalhes)}
                                style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                                <ExternalLink size={13} /> {detalhes ? 'Ocultar detalhes' : 'Mais detalhes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

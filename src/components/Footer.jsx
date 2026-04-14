import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Code2, Bitcoin, Smartphone, Shield } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--bg-secondary)', padding: '4rem 0 2rem', marginTop: 'auto', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Code2 size={24} color="var(--accent)" />
                        <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>HL DESENVOLVEDOR</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Desenvolvimento de apps mobile e sistemas web. Portal de notícias sobre tecnologia, apps e criptomoedas.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a href="https://wa.me/5588993759083" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}><MessageCircle size={20} /></a>
                        <a href="https://www.instagram.com/hldesenvolvedores" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c' }}><Instagram size={20} /></a>
                        <a href="mailto:suporte@hldesenvolvedor.com" style={{ color: 'var(--accent)' }}><Mail size={20} /></a>
                    </div>
                </div>

                {/* Navegação */}
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '700' }}>Navegação</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            { to: '/', label: 'Início' },
                            { to: '/sobre', label: 'Sobre' },
                            { to: '/blog', label: 'Blog & Notícias' },
                            { to: '/contato', label: 'Contato' },
                        ].map(l => (
                            <li key={l.to}><Link to={l.to} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Conteúdo */}
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '700' }}>Conteúdo</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <li><Link to="/cripto" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Bitcoin size={13} color="#f7931a" /> Notícias Cripto</Link></li>
                        <li><Link to="/apps" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Smartphone size={13} color="var(--accent)" /> Apps em Alta</Link></li>
                        {[
                            { to: '/policy', label: 'ChegoJá Policy' },
                            { to: '/startflix-policy', label: 'Startflix Policy' },
                        ].map(l => (
                            <li key={l.to}><Link to={l.to} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '700' }}>Legal & Contato</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            { to: '/privacy', label: '🔒 Política de Privacidade' },
                            { to: '/terms', label: '📄 Termos de Uso' },
                        ].map(l => (
                            <li key={l.to}><Link to={l.to} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{l.label}</Link></li>
                        ))}
                        <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
                            <Mail size={13} /> suporte@hldesenvolvedor.com
                        </li>
                        <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <MessageCircle size={13} /> (88) 99375-9083
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container" style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} HL Desenvolvedor. Todos os direitos reservados. — Crateús, CE, Brasil
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    <Shield size={13} color="var(--accent)" />
                    <span>Site em conformidade com a LGPD</span>
                    <span>•</span>
                    <span>Publisher AdSense: ca-pub-6105194579101073</span>
                </div>
            </div>
        </footer>
    );
}

import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '4rem 0 2rem',
            marginTop: 'auto',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>HL DESENVOLVEDOR</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Criando soluções digitais inovadoras para web e mobile.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>Links Rápidos</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/policy">ChegoJá Privacidade</Link></li>
                        <li><Link to="/terms">Termos de Uso</Link></li>
                        <li><Link to="/privacy">Política de Privacidade (Site)</Link></li>
                        <li><a href="/#contact">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contato</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MessageCircle size={16} /> <a href="https://wa.me/5588993759083" target="_blank" rel="noopener noreferrer">WhatsApp: (88) 99375-9083</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Instagram size={16} /> <a href="https://www.instagram.com/hldesenvolvedores?igsh=eHA0M3ZiMmdkYWF6" target="_blank" rel="noopener noreferrer">@hldesenvolvedores</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={16} /> <a href="mailto:suporte@hldesenvolvedor.com">suporte@hldesenvolvedor.com</a>
                        </li>
                        <li style={{ marginTop: '0.5rem' }}>Crateús, CE</li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{
                textAlign: 'center',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} HL Desenvolvedor. Todos os direitos reservados.
            </div>
        </footer>
    );
}

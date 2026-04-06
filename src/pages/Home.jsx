import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, ArrowRight, Instagram, MessageCircle, Mail } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(10, 10, 10, 0) 50%)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <img
                                src="/images/profile.jpg"
                                alt="HL Desenvolvedor"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '4px solid var(--accent)',
                                    boxShadow: '0 0 20px var(--accent-glow)'
                                }}
                            />
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontWeight: '800',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, #fff, #818cf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Criando o Futuro<br />da Mobilidade
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 2rem'
                        }}>
                            Desenvolvimento de aplicativos móveis e sistemas web de alto desempenho.
                            Especialista em soluções de mobilidade urbana.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="#portfolio" className="btn btn-primary">
                                Ver Projetos <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services/About */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <Smartphone size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mobile First</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Aplicativos nativos e cross-platform otimizados para a melhor experiência do usuário.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <Globe size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sistemas Web</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Dashboards administrativos e PWAs robustos para gestão completa do seu negócio.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <Code size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>High Tech</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Utilizando as tecnologias mais recentes para garantir escalabilidade e segurança.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Highlight - ChegoJa */}
            <section id="portfolio" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title">Projetos em Destaque</h2>

                    <div className="glass-panel" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        padding: '3rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--accent)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '1rem'
                            }}>
                                Sucesso em Crateús e Região
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ChegoJá</h3>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                O aplicativo de mobilidade urbana que revolucionou o transporte local.
                                Segurança, rapidez e preço justo para passageiros e motoristas.
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'grid', gap: '0.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                                    Rastreamento em tempo real
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                                    Pagamentos integrados
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                                    Suporte 24h
                                </li>
                            </ul>
                            <a href="/policy" className="btn" style={{ background: 'white', color: 'black' }}>
                                Ver Política de Privacidade
                            </a>
                        </div>
                        {/* Project Image */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/images/chegoja-logo.jpg"
                                alt="ChegoJá Mobilidade"
                                style={{
                                    maxWidth: '100%',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    border: '1px solid var(--border)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Highlight - Startflix */}
            <section style={{ padding: '0 0 5rem 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="glass-panel" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        padding: '3rem',
                        alignItems: 'center'
                    }}>
                        {/* Project Image */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/images/startflix-logo.jpg"
                                alt="Startflix"
                                style={{
                                    maxWidth: '100%',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    border: '1px solid var(--border)'
                                }}
                            />
                        </div>
                        <div>
                            <div style={{
                                display: 'inline-block',
                                background: 'rgba(234, 179, 8, 0.1)',
                                color: '#eab308',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                marginBottom: '1rem'
                            }}>
                                Entretenimento Completo
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Startflix</h3>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                Um player de vídeo robusto que transforma seu dispositivo em um cinema.
                                Reproduza arquivos locais em diversos formatos com qualidade máxima.
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'grid', gap: '0.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: '#eab308', borderRadius: '50%' }}></div>
                                    Suporte a múltiplos formatos
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: '#eab308', borderRadius: '50%' }}></div>
                                    Reprodução Offline
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: '#eab308', borderRadius: '50%' }}></div>
                                    Interface intuitiva
                                </li>
                            </ul>
                            <a href="/startflix-policy" className="btn" style={{ background: 'white', color: 'black' }}>
                                Ver Política de Privacidade
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" style={{ padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                    <h2 className="section-title">Vamos conversar?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Tem uma ideia de aplicativo ou precisa de um site profissional?
                        Entre em contato e tire seu projeto do papel.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="https://wa.me/5588993759083" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#25D366', color: 'white' }}>
                            <MessageCircle size={20} /> Falar no WhatsApp
                        </a>
                        <a href="https://www.instagram.com/hldesenvolvedores?igsh=eHA0M3ZiMmdkYWF6" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: 'white' }}>
                            <Instagram size={20} /> Seguir no Instagram
                        </a>
                        <a href="mailto:suporte@hldesenvolvedor.com" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'white' }}>
                            <Mail size={20} /> Enviar E-mail
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

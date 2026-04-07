import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Users, Award, MapPin, Mail, MessageCircle, Instagram } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const tecnologias = [
    { nome: "React Native", desc: "Apps iOS e Android com código compartilhado", emoji: "📱" },
    { nome: "React.js", desc: "Interfaces web modernas e performáticas", emoji: "⚛️" },
    { nome: "Node.js", desc: "Backend escalável e APIs REST robustas", emoji: "🟢" },
    { nome: "Flutter", desc: "Apps multiplataforma com UI nativa", emoji: "🐦" },
    { nome: "Firebase", desc: "Banco de dados em tempo real e autenticação", emoji: "🔥" },
    { nome: "Vite + TypeScript", desc: "Desenvolvimento web ultra-rápido", emoji: "⚡" },
];

const numeros = [
    { valor: "2+", label: "Anos de experiência", icon: <Award size={24} color="#6366f1" /> },
    { valor: "5+", label: "Apps publicados", icon: <Smartphone size={24} color="#10b981" /> },
    { valor: "10k+", label: "Usuários ativos", icon: <Users size={24} color="#f59e0b" /> },
    { valor: "100%", label: "Projetos entregues", icon: <Award size={24} color="#ef4444" /> },
];

export default function Sobre() {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '4rem' }}
                >
                    <img
                        src="/images/profile.jpg"
                        alt="HL Desenvolvedor"
                        style={{
                            width: '130px', height: '130px', borderRadius: '50%',
                            objectFit: 'cover', border: '4px solid var(--accent)',
                            boxShadow: '0 0 30px rgba(99,102,241,0.4)', marginBottom: '1.5rem'
                        }}
                    />
                    <h1 className="section-title">Sobre o HL Desenvolvedor</h1>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        <MapPin size={16} /> <span>Crateús, Ceará — Brasil</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                        Desenvolvedor especializado em aplicativos móveis e sistemas web de alto desempenho.
                        Criador do <strong style={{ color: 'var(--text-primary)' }}>ChegoJá</strong> — o app de mobilidade urbana que revolucionou o transporte em Crateús e região — e do <strong style={{ color: 'var(--text-primary)' }}>Startflix</strong>, player de vídeo multiplataforma.
                    </p>
                </motion.div>

                {/* Números */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {numeros.map((n, i) => (
                        <motion.div
                            key={i}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{n.icon}</div>
                            <div style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.25rem' }}>{n.valor}</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{n.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* AdSense */}
                <AdBanner slot="1230984567" format="horizontal" />

                {/* Missão */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '3rem', marginBottom: '3rem', marginTop: '2rem' }}
                >
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Code2 size={28} color="var(--accent)" /> Nossa Missão
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        Acreditamos que a tecnologia deve resolver problemas reais. Nossa missão é desenvolver aplicativos e sistemas web que impactem positivamente a vida das pessoas — seja facilitando o transporte, o entretenimento ou a gestão de negócios.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        Cada projeto é tratado com dedicação total: desde a concepção da ideia até a publicação nas lojas e o suporte pós-lançamento. Não entregamos apenas código — entregamos soluções completas que crescem junto com o seu negócio.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
                        Além do desenvolvimento, mantemos este portal de notícias sobre tecnologia, aplicativos mobile e criptomoedas para manter nossa comunidade sempre atualizada com as tendências do mercado digital.
                    </p>
                </motion.div>

                {/* Tecnologias */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Globe size={28} color="var(--accent)" /> Tecnologias que Dominamos
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                        {tecnologias.map((t, i) => (
                            <motion.div
                                key={i}
                                className="glass-panel"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4 }}
                                style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                            >
                                <span style={{ fontSize: '2rem' }}>{t.emoji}</span>
                                <div>
                                    <div style={{ fontWeight: '700', marginBottom: '0.3rem' }}>{t.nome}</div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{t.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* AdSense */}
                <AdBanner slot="9876543210" format="rectangle" />

                {/* Projetos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '2rem', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>Projetos em Destaque</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div className="glass-panel" style={{ padding: '2rem', borderTop: '3px solid #6366f1' }}>
                            <img src="/images/chegoja-logo.jpg" alt="ChegoJá" style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>ChegoJá</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Aplicativo de mobilidade urbana que conecta passageiros e motoristas em Crateús e região. Com rastreamento em tempo real, pagamentos integrados e suporte 24h, o ChegoJá é referência em transporte inteligente no interior do Ceará.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['React Native', 'Node.js', 'Firebase', 'Maps API'].map(t => (
                                    <span key={t} style={{ background: 'rgba(99,102,241,0.15)', color: '#6366f1', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-panel" style={{ padding: '2rem', borderTop: '3px solid #eab308' }}>
                            <img src="/images/startflix-logo.jpg" alt="Startflix" style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>Startflix</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Player de vídeo robusto e multiplataforma que transforma qualquer dispositivo em um cinema. Suporta múltiplos formatos de vídeo, reprodução offline e possui interface intuitiva que agrada usuários de todos os perfis.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['Flutter', 'Dart', 'VLC SDK', 'SQLite'].map(t => (
                                    <span key={t} style={{ background: 'rgba(234,179,8,0.15)', color: '#eab308', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '600' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Contato */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '3rem', textAlign: 'center', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>Tem um projeto em mente?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                        Entre em contato e vamos transformar sua ideia em realidade. Orçamento sem compromisso.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/5588993759083" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366' }}>
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <a href="/contato" className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                            <Mail size={18} /> Enviar Mensagem
                        </a>
                        <a href="https://www.instagram.com/hldesenvolvedores" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', color: 'white' }}>
                            <Instagram size={18} /> Instagram
                        </a>
                    </div>
                </motion.div>

                <AdBanner slot="5647382910" format="horizontal" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

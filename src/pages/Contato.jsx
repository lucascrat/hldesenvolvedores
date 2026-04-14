import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, MapPin, Clock, Send, Phone } from 'lucide-react';
import { useState } from 'react';
import AdBanner from '../components/AdBanner';

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(form.assunto || 'Contato via site HL Desenvolvedor');
        const body = encodeURIComponent(
            `Nome: ${form.nome}\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`
        );
        window.open(`mailto:suporte@hldesenvolvedor.com?subject=${subject}&body=${body}`, '_blank');
        setEnviado(true);
        setTimeout(() => setEnviado(false), 5000);
    };

    const inputStyle = {
        width: '100%',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '0.85rem 1rem',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box',
    };

    const canais = [
        {
            icon: <MessageCircle size={28} color="#25D366" />,
            titulo: "WhatsApp",
            desc: "Atendimento rápido via WhatsApp. Respondemos em até 2 horas.",
            acao: "Falar agora",
            link: "https://wa.me/5588993759083",
            bg: "rgba(37,211,102,0.1)",
            border: "rgba(37,211,102,0.3)"
        },
        {
            icon: <Mail size={28} color="#6366f1" />,
            titulo: "E-mail",
            desc: "Para propostas, orçamentos e suporte técnico detalhado.",
            acao: "Enviar e-mail",
            link: "mailto:suporte@hldesenvolvedor.com",
            bg: "rgba(99,102,241,0.1)",
            border: "rgba(99,102,241,0.3)"
        },
        {
            icon: <Instagram size={28} color="#e1306c" />,
            titulo: "Instagram",
            desc: "Acompanhe projetos, bastidores e dicas de tecnologia.",
            acao: "Seguir @hldesenvolvedores",
            link: "https://www.instagram.com/hldesenvolvedores",
            bg: "rgba(225,48,108,0.1)",
            border: "rgba(225,48,108,0.3)"
        },
    ];

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3.5rem' }}
                >
                    <h1 className="section-title">Entre em Contato</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Tem uma ideia de app, projeto web ou precisa de suporte? Estamos prontos para ajudar.
                        Resposta garantida em até 24 horas.
                    </p>
                </motion.div>

                {/* Canais de Contato */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
                    {canais.map((c, i) => (
                        <motion.a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                display: 'block',
                                background: c.bg,
                                border: `1px solid ${c.border}`,
                                borderRadius: '12px',
                                padding: '1.75rem',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <div style={{ marginBottom: '1rem' }}>{c.icon}</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{c.titulo}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>{c.desc}</p>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                {c.acao} →
                            </span>
                        </motion.a>
                    ))}
                </div>

                <AdBanner slot="1122334455" format="horizontal" />

                {/* Formulário + Info */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>

                    {/* Formulário */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem' }}
                    >
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Send size={20} color="var(--accent)" /> Enviar Mensagem
                        </h2>

                        {enviado && (
                            <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', color: '#10b981', textAlign: 'center' }}>
                                ✅ Mensagem aberta no seu e-mail! Obrigado pelo contato.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Seu nome *</label>
                                <input
                                    name="nome"
                                    type="text"
                                    required
                                    placeholder="Lucas Souza"
                                    value={form.nome}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Seu e-mail *</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="seu@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Assunto</label>
                                <input
                                    name="assunto"
                                    type="text"
                                    placeholder="Desenvolvimento de aplicativo"
                                    value={form.assunto}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mensagem *</label>
                                <textarea
                                    name="mensagem"
                                    required
                                    rows={5}
                                    placeholder="Descreva seu projeto ou dúvida..."
                                    value={form.mensagem}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px', fontFamily: 'inherit' }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
                            >
                                <Send size={18} /> Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                    {/* Informações */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1.25rem' }}>Informações</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Localização</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Crateús, Ceará — Brasil</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <Mail size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>E-mail</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>suporte@hldesenvolvedor.com</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <Phone size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>WhatsApp</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>(88) 99375-9083</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <Clock size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Horário de Atendimento</div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Segunda a Sábado, 8h às 20h</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>Tipos de Projetos</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {[
                                    '📱 Aplicativos Android e iOS',
                                    '🌐 Sites e Sistemas Web',
                                    '🛒 E-commerce e Lojas Virtuais',
                                    '📊 Dashboards Administrativos',
                                    '🔧 APIs e Integrações',
                                    '🚀 MVPs e Startups'
                                ].map((item, i) => (
                                    <div key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                            <div style={{ fontWeight: '700', marginBottom: '0.3rem' }}>Resposta Rápida</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Respondemos todas as mensagens em até 24 horas úteis</div>
                        </div>
                    </motion.div>
                </div>

                <AdBanner slot="9988776655" format="rectangle" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

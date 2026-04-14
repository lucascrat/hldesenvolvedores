import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Bitcoin, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

const posts = [
    {
        id: 1,
        title: "VibeCoding: O Futuro do Desenvolvimento Flow",
        excerpt: "Descubra como a metodologia VibeCoding está revolucionando a produtividade de desenvolvedores ao unir foco, música e ambiente imersivo.",
        image: "/images/vibecoding-cover.png",
        date: "16 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "VibeCoding",
        color: "#6366f1"
    },
    {
        id: 2,
        title: "Tendências em Apps Móveis para 2026",
        excerpt: "Realidade Aumentada, AI on-device e interfaces neurais. Veja o que esperar do mercado de aplicativos móveis este ano.",
        image: "/images/mobile-dev-trends.png",
        date: "10 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "Mobile",
        color: "#10b981"
    },
    {
        id: 3,
        title: "Mobilidade Urbana Conectada",
        excerpt: "Como aplicativos como o ChegoJá estão criando cidades mais inteligentes e integradas através da tecnologia de dados em tempo real.",
        image: "/images/tech-news-mobility.png",
        date: "05 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "Smart Cities",
        color: "#f59e0b"
    }
];

const destaques = [
    {
        icon: <Bitcoin size={28} color="#f7931a" />,
        titulo: "Notícias Cripto",
        descricao: "Bitcoin, DeFi, altcoins e tudo do mundo cripto em tempo real.",
        link: "/cripto",
        bg: "rgba(247, 147, 26, 0.1)",
        border: "rgba(247, 147, 26, 0.3)",
        badge: "8 notícias hoje"
    },
    {
        icon: <Smartphone size={28} color="#6366f1" />,
        titulo: "Apps em Alta",
        descricao: "Os melhores apps da Play Store e App Store em tendência agora.",
        link: "/apps",
        bg: "rgba(99, 102, 241, 0.1)",
        border: "rgba(99, 102, 241, 0.3)",
        badge: "16 apps"
    },
    {
        icon: <TrendingUp size={28} color="#10b981" />,
        titulo: "Tech & Inovação",
        descricao: "As últimas novidades em inteligência artificial, startups e tecnologia.",
        link: "/blog",
        bg: "rgba(16, 185, 129, 0.1)",
        border: "rgba(16, 185, 129, 0.3)",
        badge: "Sempre atualizado"
    }
];

export default function Blog() {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}
                >
                    <h1 className="section-title">Blog & Notícias</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Desenvolvimento, tecnologia, cripto e os apps mais quentes do momento.
                    </p>
                </motion.div>

                {/* Seções em Destaque */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
                    {destaques.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Link to={d.link} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    background: d.bg,
                                    border: `1px solid ${d.border}`,
                                    borderRadius: '12px',
                                    padding: '1.75rem',
                                    height: '100%'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        {d.icon}
                                        <span style={{ background: 'var(--bg-secondary)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                            {d.badge}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{d.titulo}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{d.descricao}</p>
                                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        Explorar <ArrowRight size={15} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* AdSense Banner */}
                <AdBanner slot="5566778899" format="horizontal" />

                {/* Posts do Blog */}
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', marginTop: '1rem' }}>Artigos Recentes</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                />
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ background: `${post.color}20`, color: post.color, padding: '0.2rem 0.75rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '600' }}>
                                        {post.category}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <button style={{ background: 'none', border: 'none', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontWeight: '600' }}>
                                        Ler mais <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* AdSense Rodapé */}
                <AdBanner slot="6677889900" format="rectangle" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

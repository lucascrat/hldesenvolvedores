import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "VibeCoding: O Futuro do Desenvolvimento Flow",
        excerpt: "Descubra como a metodologia VibeCoding está revolucionando a produtividade de desenvolvedores ao unir foco, música e ambiente imersivo.",
        image: "/images/vibecoding-cover.png",
        date: "16 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "VibeCoding"
    },
    {
        id: 2,
        title: "Tendências em Apps Móveis para 2026",
        excerpt: "Realidade Aumentada, AI on-device e interfaces neurais. Veja o que esperar do mercado de aplicativos móveis este ano.",
        image: "/images/mobile-dev-trends.png",
        date: "10 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "Mobile"
    },
    {
        id: 3,
        title: "Mobilidade Urbana Conectada",
        excerpt: "Como aplicativos como o ChegoJá estão criando cidades mais inteligentes e integradas através da tecnologia de dados em tempo real.",
        image: "/images/tech-news-mobility.png",
        date: "05 Jan, 2026",
        author: "HL Desenvolvedor",
        category: "Smart Cities"
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
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="section-title" style={{ marginTop: '2rem' }}>Blog & Notícias</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Acompanhe as últimas novidades sobre desenvolvimento, tecnologia e o universo VibeCoding.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {posts.map((post) => (
                        <motion.article
                            key={post.id}
                            className="glass-panel"
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
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    color: 'var(--accent)',
                                    fontSize: '0.875rem',
                                    marginBottom: '1rem',
                                    fontWeight: '600'
                                }}>
                                    <span>{post.category}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTop: '1px solid var(--border)',
                                    paddingTop: '1rem',
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <button style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--accent)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}>
                                        Ler mais <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}

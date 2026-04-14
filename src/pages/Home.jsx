import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, Zap, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    const featuredArticles = [
        {
            id: 1,
            title: 'Guia Completo para Iniciantes em Investimentos em Ações',
            excerpt: 'Aprenda os fundamentos para começar sua jornada no mercado de ações com segurança e conhecimento.',
            category: 'Ações',
            date: '15 de abril de 2026',
            slug: 'guia-investimentos-acoes'
        },
        {
            id: 2,
            title: 'Como Diversificar sua Carteira de Investimentos',
            excerpt: 'Estratégias comprovadas para distribuir seus investimentos e reduzir riscos.',
            category: 'Estratégia',
            date: '14 de abril de 2026',
            slug: 'diversificar-carteira'
        },
        {
            id: 3,
            title: 'Análise Técnica vs. Análise Fundamentalista: Qual Escolher?',
            excerpt: 'Entenda as principais diferenças entre essas duas abordagens de análise de investimentos.',
            category: 'Análise',
            date: '12 de abril de 2026',
            slug: 'analise-tecnica-fundamental'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, #fff, #818cf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Desbloqueie seu<br />Potencial Financeiro
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto 2rem',
                            lineHeight: 1.6
                        }}>
                            Aprenda estratégias comprovadas de investimento, análise de mercado e educação financeira
                            para tomar decisões mais inteligentes com seu dinheiro.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/artigos" className="btn btn-primary">
                                Explorar Artigos <ArrowRight size={20} />
                            </Link>
                            <a href="#featured" className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                                Saiba Mais
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '3rem' }}>Por que investir?</h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <TrendingUp size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Crescimento Patrimonial</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Faça seu dinheiro trabalhar para você através de investimentos inteligentes e planejados.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <BarChart3 size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Análise de Dados</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Acesso a análises técnicas e fundamentalistas para tomar decisões baseadas em dados.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <PieChart size={40} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Diversificação</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Aprenda estratégias para diversificar seus investimentos e reduzir riscos.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <Zap size={40} color="#06b6d4" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Educação Contínua</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Mantenha-se atualizado com os últimos trends e estratégias do mercado financeiro.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <BookOpen size={40} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Recursos Gratuitos</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Acesso a guias, artigos e recursos educacionais completamente gratuitos.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="glass-panel" style={{ padding: '2rem' }}>
                            <TrendingUp size={40} color="#ec4899" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>Independência Financeira</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Construa uma base sólida para alcançar seus objetivos financeiros a longo prazo.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Articles */}
            <section id="featured" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <h2 className="section-title">Artigos em Destaque</h2>
                        <Link to="/artigos" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Ver todos <ArrowRight size={18} />
                        </Link>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {featuredArticles.map((article) => (
                            <motion.div key={article.id} variants={item} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    color: 'var(--accent)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    width: 'fit-content'
                                }}>
                                    {article.category}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700', lineHeight: 1.4 }}>
                                    {article.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>
                                    {article.excerpt}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{article.date}</span>
                                    <Link to={`/artigo/${article.slug}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>
                                        Ler mais →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                    <h2 className="section-title">Comece Sua Jornada Financeira Hoje</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                        Acesso gratuito a conteúdo educacional sobre investimentos, análise de mercado e estratégias financeiras comprovadas.
                    </p>
                    <Link to="/artigos" className="btn btn-primary">
                        Explorar Biblioteca de Artigos
                    </Link>
                </div>
            </section>
        </>
    );
}

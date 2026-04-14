import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

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

export default function Artigos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = ['Todos', ...new Set(articles.map(a => a.category))];

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <>
            {/* Header */}
            <section style={{
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                padding: '3rem 0'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #818cf8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Biblioteca de Artigos
                    </h1>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Aprenda sobre investimentos, finanças pessoais e estratégias de construção de riqueza
                    </p>
                </div>
            </section>

            {/* Search and Filter */}
            <section style={{ padding: '3rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {/* Search Bar */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        padding: '0.75rem 1rem',
                        marginBottom: '2rem'
                    }}>
                        <Search size={20} color="var(--text-secondary)" />
                        <input
                            type="text"
                            placeholder="Buscar artigos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                color: 'white',
                                marginLeft: '0.5rem',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    {/* Category Filter */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '100px',
                                    border: selectedCategory === category ? 'none' : '1px solid var(--border)',
                                    background: selectedCategory === category ? 'var(--accent)' : 'var(--bg-secondary)',
                                    color: selectedCategory === category ? 'white' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s',
                                    fontSize: '0.875rem'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '0.875rem' }}>
                        {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo' : 'artigos'} encontrado(s)
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section style={{ padding: '3rem 0', minHeight: '60vh' }}>
                <div className="container">
                    {filteredArticles.length > 0 ? (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: '2rem'
                            }}
                        >
                            {filteredArticles.map((article) => (
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
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        marginBottom: '1rem',
                                        fontWeight: '700',
                                        lineHeight: 1.4,
                                        color: 'white'
                                    }}>
                                        {article.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1.5rem',
                                        lineHeight: 1.6,
                                        flex: 1
                                    }}>
                                        {article.excerpt}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 'auto',
                                        borderTop: '1px solid var(--border)',
                                        paddingTop: '1rem'
                                    }}>
                                        <div>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                                {new Date(article.date).toLocaleDateString('pt-BR', {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/artigo/${article.slug}`}
                                            style={{
                                                color: 'var(--accent)',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            Ler mais →
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                                Nenhum artigo encontrado com essa busca.
                            </p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
                                style={{
                                    marginTop: '1rem',
                                    padding: '0.75rem 1.5rem',
                                    background: 'var(--accent)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Limpar Filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

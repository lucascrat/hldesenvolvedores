import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { articles } from '../data/articles';
import AdSense from '../components/AdSense';

export default function ArtigoDetalhe() {
    const { slug } = useParams();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Artigo não encontrado</h1>
                    <Link to="/artigos" className="btn btn-primary">
                        <ArrowLeft size={20} /> Voltar aos Artigos
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Header */}
            <section style={{
                background: 'var(--bg-secondary)',
                padding: '3rem 0'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Link to="/artigos" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontWeight: '600'
                    }}>
                        <ArrowLeft size={18} /> Voltar
                    </Link>
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
                        {article.category}
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem'
                    }}>
                        {article.title}
                    </h1>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={18} />
                            {new Date(article.date).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <User size={18} />
                            {article.author}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)'
                        }}
                    >
                        {article.content.split('\n\n').map((paragraph, idx) => {
                            if (paragraph.startsWith('##')) {
                                return (
                                    <h2 key={idx} style={{
                                        fontSize: '1.75rem',
                                        fontWeight: '700',
                                        color: 'white',
                                        marginTop: '2rem',
                                        marginBottom: '1rem',
                                        borderBottom: '2px solid var(--accent)',
                                        paddingBottom: '0.5rem'
                                    }}>
                                        {paragraph.replace('##', '').trim()}
                                    </h2>
                                );
                            } else if (paragraph.startsWith('###')) {
                                return (
                                    <h3 key={idx} style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '600',
                                        color: 'white',
                                        marginTop: '1.5rem',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {paragraph.replace('###', '').trim()}
                                    </h3>
                                );
                            } else if (paragraph.startsWith('|')) {
                                return (
                                    <div key={idx} style={{
                                        overflowX: 'auto',
                                        marginY: '1.5rem'
                                    }}>
                                        <table style={{
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            marginTop: '1rem'
                                        }}>
                                            <tbody>
                                                {paragraph.split('\n').filter(line => line.trim()).map((line, lineIdx) => (
                                                    <tr key={lineIdx} style={{
                                                        borderBottom: '1px solid var(--border)'
                                                    }}>
                                                        {line.split('|').filter(cell => cell.trim()).map((cell, cellIdx) => (
                                                            <td key={cellIdx} style={{
                                                                padding: '0.75rem',
                                                                textAlign: 'left',
                                                                borderRight: cellIdx < line.split('|').length - 2 ? '1px solid var(--border)' : 'none'
                                                            }}>
                                                                {cell.trim()}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            } else if (paragraph.startsWith('✓') || paragraph.startsWith('✗')) {
                                const isPositive = paragraph.startsWith('✓');
                                return (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        gap: '0.75rem',
                                        alignItems: 'flex-start',
                                        margin: '0.5rem 0',
                                        color: isPositive ? '#10b981' : '#ef4444'
                                    }}>
                                        <span style={{ fontSize: '1.25rem', marginTop: '0.1rem' }}>
                                            {isPositive ? '✓' : '✗'}
                                        </span>
                                        <span>{paragraph.substring(1).trim()}</span>
                                    </div>
                                );
                            } else if (paragraph.startsWith('-')) {
                                return (
                                    <ul key={idx} style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                                        {paragraph.split('\n').map((item, itemIdx) => (
                                            item.trim() && (
                                                <li key={itemIdx} style={{ marginBottom: '0.5rem', textAlign: 'justify' }}>
                                                    {item.replace('-', '').trim()}
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                );
                            }
                            return (
                                <p key={idx} style={{
                                    marginBottom: '1.5rem',
                                    textAlign: 'justify'
                                }}>
                                    {paragraph}
                                </p>
                            );
                        })}
                    </motion.div>

                    {/* Ad After Content */}
                    <AdSense type="in-article" slot="1234567890" />

                    {/* Author Info */}
                    <div style={{
                        marginTop: '4rem',
                        padding: '2rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--accent)'
                    }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Escrito por</p>
                        <p style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white' }}>
                            {article.author}
                        </p>
                    </div>

                    {/* Related Articles */}
                    <div style={{ marginTop: '4rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>
                            Artigos Relacionados
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {articles
                                .filter(a => a.category === article.category && a.id !== article.id)
                                .slice(0, 3)
                                .map(relatedArticle => (
                                    <Link
                                        key={relatedArticle.id}
                                        to={`/artigo/${relatedArticle.slug}`}
                                        style={{
                                            textDecoration: 'none',
                                            display: 'block'
                                        }}
                                    >
                                        <div className="glass-panel" style={{ padding: '1.5rem', height: '100%' }}>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--accent)',
                                                fontWeight: '600',
                                                marginBottom: '0.5rem'
                                            }}>
                                                {relatedArticle.category}
                                            </p>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                color: 'white',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.3
                                            }}>
                                                {relatedArticle.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)',
                                                marginBottom: '1rem'
                                            }}>
                                                {new Date(relatedArticle.date).toLocaleDateString('pt-BR')}
                                            </p>
                                            <span style={{
                                                color: 'var(--accent)',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            }}>
                                                Ler mais →
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>

                    {/* Back Button */}
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link to="/artigos" className="btn btn-primary">
                            <ArrowLeft size={20} /> Voltar à Biblioteca
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

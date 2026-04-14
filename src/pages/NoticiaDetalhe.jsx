import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag, Calendar, ExternalLink, Share2, Smartphone, Apple } from 'lucide-react';
import { noticiasApps } from '../data/noticiasApps';
import AdBanner from '../components/AdBanner';
import { useEffect } from 'react';

function renderMarkdown(text) {
    const lines = text.split('\n');
    const elements = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('## ')) {
            elements.push(
                <h2 key={key++} style={{ fontSize: '1.5rem', fontWeight: '700', margin: '2rem 0 1rem', color: 'var(--text-primary)' }}>
                    {line.replace('## ', '')}
                </h2>
            );
        } else if (line.startsWith('### ')) {
            elements.push(
                <h3 key={key++} style={{ fontSize: '1.2rem', fontWeight: '600', margin: '1.5rem 0 0.75rem', color: 'var(--accent)' }}>
                    {line.replace('### ', '')}
                </h3>
            );
        } else if (line.startsWith('> ')) {
            elements.push(
                <blockquote key={key++} style={{
                    borderLeft: '4px solid var(--accent)',
                    paddingLeft: '1.25rem',
                    margin: '1.5rem 0',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    fontSize: '1.05rem'
                }}>
                    {line.replace('> ', '')}
                </blockquote>
            );
        } else if (line.startsWith('- ')) {
            elements.push(
                <li key={key++} style={{
                    color: 'var(--text-secondary)',
                    padding: '0.3rem 0',
                    paddingLeft: '0.5rem',
                    lineHeight: '1.7',
                    listStyle: 'none',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-start'
                }}>
                    <span style={{ color: 'var(--accent)', marginTop: '0.4rem', flexShrink: 0 }}>▸</span>
                    <span dangerouslySetInnerHTML={{ __html: parseBold(line.replace('- ', '')) }} />
                </li>
            );
        } else if (line.startsWith('| ')) {
            // Detect table block
            const tableLines = [];
            let j = i;
            while (j < lines.length && lines[j].startsWith('| ')) {
                tableLines.push(lines[j]);
                j++;
            }
            i = j - 1;

            const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim());
            const rows = tableLines.slice(2).map(row =>
                row.split('|').filter(c => c.trim()).map(c => c.trim())
            );

            elements.push(
                <div key={key++} style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr>
                                {headers.map((h, hi) => (
                                    <th key={hi} style={{ padding: '0.75rem 1rem', background: 'var(--bg-secondary)', borderBottom: '2px solid var(--accent)', textAlign: 'left', fontWeight: '600' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, ri) => (
                                <tr key={ri} style={{ borderBottom: '1px solid var(--border)' }}>
                                    {row.map((cell, ci) => (
                                        <td key={ci} style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (line.trim() === '') {
            elements.push(<div key={key++} style={{ height: '0.75rem' }} />);
        } else {
            elements.push(
                <p key={key++} style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: '0.5rem 0' }}
                    dangerouslySetInnerHTML={{ __html: parseBold(line) }}
                />
            );
        }
    }

    return elements;
}

function parseBold(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 600;">$1</strong>');
}

export default function NoticiaDetalhe() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const noticia = noticiasApps.find(n => n.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!noticia) {
        return (
            <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Notícia não encontrada</p>
                    <Link to="/apps" className="btn btn-primary">← Voltar para Apps em Alta</Link>
                </div>
            </div>
        );
    }

    const outras = noticiasApps.filter(n => n.slug !== slug).slice(0, 3);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: noticia.titulo,
                text: noticia.resumo,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '860px' }}>

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '2rem', marginBottom: '2rem' }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600', padding: 0 }}
                    >
                        <ArrowLeft size={18} /> Voltar
                    </button>
                    <span style={{ color: 'var(--border)' }}>/</span>
                    <Link to="/apps" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Apps em Alta</Link>
                    <span style={{ color: 'var(--border)' }}>/</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{noticia.titulo}</span>
                </motion.div>

                {/* Header do Artigo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Cover colorido com emoji */}
                    <div style={{
                        background: `linear-gradient(135deg, ${noticia.color}30, ${noticia.color}10)`,
                        border: `1px solid ${noticia.color}40`,
                        borderRadius: '16px',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ fontSize: '5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.1))' }}>
                            {noticia.emoji}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <span style={{
                                background: `${noticia.color}25`,
                                color: noticia.color,
                                padding: '0.3rem 1rem',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                fontWeight: '600'
                            }}>
                                {noticia.categoria}
                            </span>
                            <span style={{
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-secondary)',
                                padding: '0.3rem 1rem',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem'
                            }}>
                                {noticia.plataforma?.includes('iOS') && !noticia.plataforma?.includes('Android')
                                    ? <><Apple size={13} /> iOS</>
                                    : noticia.plataforma?.includes('Android') && !noticia.plataforma?.includes('iOS')
                                        ? <><Smartphone size={13} /> Android</>
                                        : <><Smartphone size={13} /> Android & iOS</>
                                }
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <Calendar size={15} /> {noticia.date}
                        </div>
                        <button
                            onClick={handleShare}
                            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
                        >
                            <Share2 size={15} /> Compartilhar
                        </button>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                        fontWeight: '800',
                        lineHeight: '1.3',
                        marginBottom: '1.25rem',
                        background: 'linear-gradient(to right, #fff, #a1a1aa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {noticia.titulo}
                    </h1>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        marginBottom: '2rem',
                        borderLeft: `4px solid ${noticia.color}`,
                        paddingLeft: '1.25rem'
                    }}>
                        {noticia.resumo}
                    </p>
                </motion.div>

                {/* AdSense Topo do Artigo */}
                <AdBanner slot="7788990011" format="horizontal" />

                {/* Conteúdo do Artigo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel"
                    style={{ padding: '2.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}
                >
                    {renderMarkdown(noticia.conteudo)}
                </motion.div>

                {/* AdSense Meio do Artigo */}
                <AdBanner slot="8899001122" format="rectangle" />

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '2rem 0' }}>
                    <Tag size={16} color="var(--text-secondary)" style={{ marginTop: '4px' }} />
                    {noticia.tags?.map(tag => (
                        <span key={tag} style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '100px',
                            fontSize: '0.8rem'
                        }}>
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Link Externo */}
                {noticia.link && (
                    <a
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ marginBottom: '3rem', display: 'inline-flex' }}
                    >
                        <ExternalLink size={18} /> Visitar site oficial
                    </a>
                )}

                {/* Outras Notícias */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem' }}>Outras Notícias</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {outras.map(n => (
                            <Link key={n.id} to={`/noticias/${n.slug}`} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    className="glass-panel"
                                    whileHover={{ y: -4 }}
                                    style={{ padding: '1.25rem', cursor: 'pointer' }}
                                >
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{n.emoji}</div>
                                    <span style={{ fontSize: '0.75rem', color: n.color, fontWeight: '600' }}>{n.categoria}</span>
                                    <h3 style={{ fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.4', margin: '0.5rem 0' }}>{n.titulo}</h3>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{n.date}</span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* AdSense Rodapé */}
                <AdBanner slot="9900112233" format="horizontal" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

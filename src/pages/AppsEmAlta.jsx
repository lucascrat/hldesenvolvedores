import { motion } from 'framer-motion';
import { TrendingUp, Star, Download, Apple, Smartphone, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { noticiasApps } from '../data/noticiasApps';
import AdBanner from '../components/AdBanner';

const androidSlugs = [
    "chatgpt-modo-voz-pro-android",
    "tiktok-ia-gerativa-videos-automaticos",
    "duolingo-100-milhoes-usuarios-ativos",
    "capcut-editor-ia-generativa-2026",
    "perplexity-ai-desafia-google-busca-mobile",
    "spotify-ia-daylist-playlist-personalizada",
    "google-maps-ia-rotas-inteligentes",
    "uber-ia-destinos-previsao"
];

const iosSlugs = [
    "netflix-playground-jogos-gratis-iphone",
    "arc-search-navegador-ia-iphone",
    "bitchat-jack-dorsey-mensagens-descentralizadas",
    "perplexity-ai-desafia-google-busca-mobile",
    "luma-ai-videos-cinematograficos-celular",
    "procreate-dreams-animacao-ipad",
    "widgetsmith-personalizacao-iphone-2026",
    "headspace-meditacao-ia-personalizada"
];

const appsAndroid = androidSlugs.map(slug => noticiasApps.find(n => n.slug === slug)).filter(Boolean);
const appsIOS = iosSlugs.map(slug => noticiasApps.find(n => n.slug === slug)).filter(Boolean);

function AppCard({ app, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -5 }}
        >
            <Link to={`/noticias/${app.slug}`} style={{ textDecoration: 'none' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '2.5rem' }}>{app.emoji}</div>
                        <span style={{
                            background: `${app.color}20`,
                            color: app.color,
                            padding: '0.2rem 0.6rem',
                            borderRadius: '100px',
                            fontSize: '0.72rem',
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                        }}>
                            {app.categoria}
                        </span>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.4rem', lineHeight: '1.3' }}>
                            {app.titulo.split(':')[0].replace(/^[^\w]*/, '')}
                        </h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', flex: 1 }}>{app.resumo}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            <Calendar size={12} /> {app.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: 'var(--accent)', fontWeight: '600' }}>
                            Ler mais <ArrowRight size={13} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function AppsEmAlta() {
    const todas = noticiasApps.slice(0, 30);

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <TrendingUp size={40} color="var(--accent)" />
                        <h1 className="section-title" style={{ marginBottom: 0 }}>Apps em Alta</h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Os apps mais baixados e em tendência na Play Store e App Store. Clique em cada card para ler a notícia completa.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', alignItems: 'center' }}>
                        <Calendar size={14} /> Atualizado em Abril de 2026 · <strong style={{ color: 'var(--accent)' }}>30 notícias</strong>
                    </div>
                </motion.div>

                {/* AdSense Topo */}
                <AdBanner slot="2233445566" format="horizontal" />

                {/* Play Store */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '0.5rem 1.25rem', background: 'linear-gradient(135deg, #0f9d58, #34a853)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Smartphone size={18} color="white" />
                            <span style={{ color: 'white', fontWeight: '700' }}>Play Store</span>
                        </div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Top Apps Android</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {appsAndroid.map((app, index) => (
                            <AppCard key={app.id} app={app} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* AdSense Meio */}
                <AdBanner slot="3344556677" format="rectangle" />

                {/* App Store */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '0.5rem 1.25rem', background: 'linear-gradient(135deg, #0071e3, #00c7ff)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Apple size={18} color="white" />
                            <span style={{ color: 'white', fontWeight: '700' }}>App Store</span>
                        </div>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Top Apps iPhone & iPad</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {appsIOS.map((app, index) => (
                            <AppCard key={app.id} app={app} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Todas as Notícias */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <TrendingUp size={24} color="var(--accent)" />
                        Todas as Notícias de Apps
                        <span style={{ background: 'var(--accent)', color: 'white', padding: '0.1rem 0.6rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '700' }}>30</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                        {todas.map((noticia, index) => (
                            <div key={noticia.id}>
                                <Link to={`/noticias/${noticia.slug}`} style={{ textDecoration: 'none' }}>
                                    <motion.div
                                        className="glass-panel"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        whileHover={{ y: -4 }}
                                        style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', cursor: 'pointer' }}
                                    >
                                        <span style={{ fontSize: '2rem', flexShrink: 0 }}>{noticia.emoji}</span>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', gap: '0.5rem' }}>
                                                <span style={{ fontSize: '0.75rem', color: noticia.color, fontWeight: '600' }}>{noticia.categoria}</span>
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{noticia.date}</span>
                                            </div>
                                            <h3 style={{ fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.4', marginBottom: '0.4rem' }}>{noticia.titulo}</h3>
                                            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                                {noticia.resumo}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                                {(index + 1) % 6 === 0 && (
                                    <AdBanner slot="3344556677" format="horizontal" style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* AdSense Rodapé */}
                <AdBanner slot="4455667788" format="horizontal" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

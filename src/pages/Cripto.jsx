import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Bitcoin, Calendar, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const noticias = [
    {
        id: 1,
        title: "Bitcoin Dispara com Otimismo no Cessar-Fogo EUA-Irã",
        excerpt: "Bitcoin aproveita o clima geopolítico favorável e registra alta expressiva enquanto o petróleo recua com as expectativas de acordo entre EUA e Irã.",
        category: "Bitcoin",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#f7931a"
    },
    {
        id: 2,
        title: "Polymarket Lança Sua Própria Stablecoin e Revampa Order Book",
        excerpt: "A principal plataforma de previsão do mundo anunciou o lançamento de uma stablecoin própria e uma grande reformulação do sistema de ordens.",
        category: "DeFi",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#6366f1"
    },
    {
        id: 3,
        title: "Ações Tokenizadas: Primeira Votação On-Chain para Acionistas da Galaxy",
        excerpt: "Um marco histórico: a Galaxy Digital realiza a primeira votação de acionistas inteiramente on-chain, sinalizando o futuro da governança corporativa descentralizada.",
        category: "Tokenização",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#10b981"
    },
    {
        id: 4,
        title: "Altcoins Mostram Resiliência: Grayscale Aponta 'Pontos de Entrada Atraentes'",
        excerpt: "A gestora Grayscale identifica oportunidades em altcoins resilientes, afirmando que o mercado atual oferece pontos de entrada favoráveis para investidores.",
        category: "Altcoins",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#8b5cf6"
    },
    {
        id: 5,
        title: "Minerador Solo Bate as Probabilidades e Ganha Recompensa de $210 mil",
        excerpt: "Um minerador solo conseguiu validar um bloco inteiro sozinho, faturando uma recompensa de US$ 210.000 — uma façanha rara no mundo do Bitcoin.",
        category: "Mining",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#f59e0b"
    },
    {
        id: 6,
        title: "Analista Bloomberg: 'Bitcoin Pode Cair a $10K Este Ano'",
        excerpt: "Um analista sênior da Bloomberg alerta para um possível 'furacão' nos mercados, com projeção de queda do Bitcoin a $10.000 em 2026 em cenário pessimista.",
        category: "Análise",
        date: "6 Abr, 2026",
        trend: "down",
        fonte: "Decrypt",
        color: "#ef4444"
    },
    {
        id: 7,
        title: "OpenAI Defende Mudança Global em Tributação com Avanço da IA",
        excerpt: "A OpenAI publicou manifesto pedindo reformas nas políticas fiscais e trabalhistas globais, argumentando que a automação por IA exige novos modelos econômicos.",
        category: "IA & Cripto",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#6366f1"
    },
    {
        id: 8,
        title: "JPMorgan: IA Impactará 'Praticamente Todas as Funções' do Banco",
        excerpt: "Jamie Dimon afirma que a inteligência artificial transformará completamente as operações do JPMorgan Chase, com impacto direto em criptoativos e finanças digitais.",
        category: "Finanças",
        date: "6 Abr, 2026",
        trend: "up",
        fonte: "Decrypt",
        color: "#0ea5e9"
    }
];

const precos = [
    { nome: "Bitcoin", sigla: "BTC", preco: "$83.200", variacao: "+2.4%", up: true, color: "#f7931a" },
    { nome: "Ethereum", sigla: "ETH", preco: "$3.150", variacao: "-0.8%", up: false, color: "#627eea" },
    { nome: "Solana", sigla: "SOL", preco: "$178", variacao: "+5.1%", up: true, color: "#9945ff" },
    { nome: "BNB", sigla: "BNB", preco: "$612", variacao: "+1.2%", up: true, color: "#f3ba2f" },
    { nome: "XRP", sigla: "XRP", preco: "$2.34", variacao: "-1.5%", up: false, color: "#00aae4" },
    { nome: "DOGE", sigla: "DOGE", preco: "$0.187", variacao: "+3.7%", up: true, color: "#c2a633" },
];

export default function Cripto() {
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
                        <Bitcoin size={40} color="#f7931a" />
                        <h1 className="section-title" style={{ marginBottom: 0 }}>Notícias Cripto</h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        As últimas notícias do universo das criptomoedas, DeFi, NFTs e blockchain.
                    </p>
                </motion.div>

                {/* Ticker de Preços */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel"
                    style={{ padding: '1.5rem', marginBottom: '2rem', overflowX: 'auto' }}
                >
                    <div style={{ display: 'flex', gap: '1.5rem', minWidth: 'max-content' }}>
                        {precos.map((c) => (
                            <div key={c.sigla} style={{ textAlign: 'center', minWidth: '100px' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{c.sigla}</div>
                                <div style={{ fontWeight: '700', fontSize: '1rem', color: c.color }}>{c.preco}</div>
                                <div style={{ fontSize: '0.8rem', color: c.up ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                                    {c.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />} {c.variacao}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AdSense Banner Topo */}
                <AdBanner slot="1234567890" format="horizontal" />

                {/* Grid de Notícias */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                    {noticias.map((noticia, index) => (
                        <>
                            <motion.article
                                key={noticia.id}
                                className="glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07 }}
                                whileHover={{ y: -5 }}
                                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{
                                        background: `${noticia.color}20`,
                                        color: noticia.color,
                                        padding: '0.2rem 0.75rem',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600'
                                    }}>
                                        {noticia.category}
                                    </span>
                                    {noticia.trend === 'up'
                                        ? <TrendingUp size={18} color="#10b981" />
                                        : <TrendingDown size={18} color="#ef4444" />
                                    }
                                </div>
                                <h3 style={{ fontSize: '1.1rem', lineHeight: '1.5', fontWeight: '700' }}>{noticia.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1, lineHeight: '1.6' }}>{noticia.excerpt}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Calendar size={13} /> {noticia.date}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)' }}>
                                        <ExternalLink size={13} /> {noticia.fonte}
                                    </span>
                                </div>
                            </motion.article>
                            {/* AdSense a cada 4 cards */}
                            {(index + 1) % 4 === 0 && (
                                <div key={`ad-${index}`} style={{ gridColumn: '1 / -1' }}>
                                    <AdBanner slot="0987654321" format="horizontal" />
                                </div>
                            )}
                        </>
                    ))}
                </div>

                {/* AdSense Banner Rodapé */}
                <AdBanner slot="1122334455" format="rectangle" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

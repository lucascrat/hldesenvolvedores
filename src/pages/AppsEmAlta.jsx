import { motion } from 'framer-motion';
import { Smartphone, Star, TrendingUp, Download, Apple, Calendar } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const appsAndroid = [
    {
        id: 1,
        nome: "ChatGPT",
        categoria: "IA & Produtividade",
        descricao: "O assistente de IA mais popular do mundo. Responde perguntas, escreve textos, gera código e muito mais com modelos GPT-4o.",
        rating: "4.8",
        downloads: "500M+",
        destaque: "🔥 Top #1",
        color: "#10a37f",
        emoji: "🤖"
    },
    {
        id: 2,
        nome: "TikTok",
        categoria: "Entretenimento",
        descricao: "A plataforma de vídeos curtos que dominou o entretenimento mobile. Algoritmo poderoso que entrega exatamente o que você quer ver.",
        rating: "4.7",
        downloads: "1B+",
        destaque: "📈 Mais Baixado",
        color: "#fe2c55",
        emoji: "🎵"
    },
    {
        id: 3,
        nome: "Duolingo",
        categoria: "Educação",
        descricao: "Aprenda idiomas de forma gamificada. O app de idiomas mais popular do mundo com lições diárias rápidas e eficazes.",
        rating: "4.7",
        downloads: "500M+",
        destaque: "🏆 Editor's Choice",
        color: "#58cc02",
        emoji: "🦉"
    },
    {
        id: 4,
        nome: "CapCut",
        categoria: "Edição de Vídeo",
        descricao: "Editor de vídeo profissional com IA integrada. Crie Reels, TikToks e Shorts com efeitos incríveis em minutos.",
        rating: "4.8",
        downloads: "1B+",
        destaque: "🎬 Em Alta",
        color: "#000000",
        emoji: "✂️"
    },
    {
        id: 5,
        nome: "Perplexity AI",
        categoria: "IA & Pesquisa",
        descricao: "Motor de busca com IA que cita fontes em tempo real. A alternativa inteligente ao Google para respostas completas e verificadas.",
        rating: "4.6",
        downloads: "10M+",
        destaque: "🚀 Crescimento Explosivo",
        color: "#1fb8cd",
        emoji: "🔍"
    },
    {
        id: 6,
        nome: "Niagara Launcher",
        categoria: "Personalização",
        descricao: "Launcher minimalista e elegante para Android. Transforma sua tela inicial com design clean e foco em produtividade.",
        rating: "4.6",
        downloads: "5M+",
        destaque: "⭐ Destaque",
        color: "#6366f1",
        emoji: "🎨"
    },
    {
        id: 7,
        nome: "Spotify",
        categoria: "Música",
        descricao: "O maior streaming de música do mundo com mais de 100 milhões de faixas. Podcasts, audiobooks e playlists personalizadas com IA.",
        rating: "4.5",
        downloads: "1B+",
        destaque: "🎧 Favorito Global",
        color: "#1db954",
        emoji: "🎵"
    },
    {
        id: 8,
        nome: "Google Maps",
        categoria: "Navegação",
        descricao: "Navegação em tempo real com IA preditiva de trânsito. Descubra restaurantes, pontos turísticos e rotas otimizadas.",
        rating: "4.3",
        downloads: "10B+",
        destaque: "🗺️ Essencial",
        color: "#4285f4",
        emoji: "📍"
    }
];

const appsIOS = [
    {
        id: 1,
        nome: "Netflix Playground",
        categoria: "Jogos & Entretenimento",
        descricao: "O novo app de jogos da Netflix sem anúncios e sem compras dentro do app, semelhante ao Apple Arcade. Exclusivo para assinantes.",
        rating: "4.7",
        destaque: "🎮 Novidade",
        color: "#e50914",
        emoji: "🎮"
    },
    {
        id: 2,
        nome: "Google AI Edge",
        categoria: "Produtividade",
        descricao: "Ditado de voz offline com IA sem necessidade de assinatura. Transcreve com precisão cirúrgica sem enviar dados para nuvem.",
        rating: "4.5",
        destaque: "🔒 Privacidade",
        color: "#4285f4",
        emoji: "🎤"
    },
    {
        id: 3,
        nome: "Bitchat",
        categoria: "Mensagens",
        descricao: "App de mensagens descentralizado criado por Jack Dorsey (criador do Twitter). Foco total em privacidade e criptografia.",
        rating: "4.3",
        destaque: "🔐 Privacidade First",
        color: "#1da1f2",
        emoji: "💬"
    },
    {
        id: 4,
        nome: "Perplexity AI",
        categoria: "IA & Pesquisa",
        descricao: "Pesquisa com IA que cita fontes verificadas em tempo real. A ferramenta preferida de pesquisadores e profissionais.",
        rating: "4.7",
        destaque: "🚀 Em Alta",
        color: "#1fb8cd",
        emoji: "🔍"
    },
    {
        id: 5,
        nome: "Arc Search",
        categoria: "Navegador",
        descricao: "Navegador inteligente que usa IA para resumir páginas automaticamente. Navegar nunca foi tão eficiente no iPhone.",
        rating: "4.8",
        destaque: "⚡ Ultra Rápido",
        color: "#ff6b35",
        emoji: "🌐"
    },
    {
        id: 6,
        nome: "Luma AI",
        categoria: "IA & Criatividade",
        descricao: "Gere vídeos e imagens 3D de altíssima qualidade com IA. Transforma fotos e textos em experiências visuais cinematográficas.",
        rating: "4.6",
        destaque: "✨ Top Criativo",
        color: "#7c3aed",
        emoji: "🎨"
    },
    {
        id: 7,
        nome: "Procreate Dreams",
        categoria: "Animação",
        descricao: "O app de animação frame-a-frame mais poderoso do iPad. Criado pelos autores do Procreate para artistas profissionais.",
        rating: "4.9",
        destaque: "🏆 Best of App Store",
        color: "#f59e0b",
        emoji: "🖌️"
    },
    {
        id: 8,
        nome: "Widgetsmith",
        categoria: "Personalização",
        descricao: "Crie widgets personalizados para a tela inicial do iPhone. Fotos, calendário, tempo e muito mais com design totalmente customizável.",
        rating: "4.4",
        destaque: "🎨 Trending",
        color: "#ec4899",
        emoji: "📱"
    }
];

function AppCard({ app, index }) {
    return (
        <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -5 }}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
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
                    {app.destaque}
                </span>
            </div>
            <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem' }}>{app.nome}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>{app.categoria}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', flex: 1 }}>{app.descricao}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: '#f59e0b' }}>
                    <Star size={13} fill="#f59e0b" /> {app.rating}
                </span>
                {app.downloads && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <Download size={12} /> {app.downloads}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export default function AppsEmAlta() {
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
                        Os apps mais baixados e em tendência na Play Store e App Store agora.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <Calendar size={14} />
                        Atualizado em Abril de 2026
                    </div>
                </motion.div>

                {/* AdSense Topo */}
                <AdBanner slot="2233445566" format="horizontal" />

                {/* Play Store */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ marginBottom: '3rem' }}
                >
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ marginTop: '2rem' }}
                >
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

                {/* AdSense Rodapé */}
                <AdBanner slot="4455667788" format="horizontal" style={{ marginTop: '3rem' }} />
            </div>
        </div>
    );
}

import { motion } from 'framer-motion';
import { Shield, Cookie, Eye, Database, Mail, FileText } from 'lucide-react';

const Section = ({ icon, title, children }) => (
    <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)' }}>
            {icon} {title}
        </h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.85', fontSize: '0.975rem' }}>
            {children}
        </div>
    </div>
);

export default function Privacy() {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '860px' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Shield size={36} color="var(--accent)" />
                        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800' }}>Política de Privacidade</h1>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>Última atualização: 14 de abril de 2026</p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="glass-panel" style={{ padding: '2.5rem' }}>

                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '2.5rem', fontSize: '1rem', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '1.25rem' }}>
                        Esta Política de Privacidade descreve como o <strong style={{ color: 'var(--text-primary)' }}>HL Desenvolvedor</strong> (<strong>hldesenvolvedor.vercel.app</strong>) coleta, usa e protege as informações dos visitantes do site, em conformidade com a <strong style={{ color: 'var(--text-primary)' }}>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e as Políticas do Programa Google AdSense.
                    </p>

                    <Section icon={<Database size={20} color="var(--accent)" />} title="1. Informações que Coletamos">
                        <p style={{ marginBottom: '1rem' }}>Ao visitar nosso site, podemos coletar automaticamente as seguintes informações:</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            {[
                                'Endereço IP e localização aproximada',
                                'Tipo de navegador e sistema operacional',
                                'Páginas visitadas e tempo de permanência',
                                'Fonte de referência (como chegou ao nosso site)',
                                'Interações com anúncios exibidos na página',
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent)', marginTop: '4px' }}>▸</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p>Quando você utiliza nosso formulário de contato, coletamos nome, e-mail e o conteúdo da mensagem enviada, exclusivamente para responder à sua solicitação.</p>
                    </Section>

                    <Section icon={<Cookie size={20} color="#f59e0b" />} title="2. Cookies e Tecnologias de Rastreamento">
                        <p style={{ marginBottom: '1rem' }}>Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação e exibir anúncios relevantes. Os tipos de cookies utilizados são:</p>

                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
                            {[
                                { tipo: 'Cookies Essenciais', desc: 'Necessários para o funcionamento básico do site. Não podem ser desativados.' },
                                { tipo: 'Cookies de Desempenho', desc: 'Coletam informações anônimas sobre como os visitantes usam o site para melhorarmos o conteúdo.' },
                                { tipo: 'Cookies de Publicidade (Google AdSense)', desc: 'Utilizados pelo Google AdSense para exibir anúncios personalizados com base nos seus interesses e histórico de navegação.' },
                            ].map((c, i) => (
                                <div key={i} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem' }}>
                                    <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{c.tipo}</div>
                                    <div style={{ fontSize: '0.9rem' }}>{c.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p>Você pode gerenciar ou desativar cookies nas configurações do seu navegador a qualquer momento. Ao desativar cookies de publicidade, os anúncios exibidos serão genéricos (não personalizados).</p>
                    </Section>

                    <Section icon={<Eye size={20} color="#10b981" />} title="3. Google AdSense e Publicidade">
                        <p style={{ marginBottom: '1rem' }}>
                            Este site utiliza o <strong style={{ color: 'var(--text-primary)' }}>Google AdSense</strong>, serviço de publicidade do Google LLC, para exibir anúncios. O Google AdSense usa cookies para exibir anúncios baseados em visitas anteriores ao nosso e a outros sites.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>ID do Publisher AdSense:</strong> ca-pub-6105194579101073
                        </p>
                        <p style={{ marginBottom: '1rem' }}>O Google pode usar as informações sobre suas visitas para exibir anúncios relevantes de produtos e serviços de seu interesse. Isso envolve o uso de cookies DART pelo Google.</p>
                        <p>
                            Você pode desativar o uso de cookies pelo Google visitando a{' '}
                            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                                Política de Publicidade do Google
                            </a>{' '}
                            ou o{' '}
                            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                                Gerenciador de Preferências de Anúncios
                            </a>.
                        </p>
                    </Section>

                    <Section icon={<FileText size={20} color="#8b5cf6" />} title="4. Como Usamos suas Informações">
                        <p style={{ marginBottom: '1rem' }}>As informações coletadas são utilizadas para:</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                'Melhorar a experiência de navegação e o conteúdo do site',
                                'Exibir anúncios relevantes através do Google AdSense',
                                'Analisar tráfego e comportamento de usuários (de forma agregada e anônima)',
                                'Responder mensagens enviadas pelo formulário de contato',
                                'Cumprir obrigações legais e regulatórias',
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent)', marginTop: '4px' }}>▸</span> {item}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section icon={<Shield size={20} color="#ef4444" />} title="5. Compartilhamento de Dados">
                        <p style={{ marginBottom: '1rem' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Não vendemos, alugamos ou comercializamos seus dados pessoais.</strong> Podemos compartilhar informações com:
                        </p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                'Google LLC (AdSense, Analytics) — para veiculação de anúncios e análise de tráfego',
                                'Autoridades legais — quando exigido por lei ou ordem judicial',
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent)', marginTop: '4px' }}>▸</span> {item}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section icon={<Shield size={20} color="#6366f1" />} title="6. Seus Direitos (LGPD)">
                        <p style={{ marginBottom: '1rem' }}>Em conformidade com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                'Direito de acesso: solicitar quais dados possuímos sobre você',
                                'Direito de correção: solicitar a correção de dados incorretos',
                                'Direito de exclusão: solicitar a exclusão dos seus dados',
                                'Direito de portabilidade: receber seus dados em formato estruturado',
                                'Direito de oposição: opor-se ao tratamento de dados para fins de publicidade',
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                    <span style={{ color: 'var(--accent)', marginTop: '4px' }}>▸</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '1rem' }}>Para exercer qualquer desses direitos, entre em contato: <a href="mailto:suporte@hldesenvolvedor.com" style={{ color: 'var(--accent)' }}>suporte@hldesenvolvedor.com</a></p>
                    </Section>

                    <Section icon={<Mail size={20} color="#0ea5e9" />} title="7. Contato do Responsável pelos Dados">
                        <p>Para dúvidas, solicitações ou reclamações sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato:</p>
                        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', marginTop: '1rem' }}>
                            <div><strong style={{ color: 'var(--text-primary)' }}>HL Desenvolvedor</strong></div>
                            <div>Crateús, Ceará — Brasil</div>
                            <div>E-mail: <a href="mailto:suporte@hldesenvolvedor.com" style={{ color: 'var(--accent)' }}>suporte@hldesenvolvedor.com</a></div>
                            <div>WhatsApp: <a href="https://wa.me/5588993759083" style={{ color: 'var(--accent)' }}>(88) 99375-9083</a></div>
                        </div>
                    </Section>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente. Alterações significativas serão comunicadas no próprio site.
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

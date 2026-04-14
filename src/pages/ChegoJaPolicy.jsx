export default function ChegoJaPolicy() {
    return (
        <div style={{ padding: '8rem 0 5rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '800' }}>
                    Política de Privacidade - ChegoJá
                </h1>

                <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)'
                }}>
                    <p style={{ marginBottom: '1.5rem' }}><strong>Última atualização: {new Date().toLocaleDateString('pt-BR')}</strong></p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Introdução</h2>
                        <p>
                            O <strong>ChegoJá</strong>, desenvolvido por HL Desenvolvedor, é um aplicativo de mobilidade urbana focado em conectar passageiros e motoristas em Crateús e região.
                            Sua privacidade é nossa prioridade. Esta política explica como coletamos, usamos e protegemos seus dados.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Dados que Coletamos</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>
                                <strong>Localização:</strong> Coletamos dados de localização precisa e aproximada.
                                <br /><em>Para Motoristas:</em> Coletamos localização em segundo plano (background) para permitir que passageiros rastreiem corridas e para cálculo de tarifas, mesmo quando o app está fechado ou não está em uso, desde que o status esteja "Online".
                                <br /><em>Para Passageiros:</em> Coletamos localização para definir pontos de embarque e acompanhar o trajeto.
                            </li>
                            <li><strong>Informações de Conta:</strong> Nome, e-mail, número de telefone e foto de perfil.</li>
                            <li><strong>Transações:</strong> Detalhes de pagamentos e histórico de corridas.</li>
                            <li><strong>Informações do Dispositivo:</strong> Modelo do aparelho, sistema operacional e identificadores únicos para segurança e prevenção de fraudes.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Como Usamos seus Dados</h2>
                        <p>Utilizamos suas informações para:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Conectar passageiros a motoristas próximos.</li>
                            <li>Calcular preços e processar pagamentos.</li>
                            <li>Garantir a segurança da plataforma e prevenir atividades fraudulentas.</li>
                            <li>Melhorar nossos serviços e desenvolver novas funcionalidades.</li>
                            <li>Enviar atualizações sobre corridas e promoções.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Compartilhamento de Dados</h2>
                        <p>Alguns dados são compartilhados apenas durante a prestação do serviço:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li><strong>Com Motoristas/Passageiros:</strong> Nome, avaliação e localização para facilitar o encontro e a corrida.</li>
                            <li><strong>Com Parceiros Legais:</strong> Podemos compartilhar dados se exigido por lei ou solicitação governamental.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Segurança</h2>
                        <p>
                            Adotamos práticas de segurança do setor para proteger seus dados contra acesso não autorizado. No entanto, nenhum método de transmissão pela internet é 100% seguro.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>6. Exclusão de Dados</h2>
                        <p>
                            Você pode solicitar a exclusão de sua conta e dados a qualquer momento através do menu de configurações do aplicativo ou entrando em contato com nosso suporte.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>7. Contato</h2>
                        <p>
                            Se tiver dúvidas sobre esta política, entre em contato conosco:<br />
                            <strong>E-mail:</strong> suporte@hldesenvolvedor.com<br />
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

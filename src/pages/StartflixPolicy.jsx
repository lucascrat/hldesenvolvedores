export default function StartflixPolicy() {
    return (
        <div style={{ padding: '8rem 0 5rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '800' }}>
                    Política de Privacidade - Startflix
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
                            O <strong>Startflix</strong>, desenvolvido por HL Desenvolvedor, é um player de vídeo local projetado para oferecer a melhor experiência de reprodução de mídia em seu dispositivo móvel.
                            Esta política explica como gerenciamos seus dados.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Acesso a Arquivos</h2>
                        <p>
                            Para funcionar corretamente, o Startflix necessita de permissão para acessar o armazenamento do seu dispositivo.
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li><strong>Leitura de Armazenamento:</strong> Utilizamos esta permissão exclusivamente para localizar, listar e reproduzir os arquivos de vídeo e áudio armazenados no seu celular.</li>
                            <li><strong>Nenhum Envio de Dados:</strong> O Startflix é um player offline. Não fazemos upload dos seus arquivos de mídia para nenhum servidor. Seus vídeos permanecem estritamente no seu dispositivo.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Dados Coletados</h2>
                        <p>
                            O aplicativo não coleta dados pessoais, localização ou histórico de navegação.
                            Podemos coletar dados de crash (falhas) anônimos via serviços da loja de aplicativos para melhorar a estabilidade do app.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Contato</h2>
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

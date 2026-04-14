import { useEffect } from 'react';

/**
 * Componente AdSense para exibição de anúncios
 *
 * Tipos de anúncio disponíveis:
 * - 'display': 300x250, 728x90, 300x600 (responsivo)
 * - 'in-article': Anúncios dentro do conteúdo
 * - 'matched-content': Conteúdo relacionado
 */
export default function AdSense({ type = 'display', slot = '', className = '' }) {
    useEffect(() => {
        try {
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        } catch (e) {
            console.log('AdSense não carregado');
        }
    }, []);

    // Slot padrão para testes - REMOVER em produção
    const defaultSlot = '1234567890';
    const adSlot = slot || defaultSlot;
    const clientId = 'ca-pub-xxxxxxxxxxxxxxxx'; // SUBSTITUIR COM SEU CLIENT ID

    if (type === 'display') {
        return (
            <div className={`ad-container ${className}`} style={{
                margin: '2rem 0',
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border)'
            }}>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client={clientId}
                    data-ad-slot={adSlot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        );
    }

    if (type === 'in-article') {
        return (
            <div className={`ad-in-article ${className}`} style={{
                margin: '2rem 0',
                textAlign: 'center'
            }}>
                <ins
                    className="adsbygoogle"
                    style={{
                        display: 'block',
                        textAlign: 'center'
                    }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client={clientId}
                    data-ad-slot={adSlot}
                />
            </div>
        );
    }

    if (type === 'matched-content') {
        return (
            <div className={`ad-matched-content ${className}`} style={{
                margin: '2rem 0'
            }}>
                <ins
                    className="adsbygoogle"
                    style={{
                        display: 'block'
                    }}
                    data-ad-format="autorelaxed"
                    data-ad-client={clientId}
                    data-ad-slot={adSlot}
                />
            </div>
        );
    }

    return null;
}

import { useEffect, useRef } from 'react';

export default function AdBanner({ slot, format = 'auto', style = {} }) {
    const adRef = useRef(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (!pushed.current && adRef.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                pushed.current = true;
            } catch (e) {
                console.error('AdSense error:', e);
            }
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', overflow: 'hidden', margin: '1.5rem 0', ...style }}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-6105194579101073"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}

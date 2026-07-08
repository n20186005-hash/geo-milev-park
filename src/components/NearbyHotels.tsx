import { useTranslations, useMessages } from 'next-intl';

export default function NearbyHotels() {
  const t = useTranslations('nearbyHotels');
  const messages = useMessages() as any;
  const hotels: Array<{ name: string; desc: string; link: string }> =
    messages?.nearbyHotels?.hotels || [];

  return (
    <section id="hotels" className="section-padding scroll-mt-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-base leading-relaxed mb-3 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <p className="text-xs mb-8" style={{ color: 'var(--text-muted)' }}>{t('affiliateNote')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <a
              key={hotel.name}
              href={hotel.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {hotel.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {hotel.desc}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                style={{ color: 'var(--accent)' }}
              >
                {t('title')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

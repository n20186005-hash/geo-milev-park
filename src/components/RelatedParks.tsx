import { useTranslations, useMessages } from 'next-intl';

export default function RelatedParks() {
  const t = useTranslations('relatedParks');
  const messages = useMessages() as any;
  const items: Array<{ name: string; desc: string; link: string }> =
    messages?.relatedParks?.items || [];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.link}
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
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                style={{ color: 'var(--accent)' }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

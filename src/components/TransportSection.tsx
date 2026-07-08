'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

export default function TransportSection() {
  const t = useTranslations('transport');
  const messages = useMessages() as any;
  const transport = messages?.transport || {};
  const mapsLink = messages?.hero?.mapsLink || 'https://maps.app.goo.gl/4jdXFm3mLhMhdhhw9';

  const airportIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-.8-.2-1.6.3-1.8 1.1-.2.8.3 1.6 1.1 1.8l6.3 1.4-3.4 3.4-2.8-.7c-.6-.2-1.2.1-1.4.7-.2.6.1 1.2.7 1.4l3.5.9 1.4 3.5c.2.6.8.9 1.4.7.6-.2.9-.8.7-1.4l-.7-2.8 3.4-3.4 1.4 6.3c.2.8 1 1.3 1.8 1.1.8-.2 1.3-1 1.1-1.8z" />
    </svg>
  );

  const centerIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );

  const parkingIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );

  return (
    <section id="transport" className="section-padding scroll-mt-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-6">
          {/* Airport */}
          <TransportBlock icon={airportIcon} title={transport.airport?.title} note={transport.airport?.distance}>
            <SubSection label={transport.airport?.transitTitle} text={transport.airport?.transit} />
            <SubSection label={transport.airport?.taxiTitle} text={transport.airport?.taxi} />
          </TransportBlock>

          {/* Center */}
          <TransportBlock icon={centerIcon} title={transport.center?.title}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {transport.center?.desc}
            </p>
          </TransportBlock>

          {/* Parking */}
          <TransportBlock icon={parkingIcon} title={transport.parking?.title}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {transport.parking?.desc}
            </p>
          </TransportBlock>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={`https://www.google.com/maps/dir//${encodeURIComponent('Geo Milev Park, 1111 Sofia, Bulgaria')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7l6-3 5.447 2.724A1 1 0 0 1 21 7.618v10.764a1 1 0 0 1-1.447.894L15 17l-6 3z" />
              <path d="M9 7v13" />
              <path d="M15 4v13" />
            </svg>
            {t('getDirections')}
          </a>
        </div>
      </div>
    </section>
  );
}

function TransportBlock({
  icon,
  title,
  note,
  children,
}: {
  icon: ReactNode;
  title?: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: 'var(--accent)', color: 'white' }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
          {note && (
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{note}</p>
          )}
        </div>
      </div>
      <div className="space-y-4 sm:pl-16">{children}</div>
    </div>
  );
}

function SubSection({ label, text }: { label?: string; text?: string }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>{label}</p>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{text}</p>
    </div>
  );
}

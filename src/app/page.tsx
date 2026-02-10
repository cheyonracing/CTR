"use client";

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import InstagramFeed from '@/components/InstagramFeed';
import siteData from '@/data/siteData';
import HeroSlider from '@/components/HeroSlider';
import { HorizontalScrollCarousel } from '@/components/ui/horizontal-scroll-carousel';

export default function Home() {
  const { site, car, drivers, races, news, sponsors } = siteData;
  const nextRace = races.calendar[0];

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { day: '2-digit', month: 'short' });

  return (
    <>
      <Navbar />

      {/* ── Hero Slider ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-season-label">
          <p className="section-label">Season {races.season} &bull; {races.seasonName}</p>
        </div>
        <HeroSlider />
        {/* Quick stats overlaid on hero (desktop only) */}
        <div className="hero-stats-strip">
          <div className="hero-stat-item">
            <span className="hero-stat-value">{drivers.length}</span>
            <span className="hero-stat-label">Drivers</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-value">{races.calendar.length}</span>
            <span className="hero-stat-label">Races</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-value">S{races.season}</span>
            <span className="hero-stat-label">Season</span>
          </div>
        </div>
      </div>

      {/* ── Car Section — Cinematic Full-Bleed ── */}
      <section className="car-cinematic">
        <div className="car-cinematic-bg" style={{ backgroundImage: `url(${car.image})` }} />
        <div className="car-cinematic-gradient" />
        <div className="car-cinematic-content">
          <p className="section-label">{car.year} Season Car</p>
          <h2 className="spaced-title-large">
            CTR<br /><span>RACING</span>
          </h2>
          <p>
            Experience the power and precision of Chennai Turbo Riders&apos; racing machine.
            Built for speed, engineered for victory on both traditional circuits and
            India&apos;s first street circuit night race.
          </p>
          <Link href="/about" className="btn btn-outline">Learn More</Link>
        </div>
      </section>

      <div className="section-divider-diagonal" />

      {/* ── Drivers ── */}
      <section className="drivers-section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ marginBottom: '2rem' }}>
          <div className="drivers-header">
            <p className="section-label">Official Drivers</p>
            <h2 className="spaced-title-large">OUR TEAM</h2>
          </div>
        </div>
        <HorizontalScrollCarousel
          items={drivers.map((d) => ({
            id: d.id,
            image: d.image,
            firstName: d.firstName,
            lastName: d.lastName,
            number: d.number,
            flagEmoji: d.flagEmoji,
          }))}
        />
      </section>

      {/* ── Countdown ── */}
      <section className="countdown-section">
        <div className="container">
          <p className="countdown-label">Next Race Starts In</p>
          <CountdownTimer targetDate={nextRace.dateStart} />
          <div className="next-race-info">
            <span className="next-race-flag">{nextRace.flagEmoji}</span>
            <div className="next-race-details">
              <p className="next-race-date">
                {formatDate(nextRace.dateStart)} – {formatDate(nextRace.dateEnd)}{' '}
                {new Date(nextRace.dateEnd).getFullYear()}
              </p>
              <p className="next-race-name">{nextRace.name}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-diagonal--reverse" />

      {/* ── Race Calendar Preview — Card Grid ── */}
      <section className="calendar-section">
        <div className="container">
          <div className="calendar-header">
            <p className="section-label">{races.seasonName}</p>
            <h2 className="spaced-title-large">RACE CALENDAR</h2>
          </div>

          <div className="race-card-grid">
            {races.calendar.slice(0, 6).map((race, i) => (
              <div key={race.round} className={`race-card ${i === 0 ? 'next-race' : ''}`}>
                <div className="race-card-round-number">
                  {String(race.round).padStart(2, '0')}
                </div>
                <div className="race-card-body">
                  <p className="race-card-name">{race.name}</p>
                  <p className="race-card-location">
                    <span>{race.flagEmoji}</span> {race.location}, {race.country}
                  </p>
                  <div className="race-card-meta">
                    <span className="race-card-date">
                      {formatDate(race.dateStart)} – {formatDate(race.dateEnd)}
                    </span>
                    {race.isNightRace && <span className="race-card-tag">Night</span>}
                    {race.isStreetCircuit && <span className="race-card-tag">Street</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/schedule" className="btn btn-primary">View Full Calendar</Link>
          </div>
        </div>
      </section>

      {/* ── News / Instagram ── */}
      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <div>
              <p className="section-label">Latest Updates</p>
              <h2 className="spaced-title resp-section-title">NEWS</h2>
            </div>
            <Link href="/news" className="view-all-link">
              View All Posts
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
          </div>
          <InstagramFeed username="chennaiturboriders" limit={3} />
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section className="sponsors-section">
        <div className="container">
          <div className="sponsors-header">
            <p className="section-label">Our Partners</p>
            <h2 className="spaced-title-large">SPONSORS</h2>
          </div>

          {sponsors.title.length > 0 && (
            <div className="sponsors-tier title">
              <p className="sponsors-tier-title">Title Sponsor</p>
              <div className="sponsors-grid">
                {sponsors.title.map((s) => (
                  <a key={s.id} href={s.website} target="_blank" rel="noopener noreferrer">
                    <img src={s.logo} alt={s.name} className="sponsor-logo" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {sponsors.principal.length > 0 && (
            <div className="sponsors-tier">
              <p className="sponsors-tier-title">Principal Partners</p>
              <div className="sponsors-grid">
                {sponsors.principal.map((s) => (
                  <a key={s.id} href={s.website} target="_blank" rel="noopener noreferrer">
                    <img src={s.logo} alt={s.name} className="sponsor-logo" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {sponsors.official.length > 0 && (
            <div className="sponsors-tier">
              <p className="sponsors-tier-title">Official Partners</p>
              <div className="sponsors-grid">
                {sponsors.official.map((s) => (
                  <a key={s.id} href={s.website} target="_blank" rel="noopener noreferrer">
                    <img src={s.logo} alt={s.name} className="sponsor-logo" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

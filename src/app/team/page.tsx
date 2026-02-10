"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData';
import { HorizontalScrollCarousel } from '@/components/ui/horizontal-scroll-carousel';

export default function TeamPage() {
  const { site, teamPrincipal, drivers } = siteData;

  const irlDrivers = drivers.filter((d) => d.championship === 'IRL');
  const f4Drivers = drivers.filter((d) => d.championship === 'F4');

  const totalWins = drivers.reduce((s, d) => s + d.stats.raceWins, 0);
  const totalPodiums = drivers.reduce((s, d) => s + d.stats.podiums, 0);
  const totalPoints = drivers.reduce((s, d) => s + d.stats.points, 0);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundImage: 'url(/images/car/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <section className="page-hero" style={{ position: 'relative', background: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label">Season {site.currentSeason}</p>
            <h1 className="spaced-title-large">OUR <span>TEAM</span></h1>
          </div>
        </section>

        {/* Team Principal */}
        <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="grid-sidebar-content-xl">
              <img
                src={teamPrincipal.image}
                alt={teamPrincipal.name}
                className="zoom-effect"
                style={{ height: 'clamp(280px, 35vw, 400px)', borderRadius: '8px', width: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div>
                <p className="section-label">{teamPrincipal.title}</p>
                <h2 className="spaced-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', marginBottom: '1.25rem' }}>
                  {teamPrincipal.name.toUpperCase()}
                </h2>
                <p style={{ color: 'var(--ctr-text-light)', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', lineHeight: 1.8 }}>
                  Leading Chennai Turbo Riders with vision and passion, {teamPrincipal.name} has been
                  instrumental in establishing the team as a competitive force in the Indian Racing League.
                  Under their leadership, CTR has grown to include both local Chennai-based talent and
                  international racing stars, making it one of India&apos;s most diverse and exciting racing teams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Team Stats */}
      <section className="countdown-section" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Team Statistics</p>
          <h3 className="spaced-title" style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>
            SEASON STATS
          </h3>
          <div className="countdown-timer" style={{ marginBottom: 0 }}>
            {[
              { val: drivers.length, label: 'Drivers' },
              { val: totalWins, label: 'Wins' },
              { val: totalPodiums, label: 'Podiums' },
              { val: totalPoints, label: 'Points' },
            ].map((item) => (
              <div className="countdown-item" key={item.label}>
                <span className="countdown-value">{item.val}</span>
                <span className="countdown-unit">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IRL Drivers */}
      <section
        className="drivers-section"
        style={{
          padding: 'clamp(2rem, 5vw, 4rem) 0 0 0',
          position: 'relative',
          backgroundImage: 'url(/images/car/hero2.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 0 }} />
        <div className="container" style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
          <div className="drivers-header">
            <p className="section-label">2025 Indian Racing League (Wolf GB08)</p>
            <h2 className="spaced-title-large">IRL <span style={{ color: 'var(--ctr-yellow)' }}>DRIVERS</span></h2>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HorizontalScrollCarousel
            items={irlDrivers.map((d) => ({ id: d.id, image: d.image, lastName: d.lastName, number: d.number, flagEmoji: d.flagEmoji }))}
          />
        </div>
      </section>

      {/* F4 Drivers */}
      <section
        className="drivers-section"
        style={{
          padding: 'clamp(2rem, 5vw, 4rem) 0',
          position: 'relative',
          backgroundImage: 'url(/images/car/hero2.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 0 }} />
        <div className="container" style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
          <div className="drivers-header">
            <p className="section-label">2025 Indian F4 Championship</p>
            <h2 className="spaced-title-large">F4 <span style={{ color: 'var(--ctr-yellow)' }}>DRIVERS</span></h2>
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HorizontalScrollCarousel
            items={f4Drivers.map((d) => ({ id: d.id, image: d.image, lastName: d.lastName, number: d.number, flagEmoji: d.flagEmoji }))}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

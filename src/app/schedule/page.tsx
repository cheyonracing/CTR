import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import siteData from '@/data/siteData.json';

export const metadata = {
  title: 'Race Calendar | Chennai Turbo Riders',
  description: 'View the complete race calendar for Chennai Turbo Riders in the Indian Racing League',
};

export default function SchedulePage() {
  const { races } = siteData;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
    });
  };

  const nextRace = races.calendar[0];

  return (
    <div className="schedule-page">
      <video
        className="schedule-page-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/background.mp4"
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
      <Navbar />

      <div className="schedule-page-content">
        {/* Page Hero */}
        <section
          className="page-hero"
          style={{
            position: 'relative',
            background: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className="section-label">{races.seasonName}</p>
            <h1 className="spaced-title-large">
              RACE&nbsp;<span>CALENDAR</span>
            </h1>
          </div>
        </section>

        {/* Countdown */}
        <section className="countdown-section" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <p className="countdown-label">Next Race Starts In</p>
            <CountdownTimer targetDate={nextRace.dateStart} />

            <div className="next-race-info">
              <span className="next-race-flag">{nextRace.flagEmoji}</span>
              <div className="next-race-details">
                <p className="next-race-date">
                  {formatDate(nextRace.dateStart)} -{' '}
                  {formatDate(nextRace.dateEnd)}{' '}
                  {new Date(nextRace.dateEnd).getFullYear()}
                </p>
                <p className="next-race-name">
                  {nextRace.name}, {nextRace.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Calendar — Card Grid */}
        <section className="calendar-section" style={{ paddingTop: 'clamp(1rem, 3vw, 2rem)' }}>
          <div className="container">
            <div className="race-card-grid">
              {races.calendar.map((race, index) => (
                <div
                  key={race.round}
                  className={`race-card ${index === 0 ? 'next-race' : ''}`}
                >
                  <div className="race-card-round-number">
                    {String(race.round).padStart(2, '0')}
                  </div>
                  <div className="race-card-body">
                    <p className="race-card-name">{race.name}</p>
                    <p className="race-card-location">
                      <span>{race.flagEmoji}</span> {race.location}, {race.country}
                    </p>
                    <p className="race-card-circuit">
                      {race.circuitLength} &bull; {race.laps} Laps
                    </p>
                    <div className="race-card-meta">
                      <span className="race-card-date">
                        {formatDate(race.dateStart)} –{' '}
                        {formatDate(race.dateEnd)}{' '}
                        {new Date(race.dateEnd).getFullYear()}
                      </span>
                      {race.isNightRace && (
                        <span className="race-card-tag">Night Race</span>
                      )}
                      {race.isStreetCircuit && (
                        <span className="race-card-tag">Street Circuit</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Street Circuit Info — Side-by-side layout */}
        <section className="street-section">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <p className="section-label" style={{ textAlign: 'center' }}>
              Special Event
            </p>
            <h2
              className="spaced-title"
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              {races.streetCircuit.name.toUpperCase()}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
              gap: 'clamp(1rem, 2vw, 2rem)',
              alignItems: 'start',
            }}>
              {/* Left — Circuit Image */}
              {races.streetCircuit.image && (
                <div className="street-panel" style={{ padding: 0, overflow: 'hidden' }}>
                  <img
                    src={races.streetCircuit.image}
                    alt={`${races.streetCircuit.name} map`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'clamp(250px, 30vw, 400px)',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              )}

              {/* Right — Stats & Route */}
              <div className="street-panel">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                  marginBottom: 'clamp(1.25rem, 2vw, 2rem)',
                }}>
                  {[
                    { value: races.streetCircuit.length, label: 'Length' },
                    { value: races.streetCircuit.capacity.toLocaleString(), label: 'Capacity' },
                    { value: races.streetCircuit.stands, label: 'Stands' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <p
                        className="resp-stat-number"
                        style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                      >
                        {stat.value}
                      </p>
                      <p className="resp-stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h4
                  style={{
                    marginBottom: '0.75rem',
                    fontSize: 'clamp(0.72rem, 0.9vw, 0.82rem)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ctr-yellow)',
                  }}
                >
                  Circuit Route
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {races.streetCircuit.route.map((point, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.35rem 0.65rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '4px',
                        fontSize: 'clamp(0.7rem, 0.85vw, 0.8rem)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--ctr-white)',
                      }}
                    >
                      {point}
                      {index < races.streetCircuit.route.length - 1 && (
                        <span style={{ color: 'var(--ctr-yellow)' }}>&rarr;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

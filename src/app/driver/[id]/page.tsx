import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData.json';

interface DriverPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return siteData.drivers.map((driver) => ({
    id: driver.id,
  }));
}

export async function generateMetadata({ params }: DriverPageProps) {
  const driver = siteData.drivers.find(d => d.id === params.id);
  if (!driver) return { title: 'Driver Not Found' };
  
  return {
    title: `${driver.firstName} ${driver.lastName} | Chennai Turbo Riders`,
    description: driver.biography,
  };
}

export default function DriverPage({ params }: DriverPageProps) {
  const driver = siteData.drivers.find(d => d.id === params.id);
  
  if (!driver) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const spacedName = `${driver.firstName.split('').join(' ')}   ${driver.lastName.split('').join(' ')}`;

  return (
    <>
      <Navbar />
      
      {/* Driver Hero - Ferrari Style */}
      <section className="driver-hero">
        <div className="driver-hero-bg">
          <div className="placeholder-img" style={{ position: 'absolute', inset: 0 }}>
            {driver.firstName} {driver.lastName}
          </div>
        </div>
        
        <div className="driver-hero-content">
          <div className="driver-hero-inner">
            <p className="driver-label">Official Driver</p>
            <h1 className="driver-hero-name">{spacedName}</h1>
            
            <div className="driver-stats-highlight">
              <div className="stat-highlight">
                <span className="stat-value">{driver.stats.raceWins}</span>
                <span className="stat-label">Race Wins</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-value">{driver.stats.polePositions}</span>
                <span className="stat-label">Pole Positions</span>
              </div>
              <div className="stat-highlight">
                <span className="stat-value">{driver.stats.grandPrix}</span>
                <span className="stat-label">Grand Prix</span>
              </div>
            </div>
            
            <blockquote className="driver-quote">
              "{driver.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Driver Details - Ferrari Style */}
      <section className="driver-details-section">
        <div className="container">
          {/* Personal Info Grid */}
          <div className="driver-info-grid">
            <div className="driver-info-card">
              <p className="driver-info-value">{formatDate(driver.dateOfBirth)}</p>
              <p className="driver-info-label">Date of Birth</p>
            </div>
            <div className="driver-info-card">
              <p className="driver-info-value">{driver.weight}</p>
              <p className="driver-info-label">Weight</p>
            </div>
            <div className="driver-info-card">
              <p className="driver-info-value">{driver.height}</p>
              <p className="driver-info-label">Height</p>
            </div>
            <div className="driver-info-card">
              <p className="driver-info-value">{driver.flagEmoji} {driver.nationality}</p>
              <p className="driver-info-label">Country</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="driver-stats-grid">
            <div className="driver-stat-card">
              <span className="driver-stat-value">{driver.stats.podiums}</span>
              <span className="driver-stat-label">Total Podiums</span>
            </div>
            <div className="driver-stat-card">
              <span className="driver-stat-value">{driver.stats.fastestLaps}</span>
              <span className="driver-stat-label">Fastest Laps</span>
            </div>
            <div className="driver-stat-card">
              <span className="driver-stat-value">{driver.stats.points}</span>
              <span className="driver-stat-label">Career Points</span>
            </div>
          </div>

          {/* Biography */}
          <div className="driver-bio">
            <h3>About {driver.firstName}</h3>
            <p>{driver.biography}</p>
            
            <div className="driver-highlights">
              <h4>Career Highlights</h4>
              <ul>
                {driver.careerHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Team */}
      <section style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--ctr-dark)' }}>
        <Link href="/team" className="btn btn-outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(180deg)' }}>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
          Back to Team
        </Link>
      </section>

      <Footer />
    </>
  );
}

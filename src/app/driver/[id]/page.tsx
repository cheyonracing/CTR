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

  // Calculate percentages for charts
  const maxStats = { wins: 10, poles: 10, podiums: 15, points: 250 };
  const winsPercent = Math.min((driver.stats.raceWins / maxStats.wins) * 100, 100);
  const polesPercent = Math.min((driver.stats.polePositions / maxStats.poles) * 100, 100);
  const podiumsPercent = Math.min((driver.stats.podiums / maxStats.podiums) * 100, 100);
  const pointsPercent = Math.min((driver.stats.points / maxStats.points) * 100, 100);

  return (
    <>
      <Navbar />
      
      {/* Driver Hero - Professional Design */}
      <section className="driver-hero">
        <div className="driver-hero-bg">
          <img 
            src={driver.heroImage} 
            alt={`${driver.firstName} ${driver.lastName}`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'top center'
            }}
          />
        </div>
        
        <div className="driver-hero-content">
          <div className="driver-hero-inner">
            <div className="driver-number-badge">{driver.number}</div>
            <p className="driver-label">{driver.flagEmoji} Official Driver</p>
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

      {/* Driver Details - Professional Design */}
      <section className="driver-details-section">
        <div className="container">
          
          {/* Driver Image & Info Split */}
          <div className="driver-profile-split">
            <div className="driver-profile-image">
              <img 
                src={driver.image} 
                alt={`${driver.firstName} ${driver.lastName}`}
              />
              <div className="driver-profile-overlay">
                <span className="driver-profile-number">#{driver.number}</span>
              </div>
            </div>
            
            <div className="driver-profile-info">
              <h2 className="section-title">
                <span className="section-label">Profile</span>
                Personal Information
              </h2>
              
              {/* Personal Info Grid */}
              <div className="driver-info-grid-compact">
                <div className="driver-info-item">
                  <span className="info-icon">📅</span>
                  <div>
                    <p className="driver-info-value">{formatDate(driver.dateOfBirth)}</p>
                    <p className="driver-info-label">Date of Birth</p>
                  </div>
                </div>
                <div className="driver-info-item">
                  <span className="info-icon">📏</span>
                  <div>
                    <p className="driver-info-value">{driver.height}</p>
                    <p className="driver-info-label">Height</p>
                  </div>
                </div>
                <div className="driver-info-item">
                  <span className="info-icon">⚖️</span>
                  <div>
                    <p className="driver-info-value">{driver.weight}</p>
                    <p className="driver-info-label">Weight</p>
                  </div>
                </div>
                <div className="driver-info-item">
                  <span className="info-icon">🌍</span>
                  <div>
                    <p className="driver-info-value">{driver.flagEmoji} {driver.nationality}</p>
                    <p className="driver-info-label">Nationality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats Charts */}
          <div className="driver-charts-section">
            <h2 className="section-title">
              <span className="section-label">Performance</span>
              Career Statistics
            </h2>
            
            <div className="driver-charts-grid">
              {/* Circular Progress Charts */}
              <div className="chart-card">
                <div className="circular-chart">
                  <svg viewBox="0 0 100 100">
                    <circle className="chart-bg" cx="50" cy="50" r="45" />
                    <circle 
                      className="chart-progress chart-progress-wins" 
                      cx="50" cy="50" r="45"
                      style={{ '--progress': `${winsPercent}` } as React.CSSProperties}
                    />
                  </svg>
                  <div className="chart-center">
                    <span className="chart-value">{driver.stats.raceWins}</span>
                    <span className="chart-label">Wins</span>
                  </div>
                </div>
              </div>
              
              <div className="chart-card">
                <div className="circular-chart">
                  <svg viewBox="0 0 100 100">
                    <circle className="chart-bg" cx="50" cy="50" r="45" />
                    <circle 
                      className="chart-progress chart-progress-poles" 
                      cx="50" cy="50" r="45"
                      style={{ '--progress': `${polesPercent}` } as React.CSSProperties}
                    />
                  </svg>
                  <div className="chart-center">
                    <span className="chart-value">{driver.stats.polePositions}</span>
                    <span className="chart-label">Poles</span>
                  </div>
                </div>
              </div>
              
              <div className="chart-card">
                <div className="circular-chart">
                  <svg viewBox="0 0 100 100">
                    <circle className="chart-bg" cx="50" cy="50" r="45" />
                    <circle 
                      className="chart-progress chart-progress-podiums" 
                      cx="50" cy="50" r="45"
                      style={{ '--progress': `${podiumsPercent}` } as React.CSSProperties}
                    />
                  </svg>
                  <div className="chart-center">
                    <span className="chart-value">{driver.stats.podiums}</span>
                    <span className="chart-label">Podiums</span>
                  </div>
                </div>
              </div>
              
              <div className="chart-card">
                <div className="circular-chart">
                  <svg viewBox="0 0 100 100">
                    <circle className="chart-bg" cx="50" cy="50" r="45" />
                    <circle 
                      className="chart-progress chart-progress-points" 
                      cx="50" cy="50" r="45"
                      style={{ '--progress': `${pointsPercent}` } as React.CSSProperties}
                    />
                  </svg>
                  <div className="chart-center">
                    <span className="chart-value">{driver.stats.points}</span>
                    <span className="chart-label">Points</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bar Charts */}
            <div className="driver-bar-charts">
              <div className="bar-chart-item">
                <div className="bar-chart-header">
                  <span className="bar-chart-label">Race Wins</span>
                  <span className="bar-chart-value">{driver.stats.raceWins}</span>
                </div>
                <div className="bar-chart-track">
                  <div 
                    className="bar-chart-fill bar-fill-wins" 
                    style={{ '--fill-width': `${winsPercent}%` } as React.CSSProperties}
                  />
                </div>
              </div>
              
              <div className="bar-chart-item">
                <div className="bar-chart-header">
                  <span className="bar-chart-label">Pole Positions</span>
                  <span className="bar-chart-value">{driver.stats.polePositions}</span>
                </div>
                <div className="bar-chart-track">
                  <div 
                    className="bar-chart-fill bar-fill-poles" 
                    style={{ '--fill-width': `${polesPercent}%` } as React.CSSProperties}
                  />
                </div>
              </div>
              
              <div className="bar-chart-item">
                <div className="bar-chart-header">
                  <span className="bar-chart-label">Podiums</span>
                  <span className="bar-chart-value">{driver.stats.podiums}</span>
                </div>
                <div className="bar-chart-track">
                  <div 
                    className="bar-chart-fill bar-fill-podiums" 
                    style={{ '--fill-width': `${podiumsPercent}%` } as React.CSSProperties}
                  />
                </div>
              </div>
              
              <div className="bar-chart-item">
                <div className="bar-chart-header">
                  <span className="bar-chart-label">Fastest Laps</span>
                  <span className="bar-chart-value">{driver.stats.fastestLaps}</span>
                </div>
                <div className="bar-chart-track">
                  <div 
                    className="bar-chart-fill bar-fill-laps" 
                    style={{ '--fill-width': `${(driver.stats.fastestLaps / 10) * 100}%` } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="driver-bio-section">
            <div className="driver-bio">
              <h3>
                <span className="section-label">Biography</span>
                About {driver.firstName}
              </h3>
              <p>{driver.biography}</p>
            </div>
            
            <div className="driver-highlights">
              <h4>
                <span className="section-label">Achievements</span>
                Career Highlights
              </h4>
              <ul>
                {driver.careerHighlights.map((highlight, index) => (
                  <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="highlight-icon">🏆</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Team */}
      <section style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--ctr-dark)' }}>
        <Link href="/team" className="btn">
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

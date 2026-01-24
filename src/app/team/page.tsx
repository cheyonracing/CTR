import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DriverCard from '@/components/DriverCard';
import siteData from '@/data/siteData.json';

export const metadata = {
  title: 'Team | Chennai Turbo Riders',
  description: 'Meet the official drivers and team principal of Chennai Turbo Riders',
};

export default function TeamPage() {
  const { site, teamPrincipal, drivers } = siteData;

  // Calculate team stats
  const totalWins = drivers.reduce((sum, d) => sum + d.stats.raceWins, 0);
  const totalPodiums = drivers.reduce((sum, d) => sum + d.stats.podiums, 0);
  const totalPoints = drivers.reduce((sum, d) => sum + d.stats.points, 0);

  return (
    <>
      <Navbar />
      
      {/* Page Hero */}
      <section className="page-hero">
        <p className="section-label">Season {site.currentSeason}</p>
        <h1 className="spaced-title-large">
          O U R &nbsp; <span>T E A M</span>
        </h1>
      </section>

      {/* Team Principal Section */}
      <section style={{ padding: '4rem 0', background: 'var(--ctr-black)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '350px 1fr', 
            gap: '3rem', 
            alignItems: 'center' 
          }}>
            <div className="placeholder-img" style={{ height: '400px', borderRadius: '8px' }}>
              {teamPrincipal.name}
            </div>
            <div>
              <p className="section-label">{teamPrincipal.title}</p>
              <h2 className="spaced-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                {teamPrincipal.name.toUpperCase().split('').join(' ')}
              </h2>
              <p style={{ color: 'var(--ctr-text-light)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Leading Chennai Turbo Riders with vision and passion, {teamPrincipal.name} has been 
                instrumental in establishing the team as a competitive force in the Indian Racing League. 
                Under their leadership, CTR has grown to include both local Chennai-based talent and 
                international racing stars, making it one of India's most diverse and exciting racing teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="countdown-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Team Statistics</p>
          <h3 className="spaced-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
            S E A S O N &nbsp; S T A T S
          </h3>
          
          <div className="countdown-timer" style={{ marginBottom: 0 }}>
            <div className="countdown-item">
              <span className="countdown-value" style={{ color: 'var(--ctr-yellow)' }}>{drivers.length}</span>
              <span className="countdown-unit">Drivers</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" style={{ color: 'var(--ctr-yellow)' }}>{totalWins}</span>
              <span className="countdown-unit">Wins</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" style={{ color: 'var(--ctr-yellow)' }}>{totalPodiums}</span>
              <span className="countdown-unit">Podiums</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value" style={{ color: 'var(--ctr-yellow)' }}>{totalPoints}</span>
              <span className="countdown-unit">Points</span>
            </div>
          </div>
        </div>
      </section>

      {/* Drivers Section */}
      <section className="drivers-section">
        <div className="container">
          <div className="drivers-header">
            <p className="section-label">Official Drivers</p>
            <h2 className="spaced-title-large">D R I V E R S</h2>
          </div>
          
          <div className="drivers-grid">
            {drivers.map(driver => (
              <DriverCard key={driver.id} driver={driver} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

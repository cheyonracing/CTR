import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData';

export const metadata = {
  title: 'About | Chennai Turbo Riders',
  description: "Learn about Chennai Turbo Riders - India's premier racing team in the Indian Racing League",
};

export default function AboutPage() {
  const { site, teamPrincipal, drivers, races, sponsors } = siteData;

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <p className="section-label">Welcome to</p>
          <h1 className="spaced-title-large">
            CHENNAI<br /><span>TURBO RIDERS</span>
          </h1>
        </div>
      </section>

      {/* About Intro */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--ctr-black)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="grid-2-col">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="spaced-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
                THE TEAM
              </h2>
              <p style={{ color: 'var(--ctr-text-light)', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Chennai Turbo Riders represents the spirit of motorsport excellence in India.
                Based in the vibrant city of Chennai, we compete in the prestigious Indian Racing League,
                bringing together world-class talent and cutting-edge technology.
              </p>
              <p style={{ color: 'var(--ctr-text-light)', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.9 }}>
                Our team combines international racing expertise with homegrown Indian talent,
                creating a unique blend that pushes the boundaries of what&apos;s possible on the track.
              </p>
            </div>
            <div className="placeholder-img" style={{ height: 'clamp(250px, 35vw, 400px)' }}>
              Team Image
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container">
          <div className="grid-4-col">
            <div className="stat-block">
              <p className="resp-stat-number">{drivers.length}</p>
              <p className="resp-stat-label">DRIVERS</p>
            </div>
            <div className="stat-block">
              <p className="resp-stat-number">{site.currentSeason}</p>
              <p className="resp-stat-label">CURRENT SEASON</p>
            </div>
            <div className="stat-block">
              <p className="resp-stat-number">{races.calendar.length}</p>
              <p className="resp-stat-label">RACES</p>
            </div>
            <div className="stat-block">
              <p className="resp-stat-number">{Object.values(sponsors).flat().length}</p>
              <p className="resp-stat-label">SPONSORS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0', background: 'var(--ctr-dark)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Leadership</p>
          <h2 className="spaced-title" style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '2rem' }}>
            TEAM PRINCIPAL
          </h2>
          <div className="grid-sidebar-content" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', background: 'var(--ctr-gray-dark)', borderRadius: '12px' }}>
            <div className="placeholder-img" style={{ height: 'clamp(200px, 30vw, 300px)' }}>
              {teamPrincipal.name}
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
                {teamPrincipal.name}
              </h3>
              <p style={{ color: 'var(--ctr-yellow)', fontSize: '0.82rem', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
                {teamPrincipal.title.toUpperCase()}
              </p>
              <p style={{ color: 'var(--ctr-text-light)', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}>
                Leading Chennai Turbo Riders with a vision to establish the team as a dominant force
                in Indian motorsport, our Team Principal brings together talent, technology, and teamwork
                to achieve racing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chennai Street Circuit */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--ctr-black)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Home Race</p>
          <h2 className="spaced-title-large" style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 3rem)' }}>
            Chennai Street Circuit
          </h2>
          <div className="grid-2-col" style={{ gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
            {races.streetCircuit.image ? (
              <img
                src={races.streetCircuit.image}
                alt={`${races.streetCircuit.name} map`}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
                loading="lazy"
              />
            ) : (
              <div className="placeholder-img" style={{ height: 'clamp(220px, 30vw, 350px)' }}>
                Street Circuit Map
              </div>
            )}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="grid-2-col" style={{ gap: '1.25rem' }}>
                  <div>
                    <p className="resp-stat-number" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}>
                      {races.streetCircuit.length}
                    </p>
                    <p className="resp-stat-label">CIRCUIT LENGTH</p>
                  </div>
                  <div>
                    <p className="resp-stat-number" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}>
                      {races.streetCircuit.capacity.toLocaleString()}
                    </p>
                    <p className="resp-stat-label">SPECTATOR CAPACITY</p>
                  </div>
                  <div>
                    <p className="resp-stat-number" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}>
                      {races.streetCircuit.stands}
                    </p>
                    <p className="resp-stat-label">GRANDSTANDS</p>
                  </div>
                </div>
              </div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Circuit Route
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {races.streetCircuit.route.map((point, index) => (
                  <span key={index} style={{ padding: '0.4rem 0.7rem', background: 'var(--ctr-gray-dark)', fontSize: '0.78rem', borderRadius: '4px' }}>
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Racing League */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p className="section-label">The Championship</p>
          <h2 className="spaced-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>
            INDIAN RACING LEAGUE
          </h2>
          <p style={{ color: 'var(--ctr-text-light)', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', lineHeight: 1.9, marginBottom: '2rem' }}>
            The Indian Racing League (IRL) is India&apos;s premier single-seater racing championship,
            featuring the Formula 4 South East Asia cars. With races across India&apos;s most iconic cities,
            the IRL brings world-class motorsport action to the subcontinent.
          </p>
          <div className="flex-group-responsive" style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
            <div>
              <p className="resp-stat-number" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>F4</p>
              <p className="resp-stat-label">CAR CATEGORY</p>
            </div>
            <div>
              <p className="resp-stat-number" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>SEA</p>
              <p className="resp-stat-label">SPECIFICATION</p>
            </div>
            <div>
              <p className="resp-stat-number" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>FMSCI</p>
              <p className="resp-stat-label">SANCTIONED BY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) 0', background: 'var(--ctr-dark)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <p className="section-label">Get in Touch</p>
          <h2 className="spaced-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>CONTACT</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--ctr-text-light)', marginBottom: '0.4rem', fontSize: 'clamp(0.88rem, 1.1vw, 1rem)' }}>
              <strong>Website:</strong> {site.officialWebsite}
            </p>
            <p style={{ color: 'var(--ctr-text-light)', fontSize: 'clamp(0.88rem, 1.1vw, 1rem)' }}>
              <strong>Base:</strong> Chennai, Tamil Nadu, India
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn-outline">Instagram</a>
            <a href="#" className="btn btn-outline">Twitter</a>
            <a href="#" className="btn btn-outline">YouTube</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

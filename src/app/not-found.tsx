import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ctr-black)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <p style={{ 
        fontSize: '8rem', 
        fontWeight: 900, 
        color: 'var(--ctr-yellow)',
        lineHeight: 1,
        marginBottom: '1rem'
      }}>
        404
      </p>
      <h1 style={{ 
        fontSize: '1.5rem', 
        letterSpacing: '0.3em', 
        fontWeight: 400,
        marginBottom: '1rem'
      }}>
        P A G E &nbsp; N O T &nbsp; F O U N D
      </h1>
      <p style={{ 
        color: 'var(--ctr-text-light)', 
        marginBottom: '2rem',
        maxWidth: '400px'
      }}>
        The page you're looking for seems to have taken a wrong turn on the track.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  );
}

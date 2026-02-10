import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-page">
      <div>
        <p className="error-code">404</p>
        <h1 className="error-message">Page Not Found</h1>
        <p style={{ color: 'var(--ctr-text-light)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          The page you&apos;re looking for seems to have taken a wrong turn on the track.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

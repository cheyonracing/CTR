'use client';

import React from 'react';

interface InstagramPost {
  id: string;
  url: string;
}

interface InstagramFeedProps {
  username?: string;
  limit?: number;
}

export default function InstagramFeed({ username = 'chennaiturboriders', limit = 6 }: InstagramFeedProps) {
  const posts: InstagramPost[] = [
    { id: '1', url: 'https://www.instagram.com/p/DLIQW3xzIy4/' },
    { id: '2', url: 'https://www.instagram.com/p/DChLCjUzgQX/' },
    { id: '3', url: 'https://www.instagram.com/p/C_K8pDJTc-Q/' },
    { id: '4', url: 'https://www.instagram.com/p/C_6BJbpz7wx/' },
    { id: '5', url: 'https://www.instagram.com/reel/DAgB2x-tOdA/' },
    { id: '6', url: 'https://www.instagram.com/reel/C_Dc2vKNLSb/' },
    { id: '7', url: 'https://www.instagram.com/p/C8W3fxTyRzj/' },
    { id: '8', url: 'https://www.instagram.com/p/C8VnQxpSEMt/' },
    { id: '9', url: 'https://www.instagram.com/p/C8UzBxvyHkL/' },
  ];

  const displayPosts = posts.slice(0, limit);

  return (
    <div className="insta-feed-wrapper">
      <div className="insta-grid">
        {displayPosts.map((post) => {
          const shortcode =
            post.url.split('/p/')[1]?.split('/')[0] ||
            post.url.split('/reel/')[1]?.split('/')[0];
          const embedUrl = `https://www.instagram.com/p/${shortcode}/embed`;

          return (
            <div key={post.id} className="insta-item">
              <div className="insta-card">
                <iframe
                  src={embedUrl}
                  className="insta-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  loading="lazy"
                  title={`Instagram post ${post.id}`}
                />
                <div className="insta-corner-tag">CTR</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

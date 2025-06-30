import React from 'react';
import FeedItemCard from './components/FeedItemCard';

export default async function FeedsPage() {
  console.log('[Page] Rendering FeedsPage...');
  let feeds: any[] = [];

  try {
    const res = await fetch('http://localhost:3000/api/feeds', {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('[Page] /feeds API returned non-200 status');
    } else {
      const data = await res.json();
      feeds = data.feeds;
      console.log('[Page] Received feeds:', feeds.length);
    }
  } catch (error) {
    console.error('[Page] Error fetching feeds:', error);
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Feeds</h1>
      {feeds.length > 0 ? (
        feeds.map((feed) => (
          <FeedItemCard key={feed.id} feed={feed} />
        ))
      ) : (
        <p>No feeds available.</p>
      )}
    </main>
  );
}

import React from 'react';

export default async function FeedsPage() {
  console.log('[Page] Rendering FeedsPage...');
  let feeds: any[] = [];

  try {
    // Using no-store caching to ensure fresh content.
    const res = await fetch('http://localhost:3000/api/feeds', {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('[Page] /api/feeds returned non-200 status');
    } else {
      const data = await res.json();
      feeds = data.feeds;
      console.log('[Page] Received feeds:', feeds.length);
    }
  } catch (error) {
    console.error('[Page] Error fetching feeds:', error);
  }

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 min-h-screen p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Feeds</h1>
      {feeds.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feeds.map((feed) => (
            <div key={feed.id}>
              {/* Each feed item is rendered as a card */}
              <FeedItemCard feed={feed} />
            </div>
          ))}
        </div>
      ) : (
        <p>No feeds available.</p>
      )}
    </main>
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { firestore } from 'firebase-admin';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';

initFirebaseAdminSDK();
const fsdb = firestore();

export async function GET(request: NextRequest) {
  console.log('[API] GET /feeds called...');
  try {
    const snapshot = await fsdb.collection('feeds').get();
    const feeds = snapshot.docs.map((doc) => doc.data());
    console.log('[API] Fetched feeds count:', feeds.length);
    return NextResponse.json({ feeds });
  } catch (error) {
    console.error('[API] Error fetching feeds:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feeds.' },
      { status: 500 }
    );
  }
}

"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Feed {
  id: string;
  uid: string;
  title: string;
  views: any[];
  pinned?: boolean;
  status: string;
  company: string;
  jobType: string;
  feedType: string;
  community: string;
  createdAt: number;
  reactions: Record<string, any>;
  updatedAt: number;
  employType: string;
  description: string;
  inappropriate?: boolean;
  problemToImages?: Record<string, string[]>;
}

interface FeedItemCardProps {
  feed: Feed;
}

export default function FeedItemCard({ feed }: FeedItemCardProps) {
  console.log('[Component] Rendering FeedItemCard for:', feed.id);

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{feed.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Company: {feed.company}</p>
        <p>Status: {feed.status}</p>
        <p>Community: {feed.community}</p>
        <p>Job Type: {feed.jobType}</p>
        <p>Created At: {new Date(feed.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(feed.updatedAt).toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}

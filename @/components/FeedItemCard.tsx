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
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{feed.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-gray-600">Company: {feed.company}</p>
        <p className="text-sm text-gray-600">Status: {feed.status}</p>
        <p className="text-sm text-gray-600">Community: {feed.community}</p>
        <p className="text-sm text-gray-600">Job Type: {feed.jobType}</p>
        <p className="text-sm text-gray-600">Created: {new Date(feed.createdAt).toLocaleString()}</p>
        <p className="text-sm text-gray-600">Updated: {new Date(feed.updatedAt).toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}

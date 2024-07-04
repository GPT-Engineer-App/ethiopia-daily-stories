import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from 'react-icons/ai';

const StoryCard = ({ story }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>
          <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {story.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Upvotes: {story.upvotes}
        </CardDescription>
        <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
          Read more <ArrowRight className="ml-2" />
        </a>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
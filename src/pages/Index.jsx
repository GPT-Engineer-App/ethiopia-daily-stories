import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from '../components/StoryCard';
import SearchBox from '../components/SearchBox';
import SkeletonLoader from '../components/SkeletonLoader';

const fetchTopStories = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=et&apiKey=YOUR_API_KEY');
  const data = await response.json();
  return data.articles.map((article, index) => ({
    id: index,
    title: article.title,
    url: article.url,
    upvotes: Math.floor(Math.random() * 1000), // Placeholder for upvotes
  }));
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: stories, isLoading } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = stories?.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        filteredStories?.map((story) => <StoryCard key={story.id} story={story} />)
      )}
    </div>
  );
};

export default Index;
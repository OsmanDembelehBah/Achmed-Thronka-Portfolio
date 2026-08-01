import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';

const VideoGallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const videoData = {
    id: 1,
    title: 'Achmed Thronka Interview with SLBC',
    description: 'An exclusive interview with Achmed Thronka, CEO of White Dove Electrical Engineering Company, discussing business leadership, entrepreneurship, and the future of engineering in Sierra Leone.',
    videoUrl: '/videos/featured/Manager Interview.mp4',
    thumbnail: '/images/gallery/leadership/Manager4.jpeg',
    duration: '15:30',
    date: '2024',
    category: 'Interview',
  };

  // ... rest of the component remains the same

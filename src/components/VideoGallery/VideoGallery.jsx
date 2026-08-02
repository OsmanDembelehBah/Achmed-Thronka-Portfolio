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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      videoRef.current.currentTime = percentage * duration;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="videos" className="py-24 px-6 bg-gray-50 dark:bg-navy/70">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white">
            Featured <span className="text-gold">Video</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Watch Achmed Thronka's exclusive interview with SLBC</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-navy/80 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative bg-black aspect-video">
            <video ref={videoRef} className="w-full h-full" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} poster={videoData.thumbnail} playsInline>
              <source src={videoData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button onClick={togglePlay} className="absolute inset-0 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300 group">
              <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold/30 transition-all duration-300">
                {isPlaying ? <Pause size={40} className="ml-0" /> : <Play size={40} className="ml-2" />}
              </div>
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-3" onClick={handleProgressClick}>
                <div className="h-full bg-gold rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-4">
                  <button onClick={togglePlay} className="hover:text-gold transition">{isPlaying ? <Pause size={18} /> : <Play size={18} />}</button>
                  <button onClick={toggleMute} className="hover:text-gold transition">{isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
                  <span>{formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}</span>
                </div>
                <button onClick={toggleFullscreen} className="hover:text-gold transition"><Maximize size={18} /></button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">{videoData.category}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{videoData.date}</span>
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{videoData.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{videoData.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallery;

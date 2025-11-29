import React from 'react';
import MemeCard from './MemeCard';
import MemeTag from './MemeTag';

const ArchiveMemeGrid = () => {
  const memes = [
    { id: 21, title: "Park Cat", image: "/placeholder-grid-1.jpg", tags: ["Animals"] },
    { id: 22, title: "Wonyoung Thinking", image: "/placeholder-grid-2.jpg", tags: ["Funny", "Korean"] },
    { id: 23, title: "Lab Scene", image: "/placeholder-grid-3.jpg", tags: [] },
    { id: 24, title: "Barbie Schedule", image: "/placeholder-grid-4.jpg", tags: [] },
    { id: 25, title: "Long Legs", image: "/placeholder-grid-5.jpg", tags: [] },
    { id: 26, title: "Awkward Situation", image: "/placeholder-grid-6.jpg", tags: ["Korean"] },
    { id: 27, title: "Thor Year End", image: "/placeholder-grid-7.jpg", tags: [] },
    { id: 28, title: "Hopeless Romantic", image: "/placeholder-grid-8.jpg", tags: [] },
    { id: 29, title: "Birthday Wishes", image: "/placeholder-grid-9.jpg", tags: [] },
    { id: 30, title: "Horse in Kitchen", image: "/placeholder-grid-10.jpg", tags: [] },
    { id: 31, title: "Japanese Idol", image: "/placeholder-grid-11.jpg", tags: [] },
    { id: 32, title: "Mosquito Meme", image: "/placeholder-grid-12.jpg", tags: [] },
    { id: 33, title: "Sexy Food", image: "/placeholder-grid-13.jpg", tags: [] },
    { id: 34, title: "Anime Character", image: "/placeholder-grid-14.jpg", tags: [] },
    { id: 35, title: "Men vs Gorilla", image: "/placeholder-grid-15.jpg", tags: [] },
    { id: 36, title: "WhatsApp Chat", image: "/placeholder-grid-16.jpg", tags: [] },
    { id: 37, title: "Coffee Proposal", image: "/placeholder-grid-17.jpg", tags: [] },
    { id: 38, title: "Parking Ticket Bug", image: "/placeholder-grid-18.jpg", tags: [] }
  ];

  return (
    <div className="archive-meme-grid">
      <h2 className="grid-title">전체 밈 리스트 (Full Meme List)</h2>
      <div className="meme-grid">
        {memes.map((meme) => (
          <div key={meme.id} className="grid-item">
            <MemeCard meme={meme} />
            {meme.tags && meme.tags.length > 0 && (
              <div className="meme-tags">
                {meme.tags.map((tag, index) => (
                  <MemeTag key={index} tag={tag} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveMemeGrid;


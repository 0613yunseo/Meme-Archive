import { useState } from 'react';
import { Heart, Download, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';

// Mock meme data
const memeData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBmdW5ueXxlbnwxfHx8fDE3NjY5MTIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Happy Dog',
    creator: 'MemeMaster',
    likes: 1240,
    height: 'tall',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBtZW1lfGVufDF8fHx8MTc2NjkxMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Grumpy Cat',
    creator: 'CatLover99',
    likes: 856,
    height: 'short',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556997685-309989c1aa82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMGZhY2V8ZW58MXx8fHwxNzY2OTEyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Funny Face',
    creator: 'LOLCreator',
    likes: 2103,
    height: 'medium',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1762365355558-a4f15f4814f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1lJTIwZnVubnl8ZW58MXx8fHwxNzY2OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Epic Meme',
    creator: 'Memelord',
    likes: 3421,
    height: 'tall',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1518972302003-2376d19601a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMGN1bHR1cmV8ZW58MXx8fHwxNzY2ODI4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tech Culture',
    creator: 'CodeMemes',
    likes: 1876,
    height: 'medium',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1744035018897-3c5e186a0977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY2OTEyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Retro Vibes',
    creator: 'VintageKing',
    likes: 945,
    height: 'short',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBtZW1lfGVufDF8fHx8MTc2NjkxMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cat Wisdom',
    creator: 'WhiskerWise',
    likes: 1567,
    height: 'tall',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBmdW5ueXxlbnwxfHx8fDE3NjY5MTIzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Doggo Life',
    creator: 'PawPrints',
    likes: 2234,
    height: 'medium',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1556997685-309989c1aa82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMGZhY2V8ZW58MXx8fHwxNzY2OTEyMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'LOL Moment',
    creator: 'Giggler',
    likes: 1098,
    height: 'short',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1762365355558-a4f15f4814f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1lJTIwZnVubnl8ZW58MXx8fHwxNzY2OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'When You',
    creator: 'RelatableAF',
    likes: 4521,
    height: 'tall',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1744035018897-3c5e186a0977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY2OTEyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Old School Cool',
    creator: 'ThrowbackThurs',
    likes: 789,
    height: 'medium',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1518972302003-2376d19601a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMGN1bHR1cmV8ZW58MXx8fHwxNzY2ODI4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Digital Age',
    creator: 'OnlineLife',
    likes: 1432,
    height: 'short',
  },
];

export function MemeGallery() {
  const [likedMemes, setLikedMemes] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedMemes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getHeight = (height: string) => {
    switch (height) {
      case 'short': return 'row-span-1';
      case 'medium': return 'row-span-2';
      case 'tall': return 'row-span-3';
      default: return 'row-span-2';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">
          총 {memeData.length}개의 밈
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">최신순</Button>
          <Button variant="outline" size="sm">인기순</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 auto-rows-[180px]">
        {memeData.map((meme) => (
          <div
            key={meme.id}
            className={`group relative rounded-lg overflow-hidden bg-muted ${getHeight(meme.height)}`}
          >
            <img
              src={meme.image}
              alt={meme.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="mb-1 text-white">{meme.title}</h4>
              <p className="text-xs text-gray-300 mb-3">by {meme.creator}</p>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleLike(meme.id)}
                  className="flex items-center gap-1 text-xs hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      likedMemes.has(meme.id) ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                  <span>{likedMemes.has(meme.id) ? meme.likes + 1 : meme.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-xs hover:scale-110 transition-transform">
                  <Download className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-1 text-xs hover:scale-110 transition-transform">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="ml-auto flex items-center gap-1 text-xs hover:scale-110 transition-transform">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`h-8 w-8 rounded-md flex items-center justify-center text-sm transition-colors ${
              page === 1
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

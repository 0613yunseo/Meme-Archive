import { TrendingUp } from 'lucide-react';

const risingKeywords = [
  { rank: 1, keyword: 'Funny', image: 'https://images.unsplash.com/photo-1762365355558-a4f15f4814f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1lJTIwZnVubnl8ZW58MXx8fHwxNzY2OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { rank: 2, keyword: 'Cat', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBtZW1lfGVufDF8fHx8MTc2NjkxMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { rank: 3, keyword: 'Retro', image: 'https://images.unsplash.com/photo-1744035018897-3c5e186a0977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY2OTEyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
];

export function RisingKeywords() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 p-6 border border-purple-200">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-purple-600" />
        <h3 className="text-purple-900">Rising Keywords</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {risingKeywords.map((item) => (
          <div key={item.rank} className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-sm">
              <img 
                src={item.image} 
                alt={item.keyword}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-white text-sm mb-1">Keyword</div>
                <div className="text-white">{item.keyword}</div>
              </div>
              <div className="absolute top-3 left-3">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-sm text-purple-600">{item.rank}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

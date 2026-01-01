import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from './ui/badge';

interface FilterSection {
  title: string;
  items: string[];
  selected?: string[];
}

const filterSections: FilterSection[] = [
  {
    title: '색상',
    items: ['빨강', '파랑', '노랑', '초록', '보라', '분홍', '검정', '흰색'],
  },
  {
    title: '제작자',
    items: ['전체', '공식', '커뮤니티'],
  },
  {
    title: '연도',
    items: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'],
  },
  {
    title: '카테고리',
    items: ['동물', '음식', '스포츠', '영화', '게임', '음악', '기타'],
  },
];

export function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    '색상': true,
    '제작자': true,
    '연도': true,
    '카테고리': false,
  });

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-64 space-y-6">
      <div>
        <h3 className="mb-4">Filter</h3>
        <div className="space-y-4">
          {filterSections.map((section) => (
            <div key={section.title} className="border-b pb-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full mb-3 text-sm"
              >
                <span>{section.title}</span>
                {expandedSections[section.title] ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              
              {expandedSections[section.title] && (
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="cursor-pointer hover:bg-purple-100 hover:text-purple-700 transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

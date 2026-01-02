import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Clock, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { Progress } from './ui/progress';

const summaryItems = [
  {
    title: '진행 중인 작업',
    value: '24',
    description: '현재 활성 프로젝트',
    icon: Clock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    progress: 65,
  },
  {
    title: '완료된 작업',
    value: '127',
    description: '이번 달 완료',
    icon: CheckCircle2,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
    progress: 92,
  },
  {
    title: '주의 필요',
    value: '8',
    description: '마감일 임박',
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-500/10',
    progress: 35,
  },
  {
    title: '성장률',
    value: '+18.7%',
    description: '지난 달 대비',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
    progress: 78,
  },
];

export function SummaryCards() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2>프로젝트 요약</h2>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          모두 보기 →
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => (
          <Card key={item.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-muted-foreground">
                  {item.title}
                </CardTitle>
                <div className={`h-10 w-10 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="mb-1">{item.value}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Progress value={item.progress} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

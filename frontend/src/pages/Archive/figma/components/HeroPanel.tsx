import { TrendingUp, TrendingDown, Users, Target, DollarSign, Activity } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const performanceData = [
  { month: '1월', 수익: 4000, 지출: 2400, 사용자: 2400 },
  { month: '2월', 수익: 3000, 지출: 1398, 사용자: 2210 },
  { month: '3월', 수익: 2000, 지출: 9800, 사용자: 2290 },
  { month: '4월', 수익: 2780, 지출: 3908, 사용자: 2000 },
  { month: '5월', 수익: 1890, 지출: 4800, 사용자: 2181 },
  { month: '6월', 수익: 2390, 지출: 3800, 사용자: 2500 },
  { month: '7월', 수익: 3490, 지출: 4300, 사용자: 2100 },
];

const revenueData = [
  { name: '1월', 값: 12000 },
  { name: '2월', 값: 19000 },
  { name: '3월', 값: 15000 },
  { name: '4월', 값: 25000 },
  { name: '5월', 값: 22000 },
  { name: '6월', 값: 30000 },
];

export function HeroPanel() {
  return (
    <div className="space-y-6">
      {/* 요약 섹션 */}
      <div className="rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 text-primary-foreground">
        <div className="max-w-3xl">
          <h1>프로젝트 대시보드에 오신 것을 환영합니다</h1>
          <p className="mt-2 opacity-90">
            실시간으로 성과를 모니터링하고 비즈니스 인사이트를 확인하세요.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Activity className="h-4 w-4" />
              <span className="text-sm">실시간 업데이트</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">+24% 성장률</span>
            </div>
          </div>
        </div>
      </div>

      {/* 성과 통계 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">총 수익</p>
                <h3 className="mt-2">₩3,490,000</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">활성 사용자</p>
                <h3 className="mt-2">2,543</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">완료된 프로젝트</p>
                <h3 className="mt-2">127</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+18.7%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">평균 성과</p>
                <h3 className="mt-2">92.4%</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                  <TrendingDown className="h-3 w-3" />
                  <span>-2.1%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 데이터 시각화 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4">월별 성과 추이</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="수익"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--chart-1))' }}
                />
                <Line
                  type="monotone"
                  dataKey="사용자"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--chart-2))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4">수익 분석</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="값"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

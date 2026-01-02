import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const projectData = [
  {
    id: 'PRJ-001',
    name: '웹사이트 리디자인',
    client: '테크코퍼레이션',
    status: '진행중',
    priority: '높음',
    progress: 75,
    dueDate: '2025-01-15',
    assignee: '김민수',
  },
  {
    id: 'PRJ-002',
    name: '모바일 앱 개발',
    client: '스타트업 Inc',
    status: '진행중',
    priority: '높음',
    progress: 45,
    dueDate: '2025-02-20',
    assignee: '이영희',
  },
  {
    id: 'PRJ-003',
    name: '마케팅 캠페인',
    client: '글로벌 브랜드',
    status: '완료',
    priority: '중간',
    progress: 100,
    dueDate: '2024-12-28',
    assignee: '박지훈',
  },
  {
    id: 'PRJ-004',
    name: 'UI/UX 컨설팅',
    client: '디자인 스튜디오',
    status: '검토중',
    priority: '낮음',
    progress: 20,
    dueDate: '2025-03-10',
    assignee: '최서연',
  },
  {
    id: 'PRJ-005',
    name: 'API 통합',
    client: '핀테크 솔루션',
    status: '진행중',
    priority: '높음',
    progress: 60,
    dueDate: '2025-01-25',
    assignee: '정동욱',
  },
  {
    id: 'PRJ-006',
    name: '브랜드 아이덴티티',
    client: '뉴비즈니스',
    status: '대기중',
    priority: '중간',
    progress: 10,
    dueDate: '2025-04-05',
    assignee: '강지은',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case '완료':
      return 'bg-green-500/10 text-green-700 hover:bg-green-500/20';
    case '진행중':
      return 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20';
    case '검토중':
      return 'bg-orange-500/10 text-orange-700 hover:bg-orange-500/20';
    case '대기중':
      return 'bg-gray-500/10 text-gray-700 hover:bg-gray-500/20';
    default:
      return 'bg-gray-500/10 text-gray-700';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case '높음':
      return 'bg-red-500/10 text-red-700 hover:bg-red-500/20';
    case '중간':
      return 'bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20';
    case '낮음':
      return 'bg-green-500/10 text-green-700 hover:bg-green-500/20';
    default:
      return 'bg-gray-500/10 text-gray-700';
  }
};

export function ItemsTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>프로젝트 목록</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              필터
            </Button>
            <Button variant="outline" size="sm">
              내보내기
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>프로젝트 ID</TableHead>
                <TableHead>프로젝트명</TableHead>
                <TableHead>클라이언트</TableHead>
                <TableHead>담당자</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>우선순위</TableHead>
                <TableHead>진행률</TableHead>
                <TableHead>마감일</TableHead>
                <TableHead className="text-right">작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectData.map((project) => (
                <TableRow key={project.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{project.id}</TableCell>
                  <TableCell>{project.name}</TableCell>
                  <TableCell className="text-muted-foreground">{project.client}</TableCell>
                  <TableCell>{project.assignee}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getPriorityColor(project.priority)}>
                      {project.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[80px]">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground min-w-[3ch]">
                        {project.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{project.dueDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">메뉴 열기</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          상세보기
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          수정
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          삭제
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

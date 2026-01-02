import { Search, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto mt-[24px] flex h-[73.24px] w-full max-w-[1366.97px] items-center gap-6">
        {/* 로고 */}
        <div className="flex items-center gap-2 mr-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground">D</span>
          </div>
          <span className="font-medium">Dashboard</span>
        </div>

        {/* 네비게이션 링크 */}
        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm">
            개요
          </Button>
          <Button variant="ghost" size="sm">
            프로젝트
          </Button>
          <Button variant="ghost" size="sm">
            분석
          </Button>
          <Button variant="ghost" size="sm">
            팀
          </Button>
        </div>

        {/* 검색 */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="프로젝트 검색..."
              className="pl-8 bg-muted/50"
            />
          </div>
        </div>

        {/* 새 프로젝트 버튼 */}
        <Button className="gap-2">
          <Plus className="h-4 w-4" />새 프로젝트
        </Button>

        {/* 아바타 드롭다운 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-border hover:ring-primary transition-all">
              <img
                src="https://images.unsplash.com/photo-1644904105846-095e45fca990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdmF0YXJ8ZW58MXx8fHwxNzY2ODQ0MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User"
                className="h-full w-full object-cover"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>프로필</DropdownMenuItem>
            <DropdownMenuItem>설정</DropdownMenuItem>
            <DropdownMenuItem>팀</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
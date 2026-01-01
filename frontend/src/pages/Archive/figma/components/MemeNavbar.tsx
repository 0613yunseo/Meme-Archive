import { Code2 } from 'lucide-react';
import { Button } from './ui/button';

export function MemeNavbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500">
              <Code2 className="h-5 w-5 text-white" />
              <span className="font-medium text-white">Transdmrc</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Meme Archive
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Meme Creator
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              My Page
            </a>
          </div>

          {/* Sign In Button */}
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
}

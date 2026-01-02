import { PageType } from '../App';

interface NavbarProps {
  setCurrentPage: (page: PageType) => void;
  currentPage?: PageType;
}

function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M21.73 18.01c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 11.09 3.68 19.42c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 9.68 2.27 1.36c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 8.27l8.32-8.32c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 9.68l8.32 8.33z" fill="var(--fill-0, #7557FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Navbar({ setCurrentPage, currentPage = 'home' }: NavbarProps) {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('home')}
            className="font-['Orbitron'] text-[40px] text-[#7557ff] hover:opacity-80 transition-opacity"
          >
            TrendArc
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-10 font-['Inter'] text-[18px]">
            <button
              onClick={() => setCurrentPage('archive')}
              className={`transition-colors ${
                currentPage === 'archive' ? 'text-[#212121]' : 'text-[rgba(33,33,33,0.8)] hover:text-[#212121]'
              }`}
            >
              Meme Archive
            </button>
            <span className="text-[#212121]">/</span>
            <button
              onClick={() => setCurrentPage('creation')}
              className={`transition-colors ${
                currentPage === 'creation' ? 'text-[#212121]' : 'text-[rgba(33,33,33,0.8)] hover:text-[#212121]'
              }`}
            >
              Meme Creation
            </button>
            <span className="text-[#212121]">/</span>
            <button
              onClick={() => setCurrentPage('community')}
              className={`transition-colors ${
                currentPage === 'community' ? 'text-[#212121]' : 'text-[rgba(33,33,33,0.8)] hover:text-[#212121]'
              }`}
            >
              Community
            </button>
            <span className="text-[#212121]">/</span>
            <button
              onClick={() => setCurrentPage('mypage')}
              className={`transition-colors ${
                currentPage === 'mypage' ? 'text-[#212121]' : 'text-[rgba(33,33,33,0.8)] hover:text-[#212121]'
              }`}
            >
              My Page
            </button>
          </div>

          {/* Sign In Button */}
          <button className="text-[#7557ff] text-[18px] font-['Inter'] hover:opacity-80 transition-opacity">
            Sign in
          </button>

          {/* Search Icon */}
          <div className="flex items-center justify-center size-[24px]">
            <div className="flex-none rotate-[317.505deg] size-[24px]">
              <Frame />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#7557ff] text-white py-16 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-[20px] font-['Inter'] mb-2">Meme@ourmemehub.com</p>
        </div>

        <div className="grid grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-[16px] font-['Inter'] mb-4">Meme Archive</h3>
            <ul className="space-y-2 text-[14px] opacity-80">
              <li>Upload Your Meme</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-['Inter'] mb-4">Meme Creation</h3>
            <ul className="space-y-2 text-[14px] opacity-80">
              <li>Creator Ranking</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-['Inter'] mb-4">Community</h3>
            <ul className="space-y-2 text-[14px] opacity-80">
              <li>Meme Templates</li>
              <li>Contact / Feedback</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-[14px] opacity-60">
          © 2025 MemeHub Inc.  |  Privacy  |  Terms  |  Meme Usage Policy
        </div>
      </div>
    </footer>
  );
}

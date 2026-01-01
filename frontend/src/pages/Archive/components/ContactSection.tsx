import { Mail, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="mt-16 space-y-6">
      {/* Contact Card */}
      <div className="rounded-xl border bg-white p-8 flex items-center justify-between group cursor-pointer hover:shadow-lg transition-shadow">
        <div>
          <h2 className="mb-2">Contact us</h2>
          <p className="text-muted-foreground">
            밈 제출, 파트너십 또는 기타 문의사항이 있으시면 연락주세요
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>

      {/* Footer */}
      <footer className="rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 p-8 text-white">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="mb-4 text-white">MEME ARCHIVE</h4>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Mail className="h-4 w-4" />
              <span>Meme@ournamehub.com</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white text-sm">About Service</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white text-sm">Support</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white text-sm">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-sm opacity-75 text-center">
          © 2024 Transdmrc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

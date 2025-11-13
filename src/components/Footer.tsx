import { Shield, Info, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <p className="text-slate-900 dark:text-slate-100 mb-1">Safe & Secure</p>
              <p className="text-slate-600 dark:text-slate-400">
                Only removes safe-to-delete temporary files
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-purple-500 mt-1" />
            <div>
              <p className="text-slate-900 dark:text-slate-100 mb-1">Smart Detection</p>
              <p className="text-slate-600 dark:text-slate-400">
                Automatically identifies unnecessary files
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-red-500 mt-1" />
            <div>
              <p className="text-slate-900 dark:text-slate-100 mb-1">Free Forever</p>
              <p className="text-slate-600 dark:text-slate-400">
                Open source and completely free to use
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Cfenestra. Made with care for Windows users.
          </p>
        </div>
      </div>
    </footer>
  );
}

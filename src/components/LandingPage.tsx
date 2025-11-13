import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RaccoonIcon } from './RaccoonIcon';
import { 
  Trash2, 
  Zap, 
  Shield, 
  Sparkles, 
  HardDrive, 
  Clock, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Trash2,
      title: 'Smart Cleanup',
      description: 'Automatically detect and remove temporary files, cache, and unnecessary data safely.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Scan and clean your system in seconds with our optimized cleaning engine.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Only removes safe-to-delete files. Your important data is always protected.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
    {
      icon: BarChart3,
      title: 'Track Progress',
      description: 'Monitor your cleanup history and see how much space you\'ve freed over time.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more manual searching for junk files. Let Cfenestra do the heavy lifting.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    },
    {
      icon: HardDrive,
      title: 'Free Up Space',
      description: 'Reclaim gigabytes of disk space by removing unnecessary temporary files.',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
    },
  ];

  const benefits = [
    'Remove temporary system files',
    'Clear browser and app cache',
    'Clean old log files',
    'Delete old downloads',
    'Empty recycle bin',
    'Free up disk space',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
        
        <div className="container mx-auto px-4 py-20 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <RaccoonIcon className="w-32 h-32" />
              </motion.div>
            </div>
            
            <h1 className="text-slate-900 dark:text-slate-100 mb-4">
              Cfenestra
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Your intelligent Windows maintenance companion. Clean, optimize, and keep your system running smoothly with just a few clicks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-slate-900 dark:text-slate-100">10GB+</div>
                <p className="text-slate-600 dark:text-slate-400">Average Space Freed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-slate-900 dark:text-slate-100">30 Sec</div>
                <p className="text-slate-600 dark:text-slate-400">Average Scan Time</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-slate-900 dark:text-slate-100">100%</div>
                <p className="text-slate-600 dark:text-slate-400">Safe & Secure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 dark:text-slate-100 mb-4">
              Powerful Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to keep your Windows system clean and optimized
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 dark:text-slate-100 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Clean your system in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">Scan Your System</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Click scan and let Cfenestra analyze your system for temporary files and junk data
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">Select Categories</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose which types of files you want to clean from the detailed report
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">Clean & Optimize</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Click clean and watch as Cfenestra safely removes unnecessary files and frees up space
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-slate-900 dark:text-slate-100 mb-6">
                What Can Cfenestra Clean?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Cfenestra intelligently identifies and removes various types of temporary and unnecessary files that accumulate on your Windows system over time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Files Found</p>
                      <p className="text-slate-900 dark:text-slate-100">5,061 files</p>
                    </div>
                    <Files className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Space to Free</p>
                      <p className="text-slate-900 dark:text-slate-100">11.64 GB</p>
                    </div>
                    <HardDrive className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Performance Boost</p>
                      <p className="text-slate-900 dark:text-slate-100">+24% faster</p>
                    </div>
                    <Sparkles className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
              <CardContent className="p-12 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-white mb-4">
                  Ready to Clean Your System?
                </h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8">
                  Join thousands of users who trust Cfenestra to keep their Windows systems clean and optimized. Start your cleanup journey today!
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={onGetStarted}
                  className="gap-2"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-white/50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <RaccoonIcon className="w-8 h-8" />
            <span className="text-slate-900 dark:text-slate-100">Cfenestra</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Cfenestra. Made with care for Windows users.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Files({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
  );
}

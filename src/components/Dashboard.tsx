import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { HardDrive, Files, Sparkles, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  totalFiles: number;
  estimatedSize: string;
  freedSpace: number;
  isScanning: boolean;
  onScan: () => void;
}

export function Dashboard({ totalFiles, estimatedSize, freedSpace, isScanning, onScan }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Files className="w-5 h-5 text-blue-500" />
            Temporary Files
          </CardTitle>
          <CardDescription>Files detected for cleanup</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-slate-900 dark:text-slate-100">{totalFiles.toLocaleString()}</span>
              <span className="text-slate-500">files</span>
            </div>
            <Progress value={Math.min((totalFiles / 10000) * 100, 100)} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-purple-500" />
            Estimated Size
          </CardTitle>
          <CardDescription>Space that can be freed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-slate-900 dark:text-slate-100">{estimatedSize}</span>
              <span className="text-slate-500">MB</span>
            </div>
            <Progress value={Math.min((parseFloat(estimatedSize) / 10000) * 100, 100)} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-green-500" />
            Space Freed
          </CardTitle>
          <CardDescription>Total cleaned this session</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-slate-900 dark:text-slate-100">{freedSpace.toFixed(2)}</span>
              <span className="text-slate-500">MB</span>
            </div>
            <Progress value={Math.min((freedSpace / 10000) * 100, 100)} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 mb-1">
                System Status
              </p>
              <p className="text-slate-900 dark:text-slate-100">
                {isScanning ? 'Scanning for temporary files...' : 'Ready to scan and clean'}
              </p>
            </div>
            <Button
              onClick={onScan}
              disabled={isScanning}
              size="lg"
              className="gap-2"
            >
              {isScanning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Search className="w-5 h-5" />
                  </motion.div>
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Start Scan
                </>
              )}
            </Button>
          </div>
          {isScanning && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <Progress value={66} className="h-2" />
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { Trash2, FileText, FolderOpen, Download, Archive, Database } from 'lucide-react';
import { motion } from 'motion/react';

interface CleanupOptionsProps {
  cleanupData: {
    tempFiles: number;
    cache: number;
    logs: number;
    downloads: number;
    recycling: number;
  };
  isCleaning: boolean;
  onCleanup: (selectedCategories: string[]) => void;
}

const categories = [
  {
    id: 'tempFiles',
    label: 'Temporary Files',
    description: 'System and application temporary files',
    icon: FileText,
    color: 'text-blue-500',
  },
  {
    id: 'cache',
    label: 'Cache Files',
    description: 'Browser and application cache',
    icon: Database,
    color: 'text-purple-500',
  },
  {
    id: 'logs',
    label: 'Log Files',
    description: 'System and application logs',
    icon: FolderOpen,
    color: 'text-orange-500',
  },
  {
    id: 'downloads',
    label: 'Old Downloads',
    description: 'Files older than 30 days',
    icon: Download,
    color: 'text-cyan-500',
  },
  {
    id: 'recycling',
    label: 'Recycle Bin',
    description: 'Permanently delete recycled files',
    icon: Archive,
    color: 'text-red-500',
  },
];

export function CleanupOptions({ cleanupData, isCleaning, onCleanup }: CleanupOptionsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (categoryId: string) => {
    setSelected(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCleanup = () => {
    if (selected.length > 0) {
      onCleanup(selected);
      setSelected([]);
    }
  };

  const selectedCount = selected.reduce((sum, id) => {
    return sum + (cleanupData[id as keyof typeof cleanupData] || 0);
  }, 0);

  const selectedSize = (selectedCount * 2.3).toFixed(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Cleanup Options
        </CardTitle>
        <CardDescription>
          Select categories to clean up
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = cleanupData[category.id as keyof typeof cleanupData];
            const size = (count * 2.3).toFixed(2);
            const isSelected = selected.includes(category.id);

            return (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    isSelected
                      ? 'border-blue-500 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                  onClick={() => toggleSelection(category.id)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleSelection(category.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-slate-900 dark:text-slate-100">
                            {category.label}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-slate-900 dark:text-slate-100">
                            {count.toLocaleString()}
                          </span>
                          <span className="text-slate-500">files</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500">{size} MB</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-900 dark:text-slate-100 mb-1">
                Selected: {selectedCount.toLocaleString()} files ({selectedSize} MB)
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {selected.length} {selected.length === 1 ? 'category' : 'categories'} selected
              </p>
            </div>
            <Button
              onClick={handleCleanup}
              disabled={selected.length === 0 || isCleaning}
              size="lg"
              variant="destructive"
              className="gap-2"
            >
              {isCleaning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.div>
                  Cleaning...
                </>
              ) : (
                <>
                  <Trash2 className="w-5 h-5" />
                  Clean Now
                </>
              )}
            </Button>
          </div>
          {isCleaning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Progress value={45} className="h-2" />
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

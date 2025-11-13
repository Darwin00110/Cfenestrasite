import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CleanupOptions } from './components/CleanupOptions';
import { Footer } from './components/Footer';
import { AuthPanel } from './components/AuthPanel';
import { LandingPage } from './components/LandingPage';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isCleaning, setIsCleaning] = useState(false);
  const [totalScans, setTotalScans] = useState(0);
  const [cleanupData, setCleanupData] = useState({
    tempFiles: 1247,
    cache: 890,
    logs: 423,
    downloads: 156,
    recycling: 2345,
  });
  const [freedSpace, setFreedSpace] = useState(0);

  const totalFiles = Object.values(cleanupData).reduce((a, b) => a + b, 0);
  const estimatedSize = (totalFiles * 2.3).toFixed(2); // MB

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setCleanupData({
        tempFiles: Math.floor(Math.random() * 2000) + 500,
        cache: Math.floor(Math.random() * 1500) + 300,
        logs: Math.floor(Math.random() * 800) + 200,
        downloads: Math.floor(Math.random() * 300) + 50,
        recycling: Math.floor(Math.random() * 3000) + 1000,
      });
      setIsScanning(false);
      setTotalScans(prev => prev + 1);
    }, 3000);
  };

  const handleCleanup = (selectedCategories: string[]) => {
    setIsCleaning(true);
    let totalCleaned = 0;
    
    selectedCategories.forEach(category => {
      if (cleanupData[category as keyof typeof cleanupData]) {
        totalCleaned += cleanupData[category as keyof typeof cleanupData];
      }
    });

    setTimeout(() => {
      const newData = { ...cleanupData };
      selectedCategories.forEach(category => {
        if (category in newData) {
          newData[category as keyof typeof cleanupData] = 0;
        }
      });
      setCleanupData(newData);
      setFreedSpace(prev => prev + (totalCleaned * 2.3));
      setIsCleaning(false);
    }, 2500);
  };

  const handleLogin = (email: string, name: string) => {
    setUser({ email, name });
    // Save to localStorage for persistence
    localStorage.setItem('cfenestra_user', JSON.stringify({ email, name }));
  };

  // Check for saved user on mount
  useState(() => {
    const savedUser = localStorage.getItem('cfenestra_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setShowLanding(false);
    }
    
    // Check if user has seen the landing page
    const hasSeenLanding = localStorage.getItem('cfenestra_seen_landing');
    if (hasSeenLanding && !savedUser) {
      setShowLanding(false);
    }
  });

  // Show landing page first
  if (showLanding) {
    return <LandingPage onGetStarted={() => {
      setShowLanding(false);
      localStorage.setItem('cfenestra_seen_landing', 'true');
    }} />;
  }

  // Show auth panel if not logged in
  if (!user) {
    return <AuthPanel onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Dashboard
          totalFiles={totalFiles}
          estimatedSize={estimatedSize}
          freedSpace={freedSpace}
          isScanning={isScanning}
          onScan={handleScan}
        />

        <CleanupOptions
          cleanupData={cleanupData}
          isCleaning={isCleaning}
          onCleanup={handleCleanup}
        />
      </main>

      <Footer />
    </div>
  );
}
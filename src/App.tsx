import { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard').then(module => ({ default: module.Dashboard })));
const CleanupOptions = lazy(() => import('./components/CleanupOptions').then(module => ({ default: module.CleanupOptions })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const AuthPanel = lazy(() => import('./components/AuthPanel').then(module => ({ default: module.AuthPanel })));
const LandingPage = lazy(() => import('./components/LandingPage').then(module => ({ default: module.LandingPage })));

// Google OAuth Client ID Configuration
// Leave empty to disable Google Sign-In (app will work with email/password only)
// To enable Google Sign-In, replace with your Client ID from: https://console.cloud.google.com/apis/credentials
// Example: '123456789-abc123.apps.googleusercontent.com'
const GOOGLE_CLIENT_ID = '';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [user, setUser] = useState<{ email: string; name: string; picture?: string } | null>(null);
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

  const handleLogin = (email: string, name: string, picture?: string) => {
    setUser({ email, name, picture });
    // Save to localStorage for persistence
    localStorage.setItem('cfenestra_user', JSON.stringify({ email, name, picture }));
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
    return (
      <Suspense fallback={<LoadingScreen />}>
        <LandingPage onGetStarted={() => {
          setShowLanding(false);
          localStorage.setItem('cfenestra_seen_landing', 'true');
        }} />
      </Suspense>
    );
  }

  // Check if Google Client ID is configured
  const isGoogleConfigured = GOOGLE_CLIENT_ID && 
    GOOGLE_CLIENT_ID.length > 0 && 
    GOOGLE_CLIENT_ID.includes('.apps.googleusercontent.com');

  // Show auth panel if not logged in
  if (!user) {
    if (isGoogleConfigured) {
      return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Suspense fallback={<LoadingScreen />}>
            <AuthPanel onLogin={handleLogin} googleEnabled={true} />
          </Suspense>
        </GoogleOAuthProvider>
      );
    } else {
      return (
        <Suspense fallback={<LoadingScreen />}>
          <AuthPanel onLogin={handleLogin} googleEnabled={false} />
        </Suspense>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />
      
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </div>
  );
}
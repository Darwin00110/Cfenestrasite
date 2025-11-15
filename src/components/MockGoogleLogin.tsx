import { Button } from './ui/button';
import { useState } from 'react';

interface MockGoogleLoginProps {
  onSuccess: (email: string, name: string, picture: string) => void;
  onError: () => void;
  text?: 'signin_with' | 'signup_with';
}

// Mock Google Login for testing without real API credentials
export function MockGoogleLogin({ onSuccess, onError, text = 'signin_with' }: MockGoogleLoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleMockLogin = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Generate mock user data
      const mockUsers = [
        {
          name: 'João Silva',
          email: 'joao.silva@gmail.com',
          picture: 'https://ui-avatars.com/api/?name=João+Silva&background=4285F4&color=fff&size=128&bold=true',
        },
        {
          name: 'Maria Santos',
          email: 'maria.santos@gmail.com',
          picture: 'https://ui-avatars.com/api/?name=Maria+Santos&background=DB4437&color=fff&size=128&bold=true',
        },
        {
          name: 'Pedro Costa',
          email: 'pedro.costa@gmail.com',
          picture: 'https://ui-avatars.com/api/?name=Pedro+Costa&background=F4B400&color=fff&size=128&bold=true',
        },
      ];

      // Pick a random user
      const mockUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      
      setIsLoading(false);
      onSuccess(mockUser.email, mockUser.name, mockUser.picture);
    }, 1000);
  };

  const buttonText = text === 'signin_with' ? 'Continuar com Google' : 'Cadastrar com Google';

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full gap-3 h-11"
      onClick={handleMockLogin}
      disabled={isLoading}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      {isLoading ? 'Conectando...' : buttonText}
    </Button>
  );
}

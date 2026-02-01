// src/components/auth/LoginForm.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate delay – replace with real API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));

      if (!username.trim() || !password.trim()) {
        setError('Please enter both username and password.');
        return;
      }

      // ── Demo only ────────────────────────────────────────
      alert('Login successful! (Demo mode)');

      // When you implement real login:
      // const res = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // });
      // if (!res.ok) throw new Error(await res.text());

      // Success → redirect
      // router.push('/dashboard');
      // router.replace('/dashboard'); // prevents going back to login
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Username or Email
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
            placeholder="Enter your username or email"
            required
            autoFocus
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
            placeholder="••••••••"
            required
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm text-center bg-red-950/30 py-2 px-4 rounded-lg border border-red-800/40">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full py-3.5 px-6 rounded-lg font-semibold text-white
            bg-gradient-to-r from-indigo-600 to-blue-700
            hover:from-indigo-500 hover:to-blue-600
            focus:ring-2 focus:ring-indigo-500/50 focus:outline-none
            shadow-lg shadow-indigo-900/40
            transition-all duration-300
            disabled:opacity-60 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
          `}
        >
          {isLoading ? (
            <>
              <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-slate-400 space-y-2">
        <Link href="/forgot-password" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          Forgot your password?
        </Link>
        <p>
          Don't have an account?{' '}
          <Link href="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
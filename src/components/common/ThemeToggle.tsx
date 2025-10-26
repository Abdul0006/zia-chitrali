import { useTheme } from '@/src/context/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-palestine-white text-palestine-green hover:bg-palestine-gold focus:outline-none focus:ring-2 focus:ring-palestine-green transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5 text-palestine-gold" />
      )}
    </button>
  );
}
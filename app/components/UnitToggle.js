'use client';

export default function UnitToggle({ unit, onToggle }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onToggle('metric')}
        className={`px-3 py-1 rounded-l-lg text-sm font-medium transition-colors ${
          unit === 'metric'
            ? 'bg-blue-500 text-white'
            : 'bg-white/20 text-white/80 hover:bg-white/30'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle('imperial')}
        className={`px-3 py-1 rounded-r-lg text-sm font-medium transition-colors ${
          unit === 'imperial'
            ? 'bg-blue-500 text-white'
            : 'bg-white/20 text-white/80 hover:bg-white/30'
        }`}
      >
        °F
      </button>
    </div>
  );
}

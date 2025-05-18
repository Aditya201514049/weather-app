'use client';

export default function ErrorDisplay({ message }) {
  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md w-full border border-white/20">
      <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 mb-4">
          <div className="bg-white/10 p-3 rounded-full">
            <svg className="h-8 w-8 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Location Not Found</h3>
        <p className="text-white/80">
          {message || 'We couldn\'t find weather data for this location. Please check the spelling or try another city.'}
        </p>
        <div className="mt-4">
          <p className="text-white/60 text-sm">
            Try searching for a major city or check for spelling errors.
          </p>
        </div>
      </div>
    </div>
  );
}

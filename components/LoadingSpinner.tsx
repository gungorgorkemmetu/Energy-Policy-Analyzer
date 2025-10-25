
import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-sky-600 mb-4"></div>
            <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">Performing ethical analysis...</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">This may take a moment.</p>
        </div>
    );
};

export default LoadingSpinner;

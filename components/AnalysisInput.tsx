
import React from 'react';

interface AnalysisInputProps {
    inputText: string;
    setInputText: (text: string) => void;
    handleAnalyze: () => void;
    isLoading: boolean;
}

const AnalysisInput: React.FC<AnalysisInputProps> = ({ inputText, setInputText, handleAnalyze, isLoading }) => {
    return (
        <div className="flex flex-col space-y-4">
            <label htmlFor="research-text" className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                Enter Research Text or Abstract
            </label>
            <textarea
                id="research-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your text here to begin the ethical analysis..."
                className="w-full h-64 p-4 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-500"
                disabled={isLoading}
            />
            <button
                onClick={handleAnalyze}
                disabled={isLoading || !inputText.trim()}
                className="w-full sm:w-auto self-end px-8 py-3 bg-sky-600 text-white font-bold rounded-lg shadow-md hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors transform hover:scale-105"
            >
                {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
        </div>
    );
};

export default AnalysisInput;

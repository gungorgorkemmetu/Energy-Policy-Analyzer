
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import AnalysisInput from './components/AnalysisInput';
import AnalysisOutput from './components/AnalysisOutput';
import { AnalysisResult } from './types';
import { analyzeText } from './services/geminiService';

const App: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = useCallback(async () => {
        if (!inputText.trim()) return;

        setIsLoading(true);
        setError(null);
        setAnalysisResult(null);

        try {
            const result = await analyzeText(inputText);
            setAnalysisResult(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred during analysis.');
            }
        } finally {
            setIsLoading(false);
        }
    }, [inputText]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
            <main className="container mx-auto px-4 py-8">
                <Header />
                <div className="mt-8 p-6 md:p-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                    <AnalysisInput
                        inputText={inputText}
                        setInputText={setInputText}
                        handleAnalyze={handleAnalyze}
                        isLoading={isLoading}
                    />
                </div>
                <div className="mt-10">
                    <AnalysisOutput
                        analysisResult={analysisResult}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
            </main>
             <footer className="text-center py-6 text-sm text-slate-500 dark:text-slate-400">
                <p>Powered by Google Gemini. For educational and research purposes only.</p>
            </footer>
        </div>
    );
};

export default App;

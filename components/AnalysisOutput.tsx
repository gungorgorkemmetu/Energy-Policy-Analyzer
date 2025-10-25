
import React from 'react';
import { AnalysisResult } from '../types';
import EthicalCard from './EthicalCard';
import LoadingSpinner from './LoadingSpinner';
import { BookIcon, EyeIcon, LeafIcon, PersonIcon, ScaleIcon, UsersIcon } from '../constants';

interface AnalysisOutputProps {
    analysisResult: AnalysisResult | null;
    isLoading: boolean;
    error: string | null;
}

const frameworkMapping = [
    { key: 'utilitarianism' as keyof AnalysisResult, title: 'Utilitarianism', icon: <ScaleIcon />, color: 'bg-blue-500' },
    { key: 'deontology' as keyof AnalysisResult, title: 'Deontology', icon: <BookIcon />, color: 'bg-indigo-500' },
    { key: 'virtue_ethics' as keyof AnalysisResult, title: 'Virtue Ethics', icon: <PersonIcon />, color: 'bg-purple-500' },
    { key: 'justice_and_equity' as keyof AnalysisResult, title: 'Justice and Equity', icon: <UsersIcon />, color: 'bg-teal-500' },
    { key: 'environmental_impact' as keyof AnalysisResult, title: 'Environmental Impact', icon: <LeafIcon />, color: 'bg-green-500' },
    { key: 'transparency_and_accountability' as keyof AnalysisResult, title: 'Transparency & Accountability', icon: <EyeIcon />, color: 'bg-slate-500' },
];

const AnalysisOutput: React.FC<AnalysisOutputProps> = ({ analysisResult, isLoading, error }) => {
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <div className="p-8 text-center bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300">Analysis Failed</h3>
                <p className="mt-2 text-red-600 dark:text-red-400">{error}</p>
            </div>
        );
    }
    
    if (!analysisResult) {
        return (
            <div className="p-8 text-center bg-sky-100/50 dark:bg-sky-900/20 border-2 border-dashed border-sky-300 dark:border-sky-700 rounded-lg">
                <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-200">Awaiting Analysis</h3>
                <p className="mt-2 text-sky-600 dark:text-sky-400">
                    Your detailed ethical report will appear here once the analysis is complete.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkMapping.map(({ key, title, icon, color }) => (
                analysisResult[key] && (
                    <EthicalCard
                        key={key}
                        title={title}
                        icon={icon}
                        analysis={analysisResult[key]}
                        colorClass={color}
                    />
                )
            ))}
        </div>
    );
};

export default AnalysisOutput;

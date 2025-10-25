
import React from 'react';
import { EthicalFrameworkAnalysis } from '../types';

interface EthicalCardProps {
    title: string;
    icon: React.ReactNode;
    analysis: EthicalFrameworkAnalysis;
    colorClass: string;
}

const EthicalCard: React.FC<EthicalCardProps> = ({ title, icon, analysis, colorClass }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className={`p-4 flex items-center space-x-4 ${colorClass}`}>
                <div className="flex-shrink-0">{icon}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    {analysis.summary}
                </p>
                <ul className="space-y-2">
                    {analysis.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <svg className={`flex-shrink-0 h-5 w-5 ${colorClass.replace('bg-', 'text-')} mr-2 mt-1`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700 dark:text-slate-200">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EthicalCard;

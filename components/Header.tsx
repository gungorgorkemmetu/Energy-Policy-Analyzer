
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full text-center p-4 md:p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                Ethical AI & Energy Policy Analyzer
            </h1>
            <p className="mt-2 text-md sm:text-lg text-slate-600 dark:text-slate-400">
                Uncover the ethical dimensions of your research with AI-powered analysis.
            </p>
        </header>
    );
};

export default Header;

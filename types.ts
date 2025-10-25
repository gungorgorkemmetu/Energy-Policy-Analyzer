
export interface EthicalFrameworkAnalysis {
  summary: string;
  points: string[];
}

export interface AnalysisResult {
  utilitarianism: EthicalFrameworkAnalysis;
  deontology: EthicalFrameworkAnalysis;
  virtue_ethics: EthicalFrameworkAnalysis;
  justice_and_equity: EthicalFrameworkAnalysis;
  environmental_impact: EthicalFrameworkAnalysis;
  transparency_and_accountability: EthicalFrameworkAnalysis;
}

export interface BehaviorIssue {
  id: string;
  name: string;
  severity: 'high' | 'medium' | 'urgent';
  description: string;
  urgencyReason: string;
  recommendedAction: string;
}

export interface CaseStudy {
  id: string;
  dogName: string;
  breed: string;
  age: string;
  problem: string;
  trigger: string;
  ownerPain: string;
  psychologyDiagnosis: string;
  solutionSteps: string[];
  outcome: string;
  timelineWeeks: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'methodology' | 'pricing' | 'process' | 'effect';
}

export interface TrainerCredential {
  title: string;
  institution: string;
  highlight: string;
  description: string;
}

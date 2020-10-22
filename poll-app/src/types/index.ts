export type Results = {
  [key: string]: number;
}

export type Choice = {
  id: number;
  label: string;
}

export interface PollStore {
  id: number;
  question: string;
  choices: Choice[];
  results: Results;
}
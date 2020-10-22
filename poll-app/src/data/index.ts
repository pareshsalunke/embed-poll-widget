import { PollStore } from '../types';

export const initData: PollStore[] = [
  {
    id: 1,
    question: 'How do you feel today?',
    choices: [
      {
        id: 1,
        label: "Brilliant! I have so much energy.",
      },
      {
        id: 2,
        label:  "I've had worse days.",
      },
      {
        id: 3,
        label: "Please, end my misery.",
      },
    ],
    results: {
      1: 0,
      2: 30,
      3: 5
    }
  },
  {
    id: 2,
    question: 'How you like Opinary test?',
    choices: [
      {
        id: 1,
        label: "It was great and so challenging",
      },
      {
        id: 2,
        label: "Not bad, but you can improve",
      },
      {
        id: 3,
        label: "It was a nightmare, never again",
      }
    ],
    results: {
      1: 400,
      2: 700,
      3: 34
    }
  },
  {
    id: 3,
    question: 'Was I able to make stepper work?',
    choices: [
      {
        id: 1,
        label: "Hell Yeah",
      },
      {
        id: 2,
        label: "Could be better",
      },
      {
        id: 3,
        label: "Awkward Silence",
      }
    ],
    results: {
      1: 84,
      2: 30,
      3: 5
    }
  },
];


export const saveResult = (id: number, results: PollStore) => {
  const pollResults = JSON.stringify(results);
  localStorage.setItem('store',pollResults);
};